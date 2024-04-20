
import React, { useState } from 'react'

function Tick(props) {
    const [tick, setTick] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setTick(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <div>
            <h1>Hello, world and {props.name}</h1>
            <h2>It is {tick}.</h2>
        </div>
    )
}

export default Tick