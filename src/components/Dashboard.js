import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Redirect} from "react-router-dom";
import store from '../../src/store'

/* 1. This component is mainly used to connect to Store and display results
   2. Again this component uses styled-components for styling (see const Wrapper below)
   3. We are using hooks (useState) for signout feature. useState brings "state" functionality to functional
      components. It takes 2 arguments - the first one is similar to this.state and second one is similar to setState.
   4. Example below: create a piece of state, and initialize it to `false`
     `signOutStatus` will hold the current value of the state,
      and `setSignOutStatus` will let us change it
   5. Whenever we want to use component lifecycle hooks,
      we already have two options either using class component or using Hooks with useEffect*/

export default function Dashboard() {
  console.log("inside dashboard");
  const [signOutStatus, setSignOutStatus] = useState(false);
  //This hook is added because if the user refreshes the page in url(window browser) the store has to be triggered to display the API data.
  const [dummy,setDummy]= useState("test");

  /*useEffect is a function which takes two arguments. The first argument passed to it is a function called effect
   and the second argument is an array of dependencies. React compares the current value of dependency and the value
   on previous render. If they are not the same, effect is invoked.
   In general the second argument is optional. If we omit it, effect will be executed after every render.
   If you want effect to be executed only on first render, you can pass an empty array and it's done as below.

   ***Below the subscribe method of the store will be fired when the store is changed...
   here in our case new data is added to the
   store and then the page rerenders with new data*/

   /* Bonus -- When the user tries to refresh the page from the url, the page didn't display anything even though
   the state had the API data. It's because the state has to be triggered for some change to re-render the page. So Added
   this below trigger code*/
  useEffect(() => {
  const unsubscribe = store.subscribe(() => {
    console.log("state inside dashboad");
    //added below code to trigger the store to re-render data as mentioned in Bonus above. Since we have objects to display im using {}
    console.log(setDummy({dummy:"test"}));
  });
  return unsubscribe;
}, []);


  return (
    <Wrapper><br/>
    <button className="signoutButton" value={signOutStatus} onClick={() => setSignOutStatus(!signOutStatus)}><strong>Sign Out</strong>
    </button>
    {signOutStatus && <Redirect to="/Login"/>}

    <div className="App">
      <h1>Contacts Directory</h1>
      <div className="flex">
        {
          store.getState().length && store.getState().map((user) => {
            console.log("inside dashboard map function");
            console.log("avatar is: ", user.avatar);
            console.log("UserID is:", user.idNum);
            return (
              <div key={user.idNum}>
              <p className="name">
                <strong>{user.first_name}</strong>
              </p>
              <p className="email">{user.email}</p>
            <img onError={(ev) =>ev.target.src='https://winaero.com/blog/wp-content/uploads/2015/05/windows-10-user-account-login-icon.png'}
            src={user.avatar} alt="" width="128" height="128"/>
            </div>);
          })
        }
      </div>
    </div>
  </Wrapper>);
};

function chbg(color) {
    document.getElementById('b').style.backgroundColor = color;
}

const Wrapper = styled.div `
  min-height: calc(94vh - 50px);
  background-color: #f76565;
  padding: 10px;
  background-image: url('https://i.pinimg.com/originals/e7/ac/0d/e7ac0d9f67626f71ecd85bbb4224e2cc.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  span {
    float:right;
    color: #fff;
    font-size: 20px;
  }

  section {
    color: #fff;
  }

  .signoutButton {
    position:relative;
    top:15%;
    left:89.5%;
    padding: 10px 20px 10px 20px;
    font-family: 'Exo 2';
    font-size: 20px;
    margin-left: 10px;
    border-radius: 10px;
    border-width: 0px;
    background-color: rgb(110, 31, 10);
    -webkit-transition: 0.5s;
    transition: 1s;
    color: rgb(255, 255, 255);
  }

  .signoutButton:hover {
    background-color: rgb(236, 13, 13);
    -webkit-transition: 0.5s;
    transition: 1s;
    color: rgb(255, 255, 255);
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
  border-radius: 40px;
  border-width: 10px;
  border-color: #000000;
  -webkit-transition: 0.5s;
  transition: 1s;
  margin-top: 15px;
}

img:hover {
  border-radius: 10px;
  -webkit-transition: 0.5s;
  transition: 1s;
  transform: scale(1.5);
}

h1{
  text-align: center;
  color:black;
  font-family: 'Cinzel Decorative';
  font-size: 50px;
  margin-top: -50px;
}

.name {
  margin-top: -20px;
  color: black;
  font-family: 'Quantico';
}

.email {
  margin-top:-10px;
  color: black;
  font-family: 'Quantico';
}

`;
