import React, {Component} from 'react';
import styled from "styled-components";
import {Redirect} from "react-router-dom";

/* Notes about this Component--
1. The new packages that were used are styled-components (for styling) and "Redirect" from react-router-dom library.
2. Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the
   history stack. The state object can be accessed via this.props.location.state in the redirected-to component.
3. handleFormChange -- this method takes the user inputs and store them in state.User input validations are done in the form.
4. handleLogin -- this method is used when the user clicks submit button.
5. registerUser -- this method is used to set the state of the newUser to true when clicked
6. render funcion renders the form and route the page accordingly using <Redirect>
7. Const Wrapper is used for styling as mentioned in step 1. */

class Login extends Component {
  state = {
    islogged: false,
    loginParams: {
      user_id: "",
      user_password: ""
    },
    newUser: false,
    checkCredentials:true
  };

  handleFormChange = event => {
    let loginParamsNew = {
      ...this.state.loginParams
    };
    let val = event.target.value;
    console.log("event.targe.value is: ", val);
    loginParamsNew[event.target.name] = val;
    this.setState({loginParams: loginParamsNew});
  };

  handleLogin = event => {
    console.log("handle login");
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "1234") {
      this.setState({islogged: true});
    }
    else this.setState({checkCredentials: false});
    event.preventDefault();
  };

  registerUser = event => {
    event.preventDefault();
    console.log("register user");
    this.setState({newUser: true});
  }

  render() {
    const msg = "Please enter a valid username/password"
    return (
      <Wrapper>
        <div className="form-back"></div>
      <form onSubmit={this.handleLogin}>
        <span>Please sign in</span><br/>
      <input className="userIdBox" type="text" name="user_id" required onChange={this.handleFormChange}       placeholder="Enter Username" />
    <span className="asterisk_input1">  </span>

      <input className="pwdBox" type="password" name="user_password" required onChange={this.handleFormChange} placeholder="Enter Password"/>
    <span className="asterisk_input2">  </span>

      <input className="submitBox" type="submit" value="Login"/>
      <input className="registerBox" type="submit" value="Register as New User" onClick={this.registerUser}/> {this.state.islogged && <Redirect to="/dashboard"/>}

      {this.state.newUser && <Redirect to="/registration"/>}
      {!this.state.checkCredentials && <p>{msg}</p>}
      </form>
    </Wrapper>);
  }
}

const Wrapper = styled.div `

  min-height: calc(91vh - 50px);
  background-image: url('https://cdn.hipwallpaper.com/i/41/90/MAiJWx.jpg');
  background-repeat: no-repeat;
  background-size: stretch;
  padding: 20px;

.form-back {
  background-color: white;
  width: 50%;
  position: absolute;
  height: 450px;
  left: 25%;
  padding-bottom: 30px;
  margin: 20px 0 0 0;
  opacity: 0.7;
}

  form {
    width: 50%;
    position: relative;
    left: 25%;
    padding-bottom: 30px;
  }

  span {
    color: black;
    font-size: 40px;
    font-family: 'Yusei Magic', sans-serif;
    position: relative;
    left: 32%;
    bottom: -80px;
}

.submitBox {
background-color: rgb(5, 57, 31);
border-color: rgb(5, 57, 31);
border-radius: 5px;
color: white;
cursor: pointer;
width:54%;
font-family: 'Exo 2', sans-serif;
position: relative;
margin-top: 50px;
-webkit-transition: 0.5s;
transition: 1s;
}

.registerBox {
background-color: rgb(16, 141, 201);
border-color: rgb(16, 141, 201);
border-radius: 5px;
color: white;
cursor: pointer;
width:54%;
font-family: 'Exo 2', sans-serif;
position: relative;
margin-top: 10px;
-webkit-transition: 0.5s;
transition: 1s;
}

.submitBox:hover {
background-color: #166c50;
border-color: #166c50;
-webkit-transition: 0.5s;
transition: 1s;
}

.registerBox:hover {
background-color: rgb(7, 98, 111);
border-color: rgb(7, 98, 111);
-webkit-transition: 0.5s;
transition: 1s;
}

input {
 width: 50%;
 padding: 12px;
 outline: none;
 margin: 5px 0;
 opacity: 0.85;
 display: inline-block;
 font-size: 17px;
 line-height: 20px;
 text-decoration: none;
 position: relative;
 left: 24%;
}

.userIdBox {
  margin: 125px 0 0 0;
  border: 3px solid #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 10px;
}

.userIdBox:focus {
  border: 3px solid #b4950f;
}

.pwdBox {
  border: 3px solid #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 10px;
}

.pwdBox:focus {
  border: 3px solid #b4950f;
}

p {
  color: rgb(153, 12, 16);
  font-family: Quantico;
  font-size: 20px;
  position: absolute;
  left: 22%;
  margin: -160px 0 0 0;
}

.asterisk_input1::after {
content:" *";
color: #e32;
position: absolute;
margin: 45px 0px 0px -75px;
font-size: xx-large;
padding: -20px 0 50px 0;
}

.asterisk_input2::after {
content:" *";
color: #e32;
position: absolute;
margin: -60px 0px 0px -75px;
font-size: xx-large;
padding: -20px 0 50px 0;
}

`;
export default Login;
