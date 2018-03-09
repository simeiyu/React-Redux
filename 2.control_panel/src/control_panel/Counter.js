import React, {Component} from 'react'
import PropTypes from 'prop-types'

const buttonStyle = {margin: 10}
class Counter extends Component {

    constructor(props) {
        console.log("enter constructor: ", props.caption)
        super(props)

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)

        this.state = {
            count: props.defaultValue
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("enter componentWillReceiveProps: ", this.props.caption, nextProps.defaultValue)
        this.setState({
            count: nextProps.defaultValue
        })
    }

    componentWillMount() {
        console.log("enter componentWillMount: ", this.props.caption)
    }

    componentDidMount() {
        console.log("enter componentDidMount: ", this.props.caption)
    }

    onClickIncrementButton() {
        this.setState({
            count: this.state.count + 1
        })
    }

    onClickDecrementButton() {
        this.setState({
            count: this.state.count - 1
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("enter shouldComponentUpdate, nextProps: ", nextProps.caption, ", this.props: ", this.props.caption)
        console.log(`nextState: ${nextState.count} , this.state: ${this.state.count}`)
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.setState.count)
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
    defaultValue: PropTypes.number
}
Counter.defaultProps = {
    defaultValue: 0
}

export default Counter
