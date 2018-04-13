import React, { Component } from 'react';
import TypeCode from "./components/TypeCode"
import Preview from "./components/Preview"
import EnterData from "./components/EnterData"
import UserList from "./components/UserList"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" render={() => <TypeCode/>}></Route>
      <Route path="/enter-data" render={() => <EnterData/>} />
      <Route path="/preview" render={() => <Preview />} />
      <Route path="/detail" render={() => <Preview isDetail />} />
      <Route path="/groups" render={() => <UserList/>} />
      </div>
    );
  }
}

export default App;
