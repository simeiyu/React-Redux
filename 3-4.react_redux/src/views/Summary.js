import React from 'react'
import {connect} from 'react-redux'

const Summary = ({sum}) => (<div>Total Count: {sum}</div>)

const mapStateToProps = (state) => {
    let sum = 0
    for(const key in state) {
        if(state.hasOwnProperty(key)) {
            sum += state[key]
        }
    }
    return {sum: sum}
}

export default connect(mapStateToProps, null)(Summary)
