import React,{useEffect} from 'react';
import About from './About';
import Login from './Login';
import Registration from './Registration';
import AddContact from './AddContact';
import Dashboard from './Dashboard';
import Error from './Error';
import {Route, Switch} from 'react-router-dom';
import store from '../../src/store'
/*The purpose of this App component is to setup a route for each component and it's wrapped with "Switch".
  Note there's a Error component added because if the user tries to alter the url to unknown route
  this Page not found (Error component) will be loaded.

  Another purpose of this component is to make asynchronous call to fetch data from API and load the data in
  store for dispatch */

const f = async () => {
  //await fetch starts an http request to the url specified.
  //Because the await keyword is present, the asynchronous function is paused until the request completes.
  //When the request completes, response is assigned with the response object of the request.
  //More info: https://dmitripavlutin.com/javascript-fetch-async-await/
  const response = await fetch("https://reqres.in/api/users/");
  const json = await response.json();
  console.log("json data:");
  console.log(json);
  json.data.map(user=>  store.dispatch({
      type: "Add_Contact",
      payload:{
      Name:user.first_name,
      Avatar:user.avatar,
      Email: user.email,
      Id:user.id
    }
  }));
  console.log("inside async function")
  //The state is updated with the API data fetched above.
  console.log(store.getState())
};

function App() {
  /*useEffect is a function which takes two arguments. The first argument passed to it is a function called effect
   and the second argument is an array of dependencies. React compares the current value of dependency and the value
   on previous render. If they are not the same, effect is invoked.
   In general the second argument is optional. If we omit it, effect will be executed after every render.
   If you want effect to be executed only on first render, you can pass an empty array and it's done as below.*/
  useEffect(() => {
    f();
  }, []);

  return (<main>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route path="/About" component={About}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Registration" component={Registration}/>
      <Route path="/AddContact" component={AddContact}/>
      <Route path="/Dashboard" component={Dashboard}/>
      <Route component={Error}/>
    </Switch>
  </main>)
}
export default App;
