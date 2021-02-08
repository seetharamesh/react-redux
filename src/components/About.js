import React from 'react';
import styled from 'styled-components';

/* This component is mainly used to describe the purpose of this project
   Again this component uses styled-components for styling (see const Wrapper below)*/

function About() {
  return (<Wrapper>
    <p>"Be My Contact App!"</p>
    <section>
    <img src="https://cdn1.iconfinder.com/data/icons/materia-office-vol-1/24/010_046_label_folder_phone_book_contacts_documents-512.png" width="500" height="430"></img>

      <h2>Hello User...Welcome to the "Be My Contact" App!  How many times have you struggled keeping your contacts safely in one place?  Not anymore!  This is ONE place to store ALL your Contacts! <br /><br /> Are you a registered user?  Great! Login safely and add your contacts.  Are you a new user?  Just click log in and follow the instructions provided.
    </h2>
    <h3>Your Privacy is our Priority. Don't hesitate to reach us at customerservice@se.com for any questions :)) !!</h3>
    </section>
  </Wrapper>);
};
const Wrapper = styled.div `
  min-height: calc(89vh - 55px);
  background-image: url('https://cdn.wallpapersafari.com/58/31/e2DOgl.png');
  padding: 20px;
  p {
    text-align: center;
    color: #fff;
    font-size: 40px;
    text-decoration: underline overline wavy black;
    text-underline-offset: 0.3em;
    text-shadow: black 2px 2px;
  }

  img {
    position: absolute;
    margin-top: -30px;
  }

  h2, h3 {
    color:black;
    position: relative;
    left: 40%;
    width: 60%;
    font-family: 'Quantico';
  }

  span {
    color:white;
  }

  section {
    color: #fff;
  }
`;
export default About;
