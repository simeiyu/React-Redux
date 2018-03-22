import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            value: ''
        }
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        let value = this.state.value
        if(!value.trim()) {
            return
        }
        this.props.onAdd(value)
        this.setState({value: ''})
    }
    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="new-todo" value={this.state.value} onChange={this.handleChange} />
                    <button type="submit" className="add-btn">添加</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    onAdd: (text) => {dispatch(addTodo(text))}
})

export default connect(null, mapDispatchToProps)(AddTodo)