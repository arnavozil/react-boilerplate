import {
    Route, Switch, 
    BrowserRouter as Router
} from 'react-router-dom';
import React from 'react';
import Gallery from './components/Gallery/Gallery';

const Routes = () => <Router>
    <Switch>    
        <Route path='/gallery' component={Gallery} exact />
    </Switch>
</Router>;


export default Routes;