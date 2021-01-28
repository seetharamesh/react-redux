import React, { Component } from 'react';
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import store from '../store';

/*Notes about this Component--
1. The new packages that were used are styled-components (for styling) and "Redirect" from react-router-dom library.
2. Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the
   history stack. The state object can be accessed via this.props.location.state in the redirected-to component.
3. handleFormChange -- this method takes the user inputs and store them in state.
4. handleSubmit -- this method is used when the user clicks submit button.
5. render funcion renders the form and route the page accordingly using <Redirect>
6. Const Wrapper is used for styling as mentioned in step 1. */

class Registration extends Component {
      state = {
       registerParams: {
        first_name:"",
        last_name:"",
        user_name: "",
        user_password: "",
        email_id:"",
      },
      isSuccessful: false
    };

  handleFormChange = event => {
    let registerParamsNew = { ...this.state.registerParams };
    console.log("register new params", registerParamsNew);
    let val = event.target.value;
    console.log("event.targe.value is in registration page: ", val);
    registerParamsNew[event.target.name] = val;
    this.setState({
      registerParams: registerParamsNew
    });
  };

  handleSubmit = event => {
    console.log("handle submit");
    let user_name = this.state.registerParams.user_name;
    let user_password = this.state.registerParams.user_password;
    if (user_name === "admin" && user_password === "1234") {
      this.setState({
        isSuccessful: true
      });
    }
    event.preventDefault();
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <span>Welcome to Registration Page!</span><br />
              <input
                type="text"
                name="first_name"
                onChange={this.handleFormChange}
                placeholder="Enter Firstname"
              />
              <input
                type="text"
                name="last_name"
                onChange={this.handleFormChange}
                placeholder="Enter Lastname"
              />
              <input
                type="text"
                name="email_id"
                onChange={this.handleFormChange}
                placeholder="Enter Email id"
              />
              <input
                type="text"
                name="user_name"
                onChange={this.handleFormChange}
                placeholder="Enter User Name"
              />
              <input
                type="password"
                name="user_password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />

            <input type="submit" value="Login" />

            {this.state.isSuccessful && <Redirect to="/dashboard" />}
          <p>Please use User Name: "admin" && Password: "1234" during registration as SERVER IS DOWN!! :(( </p>
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #079eb3;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  input[type="submit"] {
  background-color:rgba(18, 109, 215, 0.27) ;
  color: white;
  cursor: pointer;
  width:52%;
}

input[type="submit"]:hover {
  background-color: #079eb3;
}

p{
  color: white;
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
export default Registration;
