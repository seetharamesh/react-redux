import React from 'react';
import styled from 'styled-components'

/* This component is mainly used to show error if user alters the url to anything that's not in the route path
   Again this component uses styled-components for styling (see const Wrapper below)*/

function Error() {
  return (
    <Wrapper>
      <span>Oops! Page not found! Error 404 :(( </span>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: red;
  padding: 20px;

  span {
    color: white;
    font-size: 120px;
  }
`;
export default Error;
