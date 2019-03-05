import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Index from './pages/index/index';
import Login from './pages/login/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact strict path="/" component={Login} />
            <Redirect exact from="/" to="/index" />
            <Route path="/index" component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;
