import pencil from '../../pencil.png';
import logo from '../../logo.png';
import profilepic from '../../profilepic.png';
import React, {
    Component
}
from 'react';
import {
    Link
}
from "react-router-dom"

/*
                    {
                        window.meUser && window.meUser.map((att) => {
                                return ( < div key = {
                                        att.name
                                    } > < p > {
                                        att.name
                                    } < /p> < p > {
                                    att.value
                                } < /p> < /div > )
                        })
                    }
*/

class Preview extends Component {
    render() {
        return ( 
            <div className = "preview">
                <div className = "bg"></div>
                <div className = "App-header-contain row middle-xs center-xs"> 
                    <img src = { logo } className = "col-xs-3" alt = "logo" />
                    <h1 className = "col-xs-9"> Profile preview </h1>
                </div> 
                <img src={ profilepic } className = "profilepic col-xs-12" alt = "profilepic" />
                    {
                        window.meUser && window.meUser.map((att) => {
                                return ( 
                                    <div key = {att.name}>
                                        <p> {att.name} </p> 
                                        <p> {att.value} </p>
                                    </div> 
                                )
                        })
                    }
                    <Link to = "/enter-data"><img src = { pencil } className = "col-xs-12 pencil"  alt = "pencil" />< /Link >
                    <Link to = "/groups"> <button className = "saveProfile "> Save Profile </button></Link >
                </div>
            );
}
}
export default Preview;