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
    return (
      <div className="preview">
        <div className="bg" />
        <div className="App-header-contain row middle-xs center-xs">
          <img src={logo} className="col-xs-3" alt="logo" />
          <h1 className="col-xs-9"> Profile preview </h1>
        </div>
        <div className="row center-xs middle-xs">
            <img
              src={window.meUser.pic}
              className="profilepic col-xs-12"
              alt="profilepic"
            />
        </div>
         <Link to="/enter-data">
          <img src={pencil} className="col-xs-12 pencil" alt="pencil" />
        </Link>
        {window.meUser &&
          window.meUser.attributes.map(att => {
            return (
              <div key={att.name} className="listItem">
                <p className="label"> {att.name} </p>
                <p> {att.value} </p>
                <hr />
              </div>
            );
          })}
        <Link to="/groups">
          {" "}
          <button className="saveProfile "> Save Profile </button>
        </Link>
      </div>
    );
  }
}
export default Preview;
