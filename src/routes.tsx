import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import Temp from './views/Temp/Temp';
import NotFound from './views/NotFound';


export const Routes = () => {
    return(
        <div>
        <Switch>
            <Route exact path="/Home" component={ Home } />
            <Route exact path ="/">
                <Redirect to="/Home" />
            </Route>
            <Route exact path ="/Temp" component={ Temp } />
            <Route component={ NotFound } />
        </Switch>
        </div>
    )
}
