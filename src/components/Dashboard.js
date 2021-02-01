import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Redirect} from "react-router-dom";
import store from '../../src/store'


/* 1. This component is mainly used to connect to API and display results
   2. Again this component uses styled-components for styling (see const Wrapper below)
   3. We are using hooks (useState) for signout feature. useState brings "state" functionality to functional
      components. It takes 2 arguments - the first one is similar to this.state and second one is similar to setState.
   4. Example below: create a piece of state, and initialize it to `false`
     `signOutStatus` will hold the current value of the state,
      and `setSignOutStatus` will let us change it
   5. Whenever we want to use component lifecycle hooks,
      we already have two options either using class component or using Hooks with useEffect*/

export default function Dashboard() {
  // var avatarFlag = true;
  const [signOutStatus, setSignOutStatus] = useState(false);

  /*useEffect is a function which takes two arguments. The first argument passed to it is a function called effect
   and the second argument is an array of dependencies. React compares the current value of dependency and the value
   on previous render. If they are not the same, effect is invoked.
   In general the second argument is optional. If we omit it, effect will be executed after every render.
   If you want effect to be executed only on first render, you can pass an empty array and it's done as below.

   ***Below the subscribe method of the store will be fired when the store is changed...
   here in our case new data is added to the
   store and then the page rerenders with new data*/
   useEffect(() => {
     const unsubscribe = store.subscribe(() => {
     console.log("state inside dashboad");
   });
   return unsubscribe;
 },[]);

  return (
    <Wrapper>

    <span>Welcome admin</span><br/>
    <button className="signoutButton" value={signOutStatus} onClick={() => setSignOutStatus(!signOutStatus)}><strong>Sign Out</strong>
    </button>
    {signOutStatus && <Redirect to="/Login"/>}

    <div className="App">
      <h1>Contacts Directory</h1>
      <div className="flex">
        {
          store.getState().length && store.getState().map((user) => {
            console.log("inside dashboard map function");
            console.log("avatar is: ", user.Avatar);
            return (
              <div key={user.Id}>
              <p>
                <strong>{user.Name}</strong>
              </p>
              <p>{user.Email}</p>
            <img onError={(ev) =>ev.target.src='https://winaero.com/blog/wp-content/uploads/2015/05/windows-10-user-account-login-icon.png'}
            src={user.Avatar} alt="" width="128" height="128"/>
            </div>);
          })
        }
      </div>
    </div>

  </Wrapper>);
};
const Wrapper = styled.div `
  min-height: calc(100vh - 50px);
  background-color: #f76565;
  padding: 10px;

  span {
    float:right;
    color: #fff;
    font-size: 20px;
  }

  section {
    color: #fff;
  }

  .signoutButton{
    position:absolute;
    top:15%;
    left:89.5%;
    padding:5px;
  }
  .flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.flex > div {
  margin: 0 1rem 2rem 1rem;
  text-align: center;
}

img {
  display: inline-block;
  background-image: url('https://winaero.com/blog/wp-content/uploads/2015/05/windows-10-user-account-login-icon.png');
}

h1{
  text-align: center;
  color:white;
  text-shadow: black 2px 1px;
}

`;
