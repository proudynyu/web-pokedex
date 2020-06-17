import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Types from '../components/Types';
import Locations from '../components/Locations';

const Router = () => {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/types" exact component={Types} />
        <Route path="/types/:name" exact component={Types} />
        <Route path="/types/:type/:name" exact component={Types} />
        <Route path="/locations" exact component={Locations} />
      </Switch>
  )
}

export default Router;