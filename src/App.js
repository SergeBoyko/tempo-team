import React from 'react';

import TeamGroup from './containers/Team/TeamGroup/TeamGroup';
import './App.css';
import SeachBox from './components/SearchBox';

function App() {
  return (
    <div className="container">
      <SeachBox />
      <TeamGroup />
    </div>
  );
}

export default App;
