import React, {Component} from 'react';
import styled from "styled-components";
import {Redirect} from "react-router-dom";
import store from '../../src/store'

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
      email_id: ""
    }
  };

  handleFormChange = event => {
    let registerNewContact = {...this.state.registerContact};
    console.log("number of data we currently have ", this.state.registerContact.length);
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
    var len = store.getState().length;
    console.log("length of state array from store is", len);
    /*since i don't have an id for new user entered in UI i am using the length of the array and incrementing it for id.
    This id will be used as a key when displaying in UI.
    **Here we are updating the store with user input data using store.dispatch*/
    store.dispatch({
    type: "Add_Contact",
    payload:{
    Name:this.state.registerContact.first_name,
    Avatar:this.state.registerContact.avatar,
    Email: this.state.registerContact.email_id,
    Id:++len
  }
})
    this.setState({
      isSuccessful: true
    });
    event.preventDefault();
  };

  render() {
    return ( <Wrapper >
      <form onSubmit = {this.handleSubmit} >
      <span > Add Your Contact Form ! < /span><br / >
           <input type = "text"
             name = "first_name"
             pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
             title="Only Characters"
             onChange = {this.handleFormChange}
             placeholder = "First name" required />
           <span className="asterisk_input">  </span>
           <input type = "text"
             name = "last_name"
             pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
             title="Only Characters"
             onChange = {this.handleFormChange}
             placeholder = "Last name" required />
             <span className="asterisk_input">  </span>
           <input type = "text"
             name = "email_id"
             pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
             title="Only valid email address"
             onChange = {this.handleFormChange}
             placeholder = "Email Address" required />
             <span className="asterisk_input">  </span>
           <input type = "url"
             name = "avatar"
             id = "urlList"
             onChange = {this.handleFormChange}
             pattern="https://.*"
             placeholder = "Add your avatar with an url - https://example.com"  />

      <input type = "submit"
             value = "Add Contact" / >
      {this.state.isSuccessful && < Redirect to = "/dashboard" / >}
      < /form>
      < /Wrapper>
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

  input[type="submit"]{
  background-color:rgba(106, 78, 6, 0.79) ;
  color: white;
  cursor: pointer;
  width:52%;
}

input[type="submit"]:hover
{
  background-color: rgb(94, 56, 10);
}
.asterisk_input::after {
content:" *";
color: #e32;
position: absolute;
margin: 10px 0px 0px -20px;
font-size: xx-large;
padding: 0 5px 0 0;
}

p
{
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
  content:" *";
}
`;
export default AddContact;
