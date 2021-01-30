import React, {Component} from 'react';
import styled from "styled-components";
import {Redirect} from "react-router-dom";
import store from '../store';

/*Notes about this Component--
1. The new packages that were used are styled-components (for styling) and "Redirect" from react-router-dom library.
2. Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the
   history stack. The state object can be accessed via this.props.location.state in the redirected-to component.
3. handleFormChange -- this method takes the user inputs and store them in state.
4. handleSubmit -- this method is used when the user clicks submit button.
5. render funcion renders the form and route the page accordingly using <Redirect>
6. Const Wrapper is used for styling as mentioned in step 1. */

class AddContact extends Component {
  state = {
    registerContact: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email_id: "",
    }
  };

  handleFormChange = event => {
    let registerNewContact = {
      ...this.state.registerContact
    };
    console.log("Add new contact", registerNewContact);
    let val = event.target.value;
    console.log("event.targe.value is in add contact page: ", val);
    registerNewContact[event.target.name] = val;
    this.setState({
      registerContact: registerNewContact
    });
  };

  handleSubmit = event => {
    console.log("Adding contact");
    this.setState({
      isSuccessful: true
    });
    event.preventDefault();
  };

  render() {
    return ( <
      Wrapper >
      <
      form onSubmit = {
        this.handleSubmit
      } >
      <
      span > Add Your Contact Page! < /span><br / >
      <
      input type = "text"
      name = "first_name"
      onChange = {
        this.handleFormChange
      }
      placeholder = "First name" /
      >
      <
      input type = "text"
      name = "last_name"
      onChange = {
        this.handleFormChange
      }
      placeholder = "Last name" /
      >
      <
      input type = "text"
      name = "email_id"
      onChange = {
        this.handleFormChange
      }
      placeholder = "Email Address" /
      >
      <
      input type = "text"
      name = "avatar"
      onChange = {
        this.handleFormChange
      }
      placeholder = "Insert Image Address" /
      >

      <
      input type = "submit"
      value = "Add Contact" / > {
        this.state.isSuccessful && < Redirect to = "/dashboard" / >
      } <
      /form> <
      /Wrapper>
    );
  }
}

const Wrapper = styled.div `
  min-height: calc(100vh - 50px);
  background-color: rgb(203, 137, 60);
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  input[type="submit"] {
  background-color:rgba(106, 78, 6, 0.79) ;
  color: white;
  cursor: pointer;
  width:52%;
}

input[type="submit"]:hover {
  background-color: rgb(94, 56, 10);
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
export default AddContact;
