import React from 'react'

function FormatName({user}) {
    if (user) {
        return <h1>Hello, {user}</h1>;  
    }
    return <h1>Hello, Stranger.</h1>;
}

export default FormatName