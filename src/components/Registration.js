import React, {Component} from 'react';
import styled from "styled-components";
import {Redirect} from "react-router-dom";

/*Notes about this Component--
1. The new packages that were used are styled-components (for styling) and "Redirect" from react-router-dom library.
2. Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the
   history stack. The state object can be accessed via this.props.location.state in the redirected-to component.
3. handleFormChange -- this method takes the user inputs and store them in state.
4. handleSubmit -- this method is used when the user clicks submit button.
5. render funcion renders the form and route the page accordingly using <Redirect>
6. Const Wrapper is used for styling as mentioned in step 1.
7. A registration form is used to accept user data and appropriate validations are done to each field values
   that the user enters and redirect the page to Login.*/

class Registration extends Component {
  state = {
    registerParams: {
      first_name: "",
      last_name: "",
      user_name: "",
      user_password: "",
      email_id: ""
    },
    isSuccessful: false,
    isCancel: false
  };

  handleFormChange = event => {
    let registerParamsNew = {
      ...this.state.registerParams
    };
    console.log("register new params", registerParamsNew);
    let val = event.target.value;
    console.log("event.targe.value is in registration page: ", val);
    registerParamsNew[event.target.name] = val;
    this.setState({registerParams: registerParamsNew});
  };

  handleSubmit = event => {
    console.log("handle submit");
    let user_name = this.state.registerParams.user_name;
    let user_password = this.state.registerParams.user_password;
    if (user_name === "admin" && user_password === "1234") {
      this.setState({isSuccessful: true});
    }
    event.preventDefault();
  };

  handleClick = event =>{
    console.log("inside handle click -- registration page");
    this.setState({isCancel:true});
  }

  render() {
    return (<Wrapper>
        <form onSubmit={this.handleSubmit}>
          <span>Registration Form</span><br/>
          <div className="formA">
            <input type="text" name="first_name" required="required" pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" title="Only Characters" onChange={this.handleFormChange} placeholder="First name"/>
              <span className="asterisk_input">  </span>
            <input type="text" name="last_name" required="required" pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" title="Only Characters" onChange={this.handleFormChange} placeholder="Last name"/>
              <span className="asterisk_input">  </span>
            <input type="text" name="email_id" required="required" pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" title="Only valid email address" onChange={this.handleFormChange} placeholder="Your Email Address"/>
              <span className="asterisk_input">  </span>
            <input type="text" name="user_name" required="required" onChange={this.handleFormChange} placeholder="Enter User Name"/>
              <span className="asterisk_input">  </span>
            <input type="password" name="user_password" required="required" onChange={this.handleFormChange} placeholder="Enter Password"/>
              <span className="asterisk_input">  </span>
            <input className="register" type="submit" value="Register"/> {this.state.isSuccessful && <Redirect to="/login"/>}
          </div>
        </form>
      <input className="cancel" type="submit" value="Cancel" onClick={this.handleClick}/>
      {this.state.isCancel && <Redirect to="/login"/>}
      <p>Please use User Name: "admin" && Password: "1234" during the registration as SERVER IS DOWN!! :((</p>

    </Wrapper>);
  }
}

const Wrapper = styled.div `
  min-height: calc(97vh - 50px);
  background-color: #079eb3;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
      0% {
          background-position: 0% 50%;
      }
      50% {
          background-position: 100% 50%;
      }
      100% {
          background-position: 0% 50%;
      }
  }

  span {
    color: #fff;
    font-size: 40px;
    position: absolute;
    left: 33%;
    margin-top: 20px;
    font-family: 'Cinzel Decorative';
  }

  .formA {
    margin-top: 50px;
  }

  input[type="submit"] {
  background-color:rgba(2, 19, 40, 0.78) ;
  color: white;
  cursor: pointer;
  width:52%;
}

input[type="submit"]:hover {
  background-color: #07464f;
}

.asterisk_input::after {
content:" *";
color: #e32;
position: relative;
margin: 0px 0px 0px 560px;
font-size: xx-large;
z-index: 4;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0;
  position: absolute;
  left: 23.5%;
  font-family: 'Dosis';
}

input {
 width: 50%;
 padding: 12px;
 display: inline-block;
 font-size: 17px;
 line-height: 20px;
 position: relative;
 left: 23%;
 opacity: 0.85;
 margin: 10px;
 margin-bottom: 5px;
 border: 3px solid #000000;
 -webkit-transition: 0.5s;
 transition: 0.5s;
 border-radius: 10px;
 outline: none;
 z-index: 3;
}

input:focus {
  border: 3px solid #990c0c;
}

.register {
  margin-top: 20px;
  margin-bottom: -3px;
  border-width: 0px;
}

.cancel {
  border-width: 0px;
}

`;
export default Registration;
