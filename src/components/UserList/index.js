import React, { Component } from "react";
import logo from "../../logo.png";
import profilethumb from "../../profilethumb.png";
import flag from "../../flag.png";

function createUser() {
  return {
    pic:
      "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96f240d94a3586a437843ce75222b382&auto=format&fit=crop&w=333&q=80",
    attributes: [
      {
        name: "age",
        value: "17"
      },
      {
        name: "name",
        value: "Felix"
      },

      {
        name: "country",
        value: "Italy"
      }
    ]
  };
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
    return (
      <div className="groupPage">
        <div className="App-header-contain row middle-xs center-xs">
          <img src={logo} className="col-xs-12" alt="logo" />
        </div>
        <div className="row middle-xs center-xs">
          
          <div className="col-xs-12">
            {this.state.users.map(u => {
              return (
                <ul className="listItem row middle-xs center-xs" key={u.attributes[0].value}>
                 <div style={{"backgroundImage": `url(${u.pic})`}} className="col-xs-3 imageThumb" alt="logo" ></div>
                 <div className="col-xs-9">
                  {u.attributes.map(att => {
                    return (
                      <li key={att.name}>
                        <p className={att.name}> {att.value} </p>
                      </li>
                    );
                  })}
                  </div>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default UserList;
