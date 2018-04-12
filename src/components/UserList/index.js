import React, { Component } from "react";
function createUser() {
  return [
    {
      name: "name",
      value: "Felix"
    },
    {
      name: "age",
      value: "17"
    },
    {
      name: "country",
      value: "Italy"
    },
    {
      name: "description",
      value: "420 blaze it"
    }
  ];
}

class UserList extends Component {
  constructor(props) {
    super(props);

    let arr = [];

    if (window.meUser) {
      arr = [window.meUser];
    }

    this.state = {
      users: [createUser(), ...arr]
    };
  }

  render() {
    return (
      <div>
        {this.state.users.map(u => {
          return (
            <ul key={u[0].value}>
              {u.map(att => {
                return (
                  <li key={att.name}>
                    <p>{att.name}</p>
                    <p>{att.value}</p>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    );
  }
}

export default UserList;
