import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    <Navigation />
  </div>
);

export default App;
