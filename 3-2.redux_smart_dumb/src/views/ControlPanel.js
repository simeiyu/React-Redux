import React, {Component} from 'react'
import Counter from './Counter'
import Summary from './Summary'

class ControlPanel extends Component {

    render() {
        return (
            <div style={{margin: 16}}>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <hr />
                <Summary />
            </div>
        )
    }
}

export default ControlPanel
