import React from 'react';
import Homepage from './pages/homepage/Homepage'

import './App.css';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>This is the Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App;
