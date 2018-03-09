import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import * as Actions from '../Actions'

class CounterContainer extends Component {

    constructor(props, context) {
        super(props, context)

        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
        this.onChange = this.onChange.bind(this)
        this.getOwnState = this.getOwnState.bind(this)

        this.state = this.getOwnState()
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange)
        // subscribe方法监听store，只要store状态发生变化，就会调用onChange
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange)
        // 清理动作，与componentDidMount中的动作对应。注销监听。
    }

    getOwnState() {
        return {
            value: this.context.store.getState()[this.props.caption]
        }
    }

    onChange() {
        this.setState(this.getOwnState())
    }

    onIncrement() {
        this.context.store.dispatch(Actions.increment(this.props.caption))
    }

    onDecrement() {
        this.context.store.dispatch(Actions.decrement(this.props.caption))
    }

    render() {
        console.log("enter render: ", this.props.caption)
        const {
            caption
        } = this.props
        const {
            value
        } = this.state
        return ( <
            Counter caption = {
                caption
            }
            value = {
                value
            }
            onIncrement = {
                this.onIncrement
            }
            onDecrement = {
                this.onDecrement
            }
            />
        )
    }
}

CounterContainer.proptypes = {
    caption: PropTypes.string.isRequired
}

CounterContainer.contextTypes = {
    store: PropTypes.object
}

export default CounterContainer