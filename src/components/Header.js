import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

/* This component is mainly used to set the links to the routes
   Again this component uses styled-components for styling (see const Wrapper below)*/

function Header(){
  return(
      <Wrapper>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-left: 200px;

    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;
export default Header;
