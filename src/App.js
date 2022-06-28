import './App.css';
import Nav from './components/Header/nav';
import Home from './components/pages/Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <GithubState>
      <Router>
        <div>
          <Nav />
          <div className='container'>
            <Switch>
              <Route exact path='/Repositories-Finder' component={Home} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
