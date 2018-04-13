import React, { Component } from "react";
import logo from "../../logo.png";
import profilethumb from "../../profilethumb.png";
import flag from "../../flag.png";
import {withRouter} from "react-router-dom"

import maximilianImg from '../../profile-pics/maximilian.jpeg';
import ben from '../../profile-pics/ben.jpeg';
import don from '../../profile-pics/don.jpeg';
import emily from '../../profile-pics/emily.jpeg';
import leon from '../../profile-pics/leon.jpeg';
import lukas from '../../profile-pics/lukas.jpeg';
import rodrigo from '../../profile-pics/rodrigo.jpeg';
import valentin from '../../profile-pics/valentin.jpeg';
import yasin from '../../profile-pics/yasin.jpeg';

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
        ...arr,
        createUser("Don E.", "20", "Germany", "Passion, people, travel", don),
        createUser("Yasin Bert y.", "19", "Turkey", "Dream, share, learn", yasin),
        createUser("Leon P.", "27", "Germany", "Quiet, friendly, learning by doing", leon),
        createUser("Rodrigo O.", "28", "Mexico", "Tequila, curious, friendly", rodrigo),
        createUser("Lukas T.", "21", "Germany", "Spring, spicy, space", lukas),
        createUser("Ben W.", "21", "Germany", "Outside activities, code, enjoy life", ben),
        createUser("Valentin B.", "20", "Bulgaria", "", valentin),
        createUser("Maximilian T.", "20", "Italy", "Passion, javascript, beatboxing", maximilianImg),
      ]
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
