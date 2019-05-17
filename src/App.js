import React from 'react';
import axios from 'axios'

import TeamGroup from './containers/Team/TeamGroup/TeamGroup';
import './App.css';
import SeachBox from './components/SearchBox';

axios.defaults.baseURL = "http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1"

function App() {
  return (
    <div className="container">
      <SeachBox />
      <TeamGroup />
    </div>
  );
}

export default App;
