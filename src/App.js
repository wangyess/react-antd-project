import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Index from './pages/index/index';
import Login from './pages/login/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect from="/" to="/index" />} />
            <Route path="/login" component={Login} />
            <Route path="/index" component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
