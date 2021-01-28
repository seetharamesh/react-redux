import React from 'react';
import styled from 'styled-components'

/* This component is mainly used to connect to API and display results
   Again this component uses styled-components for styling (see const Wrapper below)*/

function Dashboard() {
  return (
    <Wrapper>
      <span>Dashboard Page</span>
      <section>
      <p>dashboard page</p>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #f76565;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;
export default Dashboard;
