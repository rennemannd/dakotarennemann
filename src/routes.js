import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';

export const Routes = () => {
    useEffect(() => {
        alert("This site is currently undergoing temporary maintenance, the full site will be live 11/11 at 12 PM EST");
    })

    return(
        <div>

        <Switch>
            <Route exact path="/Home" component={ NotFound } />
            <Route exact path ="/">
                <Redirect to="/Home" />
            </Route>
            <Route component={ NotFound } />
        </Switch>
        </div>
    )
}
