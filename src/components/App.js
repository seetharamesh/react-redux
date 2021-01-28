import React from 'react';
import About from './About';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './Dashboard';
import Error from './Error';
import {Route,Switch} from 'react-router-dom';

function App() {
    return (
        <main>
            <Switch>
                <Route exact path="/About" component={About} />
                <Route path="/Login" component={Login} />
                <Route path="/Registration" component={Registration} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}
export default App;
