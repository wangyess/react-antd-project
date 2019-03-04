import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Index from './pages/index/index';
import Login from './pages/login/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact strict path="/" component={Index} />
            <Route exact strict path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
