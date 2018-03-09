import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Summary extends Component {
    constructor(props, context) {
        super(props, context)

        this.onUpdate = this.onUpdate.bind(this)
        this.getOwnState = this.getOwnState.bind(this)

        this.state = this.getOwnState()
    }

    componentDidMount() {
        this.context.store.subscribe(this.onUpdate)
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onUpdate)
    }

    getOwnState() {
        const state = this.context.store.getState()
        let sum = 0
        for(const key in state) {
            if(state.hasOwnProperty(key)) {
                sum += state[key]
            }
        }
        return {sum}
    }

    onUpdate() {
        this.setState(this.getOwnState())
    }

    render() {
        return (
            <div>Total Count: {this.state.sum}</div>
        )
    }
}

Summary.contextTypes = {
    store: PropTypes.object
}

export default Summary
