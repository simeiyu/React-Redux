import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as Actions from '../Actions'

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

Counter.prototype = {
    caption: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        value: state[ownProps.caption]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: () => {dispatch(Actions.increment(ownProps.caption))},
        onDecrement: () => {dispatch(Actions.decrement(ownProps.caption))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) 
