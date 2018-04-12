import React, { Component } from 'react';

class TypeCode extends Component {


    render() {
        return (
            <div>
                <h1>Enter Code</h1>
                <input type="text"/>
                <button onClick={() => {window.location.href = "/enter-data"}}>Join</button>
            </div>
        );
    }
}

export default TypeCode;