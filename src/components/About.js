import React from 'react';
import styled from 'styled-components';

/* This component is mainly used to describe the purpose of this project
   Again this component uses styled-components for styling (see const Wrapper below)*/

function About() {
  return (<Wrapper>
    <p>"Be My Contact App!"</p>
    <section>
      <h2> Hello Users, Welcome to "Be My Contact App!" -- One Place To Store All Your Contacts <br /><br />
    How many times have you struggled keeping your contacts safely in one place ?<br /><br />
  Not anymore! Here's a very easy to use app built just for you ! <br /><br />
<span>Are you a registered user in our site! Great! Login safely and add your contacts. <br /><br />
Do you like to register yourself ? Great step! Visit the Login page and follow the instructions ! </span><br /><br />
    </h2>
    <h3>Your Privacy is our Priority. Don't hesitate to reach us at customerservice@se.com for any questions :)) !!</h3>
    </section>
  </Wrapper>);
};
const Wrapper = styled.div `
  min-height: calc(100vh - 50px);
  background-color: rgb(252, 99, 33);
  padding: 20px;
  p {
    text-align: center;
    color: #fff;
    font-size: 40px;
  }
  h2, h3{
    color:black;
  }
  span{
    color:white;
  }
  section {
    color: #fff;
  }
`;
export default About;
