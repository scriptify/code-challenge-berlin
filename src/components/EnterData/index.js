import React, { Component } from "react";
import { Link } from "react-router-dom"

class EnterData extends Component {
  constructor(props) {
    super(props);
    console.log(window.meUser)
    if (!window.meUser) {

        this.state = {
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
          }
    } else {
        this.state = {attributes: window.meUser}
    }
  }

  changeAtt(name, value) {
    this.setState({
        ...this.state, attributes: this.state.attributes.map((a) => {
            if (a.name === name) {
                return {
                    ...a, value
                }
            }
            return a
        })
    })
  }

  render() {
    return (
      <div>
        <h1>Enter some details about you</h1>
        <form >
            {this.state.attributes.map((att) => {
                return (
                    <div key={att.name}>
                        <input type="text" value={att.value} onChange={(e) => {this.changeAtt(att.name, e.target.value)}}/>
                        <label>{att.name}</label>
                    </div>
                )
            })}
            <Link to="/preview"><button onClick={() => {window.meUser = this.state.attributes}}>Go</button></Link>
            
        </form>
      </div>
    );
  }
}

export default EnterData;
