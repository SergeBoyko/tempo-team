import React from 'react';
import axios from 'axios'
import { Route, Redirect, Switch } from "react-router-dom";


import TeamGroup from './containers/Team/TeamGroup/TeamGroup';
import './App.css';
import SeachBox from './components/SearchBox';
import NotFound from './components/NotFound/NotFound';
import TeamList from './containers/Team/TeamList/TeamList';
import TeamGroupDetails from './containers/Team/TeameGroupDetails/TeamGroupDetails';

axios.defaults.baseURL = "http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1"

function App() {
  return (
    <div className="container">
      <SeachBox />
      <Switch>
        {/* <Route path="/team/0" render={({ match }) => (
          <Redirect to={`/team`} />
        )} /> */}
        <Route path="/team/:id" component={TeamGroup} />
        <Route path="/team" component={TeamGroup} />
        <Redirect from="/" exact to="/team" />
        <Route path="/not-found" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
