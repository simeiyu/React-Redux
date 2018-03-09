import React, {Component} from 'react'
import Counter from './Counter'

class ControlPanel extends Component {

    constructor(props) {
        super(props)

        this.onCounterUpdate = this.onCounterUpdate.bind(this)

        this.initValues = [0, 10, 20]
        const initSum = this.initValues.reduce((a, b) => a + b, 0)

        this.state = {sum: initSum}
    }

    onCounterUpdate(newValue, previousValue) {
        const {sum} = this.state
        const valueChange = newValue - previousValue
        this.setState({sum: sum + valueChange})
    }
    render() {
        return (
            <div style={{margin: 16}}>
                <Counter caption="First" defaultValue={this.initValues[0]} onUpdate={this.onCounterUpdate} />
                <Counter caption="Second" defaultValue={this.initValues[1]} onUpdate={this.onCounterUpdate} />
                <Counter caption="Third" defaultValue={this.initValues[2]} onUpdate={this.onCounterUpdate} />
                <div>Total Count: {this.state.sum}</div>
            </div>
        )
    }
}

export default ControlPanel
