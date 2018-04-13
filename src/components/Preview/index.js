import pencil from "../../pencil.png";
import logo from "../../logo.png";
import profilepic from "../../profilepic.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Preview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = this.props.isDetail ? window.comesFrom : window.meUser;

    return (
      <div className="preview">
        <div className="bg" />
        
        <div className="App-header-contain row middle-xs center-xs">
          <img src={logo} className="col-xs-3" alt="logo" />
          <h1 className="col-xs-9"> Profile preview </h1>
        </div>
        {this.props.isDetail && <Link to="/groups"><button>Back</button></Link>}
        <img src={user.pic} className="profilepic col-xs-12" alt="profilepic" />
        {user &&
          user.attributes.map(att => {
            return (
              <div key={att.name} className="listItem">
                <p className="label"> {att.name} </p>
                <p> {att.value} </p>
                <hr />
              </div>
            );
          })}
        {!this.props.isDetail && (
          <Link to="/enter-data">
            <img src={pencil} className="col-xs-12 pencil" alt="pencil" />
          </Link>
        )}
        {!this.props.isDetail && (
          <Link to="/groups">
            <button className="saveProfile "> Save Profile </button>
          </Link>
        )}
      </div>
    );
  }
}
export default Preview;
