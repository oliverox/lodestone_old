// deps
import React from 'react';
import { Route } from 'react-router';

// components
import App from 'components/App';
import Home from 'components/Home';
import About from 'components/About';
import ComponentList from 'components/ComponentList';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/components" component={ComponentList} />
  </Route>
);

export default routes;
