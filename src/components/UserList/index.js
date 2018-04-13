import React, { Component } from "react";
import logo from "../../logo.png";
import profilethumb from "../../profilethumb.png";
import flag from "../../flag.png";
import {withRouter} from "react-router-dom"

import maximilianImg from '../../profile-pics/maximilian.jpeg';

function createUser(name, age, country, description, imgSrc) {
  return {
    pic: imgSrc,
    attributes: [
      {
        name: "Age",
        value: age
      },
      {
        name: "Name",
        value: name
      },

      {
        name: "Country",
        value: country
      },
      {
        name: "Description",
        value: description
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
      users: [
        createUser("Don E.", "20", "Germany", "Passion, people, travel", maximilianImg),
        createUser("Yasin Bert y.", "19", "Turkey", "Dream, share, learn", maximilianImg),
        createUser("Leon P.", "27", "Germany", "Quiet, friendly, learning by doing", maximilianImg),
        createUser("Rodrigo O.", "28", "Mexico", "Tequila, curious, friendly", maximilianImg),
        createUser("Lukas T.", "21", "Germany", "Spring, spicy, space", maximilianImg),
        createUser("Dennis W.", "17", "Germany", "Ambitioned, creative, perfectionist", maximilianImg),
        createUser("Ben W.", "21", "Germany", "Outside activities, code, enjoy life", maximilianImg),
        createUser("Valentin B.", "20", "Bulgaria", "", maximilianImg),
        createUser("Maximilian T.", "20", "Italy", "Passion, javascript, beatboxing", maximilianImg),
        ...arr]
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
                <ul className="listItem row middle-xs center-xs" key={u.attributes[0].value} onClick={() => {
                  window.comesFrom = u;
                  this.props.history.push("/detail")
                }}>
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
export default withRouter(UserList);
