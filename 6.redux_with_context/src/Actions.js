import * as ActionTypes from './ActionTypes'

export const increment = (counterCaption) => ({
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
})

export const decrement = (counterCaption) => ({
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
})