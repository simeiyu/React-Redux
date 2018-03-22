import React, {Component} from 'react'
import store from '../Store'

class Summary extends Component {
    constructor(props) {
        super(props)

        this.onUpdate = this.onUpdate.bind(this)
        this.getOwnState = this.getOwnState.bind(this)

        this.state = this.getOwnState()
    }

    componentDidMount() {
        store.subscribe(this.onUpdate)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onUpdate)
    }

    getOwnState() {
        const state = store.getState()
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

export default Summary
