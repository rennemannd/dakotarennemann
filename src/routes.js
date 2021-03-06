import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';

export const Routes = () => {
    return(
        <div>

        <Switch>
            <Route exact path="/Home" component={ Home } />
            <Route exact path ="/">
                <Redirect to="/Home" />
            </Route>
            <Route component={ NotFound } />
        </Switch>
        </div>
    )
}
