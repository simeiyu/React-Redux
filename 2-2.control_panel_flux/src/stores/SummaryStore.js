import AppDispatcher from '../AppDispatcher'
import * as ActionTypes from '../ActionTypes'
import {EventEmitter} from 'events'
import CounterStore from './CounterStore'

const CHANGE_EVENT = 'changed'

const computeSummary = (counterValues) => {
    let summary = 0
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key]
        }
    }
    return summary
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function() {
        return computeSummary(CounterStore.getCounterValues())
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
})

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
    if(action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT) {
        AppDispatcher.waitFor([CounterStore.dispatchToken])
        SummaryStore.emitChange()
    }
})

export default SummaryStore
