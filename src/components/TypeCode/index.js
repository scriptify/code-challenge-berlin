import React, { Component } from "react";
import logo from "../../logo.png";
import inputPhoto from "../../01.png";
class TypeCode extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header row middle-xs center-xs">
          <div className="App-header-contain">
            <img src={logo} className="App-logo col-xs-12" alt="logo" />
            <h1 className="App-title col-xs-12">
              Hello please write your code
            </h1>
          </div>
        </header>
        <div className="input-contain">
          <div className="row middle-xs center-xs">
            <div className="col-xs-12">
              <img
                src={inputPhoto}
                className="inputPhoto col-xs-12"
                alt="logo"
              />
              <input
                type="text"
                className="col-xs-12"
                placeholder="TYPE CODE"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <p className="App-intro">
            Questions ? Do not hesitate to
            <a href="#" className="contact-us">
              contact us!
            </a>
          </p>
        </div>
        <button
          className="submit"
          onClick={() => {
            window.location.href = "/enter-data";
          }}
        >
          ENTER
        </button>
      </div>
    );
  }
}
export default TypeCode;
