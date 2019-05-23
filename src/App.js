import React from 'react';
import axios from 'axios'
import { Route, Redirect, Switch } from "react-router-dom";

import TeamGroup from './containers/Team/TeamGroup/TeamGroup';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import UsersDetails from './containers/Team/UsersDetails/UsersDetails';

axios.defaults.baseURL = "http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1"

function App() {
  return (
    <div className="container" data-test='App'>
      <Switch>
        <Route path="/team/:id" component={TeamGroup} />
        <Route path="/team" component={TeamGroup} />
        <Redirect from="/" exact to="/team" />
        <Route path="/user/:id" component={UsersDetails} />
        <Route path="/not-found" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
