import React from 'react'
import Counter from './Counter'

const ControlPanel = () => {
    console.log("enter ControlPanel render")
    return (
        <div style={{margin: 16}}>
            <Counter caption="First" />
            <Counter caption="Second" defaultValue={10} />
            <Counter caption="Third" defaultValue={20} />
            <button onClick={() => this.forceUpdate()}>
                click me to re-render
            </button>
        </div>
    )
}

export default ControlPanel
