import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Series from './Pages/Series';
import Movies from './Pages/Movies';
import NotFound from './Pages/NotFound';
// styling import
import './styles/main.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/series" component={Series} />
        <Route path="/movies" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
