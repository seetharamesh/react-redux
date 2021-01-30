import React, {Component} from 'react';
import styled from "styled-components";
import {Redirect} from "react-router-dom";
import store from '../store';

/*Notes about this Component--
1. The new packages that were used are styled-components (for styling) and "Redirect" from react-router-dom library.
2. Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the
   history stack. The state object can be accessed via this.props.location.state in the redirected-to component.
3. handleFormChange -- this method takes the user inputs and store them in state.
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
      <form onSubmit={this.handleLogin}>
        <span>Please sign in</span><br/>
      <input type="text" name="user_id" required onChange={this.handleFormChange} placeholder="Enter Username" />
    <input type="password" name="user_password" required onChange={this.handleFormChange} placeholder="Enter Password"/>
        <input type="submit" value="Login"/>
      <input type="submit" value="Register as New User" onClick={this.registerUser}/> {this.state.islogged && <Redirect to="/dashboard"/>}
        {this.state.newUser && <Redirect to="/registration"/>}
        {!this.state.checkCredentials && <p>{msg}</p>}
      </form>
    </Wrapper>);
  }
}

const Wrapper = styled.div `
  min-height: calc(100vh - 50px);
  background-color: #00d38a;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  input[type="submit"] {
  background-color: rgb(5, 57, 31);
  color: white;
  cursor: pointer;
  width:52%;
}

input[type="submit"]:hover {
  background-color: #0a251c;
}

p{
  color: #0c451a;
  font-size: 20px;
}

 input
 {
  width: 50%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none;
}
`;
export default Login;
