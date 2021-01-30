import React from 'react';
import About from './About';
import Login from './Login';
import Registration from './Registration';
import AddContact from './AddContact';
import Dashboard from './Dashboard';
import Error from './Error';
import {Route, Switch} from 'react-router-dom';

/*The purpose of this component is to setup a route for each component and it's wrapped with "Switch".
  Note there's a Error component added because if the user tries to alter the url to unknown route
  this Page not found (Error component) will be loaded. */
function App() {
  return (<main>
    <Switch>
      <Route exact="exact" path="/About" component={About}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Registration" component={Registration}/>
      <Route path="/AddContact" component={AddContact}/>
      <Route path="/Dashboard" component={Dashboard}/>
      <Route component={Error}/>
    </Switch>
  </main>)
}
export default App;
