import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <CalculatorPage />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </Router>
);

export default App;
