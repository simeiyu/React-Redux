import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as Actions from '../Actions'
import CounterStore from '../stores/CounterStore'

const buttonStyle = {margin: 10}
class Counter extends Component {

    constructor(props) {
        super(props)

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
        this.onChange = this.onChange.bind(this)

        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange)
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption]
        this.setState({count: newCount})
    }

    onClickIncrementButton() {
        Actions.increment(this.props.caption)
    }

    onClickDecrementButton() {
        Actions.decrement(this.props.caption)
    }

    render() {
        console.log("enter render: ", this.props.caption)
        const {caption} = this.props
        const {count} = this.state
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {count}</span>
            </div>
        )
    }
}

Counter.proptypes = {
    caption: PropTypes.string.isRequired
}

export default Counter
