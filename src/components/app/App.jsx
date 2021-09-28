import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BeerList from './beer/BeerList';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <BeerList />
      </Route>
    </Switch>
  );
}
