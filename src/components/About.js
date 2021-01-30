import React from 'react';
import styled from 'styled-components';

/* This component is mainly used to describe the purpose of this project
   Again this component uses styled-components for styling (see const Wrapper below)*/

function About() {
  return (<Wrapper>
    <p>Welcome to About Page</p>
    <section>
      <h3>kjjlkjljda;ldja;lkf</h3>
    </section>
  </Wrapper>);
};
const Wrapper = styled.div `
  min-height: calc(100vh - 50px);
  background-color: rgb(212, 123, 18);
  padding: 20px;

  p {
    text-align: center;
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;
export default About;
