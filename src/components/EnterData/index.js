import selfie from '../../take-selfie.png';
import React, {
    Component
}
from "react";
import {
    Link
}
from "react-router-dom"
class EnterData extends Component {
    constructor(props) {
        super(props);
        console.log(window.meUser)
        if (!window.meUser) {
            this.state = {
                attributes: [
                    {
                        name: "name"
                        , value: ""
                }
                    , {
                        name: "age"
                        , value: ""
                }
                    , {
                        name: "country"
                        , value: ""
                }
                    , {
                        name: "description"
                        , value: ""
                }
              ]
            }
        }
        else {
            this.state = {
                attributes: window.meUser
            }
        }
    }
    changeAtt(name, value) {
        this.setState({...this.state, attributes: this.state.attributes.map((a) => {
                if (a.name === name) {
                    return {...a, value
                    }
                }
                return a
            })
        })
    }
    render() {
        return ( < div className = "EnterData row" > < div className = " col-xs-12" > < img src = {
                selfie
            }
            className = "Selfie"
            alt = "logo" / > < /div>< a href = "#"
            className = "col-xs-12" > Import Photo < /a> < form className="col-xs-12"> {
            this.state.attributes.map((att) => {
                return ( < div key = {
                        att.name
                    } > < input type = "text"
                    placeholder = {
                        att.name
                    }
                    value = {
                        att.value
                    }
                    onChange = {
                        (e) => {
                            this.changeAtt(att.name, e.target.value)
                        }
                    }
                    /> < /div > )
            })
        } < p class = "describeYou" > Add 3 things that describe you < /p>< Link to = "/preview
        " > < button onClick = { () => {
        window.meUser = this.state.attributes
    }
} > + < /button></Link > < /form> <hr / > < /div > );
}
}
export default EnterData;