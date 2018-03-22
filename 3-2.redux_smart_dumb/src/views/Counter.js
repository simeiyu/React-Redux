import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as Actions from '../Actions'
import store from '../Store'

const buttonStyle = {margin: 10}

function Counter({caption, onIncrement, onDecrement, value}) {
    return (
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    )
}

class CounterContainer extends Component {

    constructor(props) {
        super(props)

        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
        this.onChange = this.onChange.bind(this)
        this.getOwnState = this.getOwnState.bind(this)

        this.state = this.getOwnState()
    }

    componentDidMount() {
        store.subscribe(this.onChange)
        // subscribe方法监听store，只要store状态发生变化，就会调用onChange
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange)
        // 清理动作，与componentDidMount中的动作对应。注销监听。
    }

    getOwnState() {
        return {value: store.getState()[this.props.caption]}
    }

    onChange() {
        this.setState(this.getOwnState())
    }

    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption))
    }

    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption))
    }

    render() {
        console.log("enter render: ", this.props.caption)
        const {caption} = this.props
        const {value} = this.state
        return (
            <Counter caption={caption} value={value} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
        )
    }
}

Counter.proptypes = {
    caption: PropTypes.string.isRequired
}

export default CounterContainer
