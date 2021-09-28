import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <ListContainer />
      </Route>
    </Switch>
  );
}
