/*
 * @Author: Kanata You 
 * @Date: 2021-09-14 22:02:17 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-09-14 22:11:11
 */

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
