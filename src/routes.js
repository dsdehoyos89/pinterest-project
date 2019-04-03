import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../src/components/Landing';

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route
      path='*'
      render={() => (
        <div>
          <h1>404 Error</h1>
        </div>
      )}
    />
  </Switch>
);
