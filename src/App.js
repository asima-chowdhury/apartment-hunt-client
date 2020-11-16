import React from 'react';
import './App.scss';
import './styles/styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import NotMatch from './pages/NotMatch/NotMatch';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>         
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
