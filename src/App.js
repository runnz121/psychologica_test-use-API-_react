import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import React, {useState, useEffect} from 'react';

import landingPage from './components/views/landingPage/LandingPage';
import testSamplePage from './components/views/testSamplePage/TestSamplePage'
import testPage from './components/views/testPage/TestPage';
import testCompletePage from './components/views/testCompletePage/TestCompletePage';


function App() {

  

  return(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={landingPage}/>
        <Route exact path="/testsample" component={testSamplePage}/>
        <Route exact path="/testpage" component={testPage}/>
        <Route exact path="/testcomplete" component={testCompletePage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
