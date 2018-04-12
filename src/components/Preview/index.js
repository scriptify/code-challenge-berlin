import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Preview extends Component {
    render() {
        return (
            <div>
                {window.meUser && window.meUser.map((att) => {
                    return (
                        <div key={att.name}>
                            <p>{att.name}</p>
                            <p>{att.value}</p>
                        </div>
                    )
                })}
                <Link to="/enter-data"><button>Edit</button></Link>
                <Link to="/groups"><button>Join Group</button></Link>
            </div>
        );
    }
}

export default Preview;