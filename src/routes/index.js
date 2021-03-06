import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Types from '../components/Types';
import SingleType from '../components/SingleType';
import Locations from '../components/Locations';
import Pokemon from '../components/Pokemon';
import SinglePokemon from '../components/SinglePokemon';
import Generations from '../components/Generations';
import SingleGen from '../components/SingleGen';
import Species from '../components/Species';

const Router = () => {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/types" exact component={Types} />
        <Route path="/types/:slug" exact component={SingleType} />
        <Route path="/types/:type/:name" exact component={Types} />
        <Route path="/locations" exact component={Locations} />
        <Route path="/generations" exact component={Generations} />
        <Route path="/generations/:gen" exact component={SingleGen} />
        <Route path="/pokemon/:name" exact component={SinglePokemon} />
        <Route path="/pokemon/" exact component={Pokemon} />
        <Route path="/species" exact component={Species} />
      </Switch>
  )
}

export default Router;