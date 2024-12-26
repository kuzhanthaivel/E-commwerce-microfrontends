import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Landings from './components/Landing';
import Pricing from './components/Pricing';




export default() => {
    return (
    <div>
  <StylesProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landings} />
        <Route exact path="/pricing" component={Pricing} />
      </Switch>
    </BrowserRouter>
  </StylesProvider>
  </div>
    )

};
    