// routes.js
import Home from '../Comonnets/Home/Home';

import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Menu from '../Comonnets/Layout/Menu/Menu';
import ColorDisplay from '../Tuts/ColorDisplay';

import ColorApp from '../Tuts/ColorApp';
import Wish from '../Components/Wish/Wish';
import Counter from '../Tuts/Counter';


import NumberDisplay from '../Tuts/Colors';
import RegisterPage from '../Comonnets/Home/RegisterPage';
import LoginPage from '../Comonnets/Home/LoginPage';
import NotFound from '../Comonnets/Home/NotFound';
import Cart from '../Comonnets/Home/CartPage';
import CartPage from '../Comonnets/Home/CartPage';
import ReducerFc from '../Tuts/ReducerFc';
import StateTutorial from '../StateTutorial';
import Square from '../Div';

function Routing() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Products" component={Home} />
      <Route path="/Colors" component={ColorApp} />
      <Route path="/ColorDisplay" component={ColorDisplay} />
      <Route path="/Register" component={RegisterPage} />
      <Route path="/Login" component={LoginPage} />
      <Route path="/ColorDisplay" component={ColorDisplay} />
      <Route path="/MisparColor" component={NumberDisplay} />
      <Route path="/MyCart" component={CartPage} />
      <Route path="/ReducerFc" component={ReducerFc} />
      <Route path="/StateTutorial" component={StateTutorial} />
      <Route path="/Sqaure" component={Square} />
      
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routing;
