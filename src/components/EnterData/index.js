import selfie from "../../take-selfie.png";
// import profile from "../../profilepic.png";

import logo from "../../logo.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";

class EnterData extends Component {
  constructor(props) {
    super(props);
    console.log(window.meUser);
    if (!window.meUser) {
      this.state = {
        pic: null,
        attributes: [
          {
            name: "name",
            value: ""
          },
          {
            name: "age",
            value: ""
          },
          {
            name: "country",
            value: ""
          },
          {
            name: "description",
            value: ""
          }
        ]
      };
    } else {
      this.state = {
        attributes: window.meUser,
        pic: window.meUser.pic
      };
    }
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ ...this.state, pic: imageSrc });
  };

  changeAtt(name, value) {
    this.setState({
      ...this.state,
      attributes: this.state.attributes.map(a => {
        if (a.name === name) {
          return {
            ...a,
            value
          };
        }
        return a;
      })
    });
  }
  render() {
    return (
      <div className="EnterData">
        <div className="App-header-contain  row middle-xs center-xs">
          <img src={logo} className="App-logo col-xs-12" alt="logo" />
        </div>
        <div className=" col-xs-12">
          {this.state.pic ? (
            <img src={this.state.pic} height="300" width="300px" />
          ) : (
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={350}
            />
          )}
        </div>
        <button onClick={this.capture} className="col-xs-12">
          Take picture
        </button>
        <form className="col-xs-12">
          {this.state.attributes.map(att => {
            return (
              <div key={att.name}>
                <input
                  type="text"
                  placeholder={att.name}
                  value={att.value}
                  onChange={e => {
                    this.changeAtt(att.name, e.target.value);
                  }}
                />
              </div>
            );
          })}
          <Link to="/preview">
            <button
              onClick={() => {
                window.meUser = this.state;
              }}
            >
              Join Group
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
export default EnterData;
