import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Types from '../components/Types';
import SingleType from '../components/SingleType';
import Locations from '../components/Locations';
import Pokemon from '../components/Pokemon';
import SinglePokemon from '../components/SinglePokemon';

const Router = () => {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/types" exact component={Types} />
        <Route path="/types/:slug" exact component={SingleType} />
        <Route path="/types/:type/:name" exact component={Types} />
        <Route path="/locations" exact component={Locations} />
        <Route path="/pokemon/:name" exact component={SinglePokemon} />
        <Route path="/pokemon/" exact component={Pokemon} />
      </Switch>
  )
}

export default Router;