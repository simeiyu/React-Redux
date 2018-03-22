import React, {Component} from 'react'
import PropTypes from 'prop-types'

const buttonStyle = {margin: 10}
class Counter extends Component {

    constructor(props) {
        super(props)

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
        this.onUpdataCount = this.onUpdataCount.bind(this)

        this.state = {
            count: props.defaultValue
        }
    }

    onClickIncrementButton() {
        this.onUpdataCount(true)
    }

    onClickDecrementButton() {
        this.onUpdataCount(false)
    }

    onUpdataCount(isIncrement) {
        const {count} = this.state
        const newCount = isIncrement ? count + 1 : count - 1
        this.setState({count: newCount})
        this.props.onUpdate(newCount, count)
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
    caption: PropTypes.string.isRequired,
    defaultValue: PropTypes.number,
    onUpdate: PropTypes.func
}
Counter.defaultProps = {
    defaultValue: 0,
    onUpdate: f => f   // 默认是一个什么都不做的函数
}

export default Counter
