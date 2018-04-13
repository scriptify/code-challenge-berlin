import React, {
    Component
}
from "react";
import logo from '../../logo.png';
import profilethumb from '../../profilethumb.png';
import flag from '../../flag.png';

function createUser() {
    return [
        {
            name: "age"
            , value: "17"
    }
        , {
            name: "name"
            , value: "Felix"
    },

        {
            name: "country"
            , value: "Italy"
    }
  ];
}
class UserList extends Component {
    constructor(props) {
        super(props);
        let arr = [];
        let isAge = false;
        if (window.meUser) {
            arr = [window.meUser];
        }
        this.state = {
            users: [createUser(), ...arr]
        };
    }
    render() {
        return ( < div className = "groupPage" > < div class = "App-header-contain row middle-xs center-xs" > < img src = {
                logo
            }
            className = "col-xs-12"
            alt = "logo" / > < /div>< div className = "listItems row middle-xs center-xs" >< img src = {
            profilethumb
        }
        className = "col-xs-3"
        alt = "logo" / > < div className = "listItem col-xs-9" > {
            this.state.users.map(u => {
                    return ( < ul key = {
                            u[0].value
                        } > {
                            u.map(att => {
                                return ( < li key = {
                                    att.name
                                } > < p > {
                                    att.value
                                } < /p> < /li > );
                            })
                        } < /ul>);
                    })
            } < /div></div > < /div > );
        }
    }
    export default UserList;