import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';

/* 1. This component is mainly used to set the links to the routes.
   2. Again this component uses styled-components for styling (see const Wrapper below)
   3. Added criteria for show and hide features of each component. Certain components will/not be shown based on
      the users navigation*/

function Header() {
  var isAbout = false;
  var isLogin = false;
  var isRegistration = false;
  var isAddContact = false;
  var isDashboard = false;

  const pathName = useLocation().pathname;
  console.log('pathname in header is: ', pathName);
  if (pathName === "/about")
    isAbout = true;
  if (pathName === "/login" || pathName === "/Login")
    isLogin = true;
  if (pathName === "/registration")
    isRegistration = true;
  if (pathName === "/addcontact")
    isAddContact = true;
  if (pathName === "/dashboard")
    isDashboard = true;

  return (<Wrapper>
    <ul>
      <li>
        {
          isAbout && <Link to="/about">
              <strong>About</strong>
            </Link>
        }
        {
          isAbout && <Link to="/login" className="aboutStyles">
              <strong>Login</strong>
            </Link>
        }
      </li>
      <li>
        {
          isLogin && <Link to="/about">
              <strong>About</strong>
            </Link>
        }
        {
          isLogin && <Link to="/login" className="loginStyles">
              <strong>Login</strong>
            </Link>
        }
      </li>
      <li>
        {
          isRegistration && <Link to="/about">
              <strong>About</strong>
            </Link>
        }
        {
          isRegistration && <Link to="/registration" className="registrationStyles">
              <strong>Registration</strong>
            </Link>
        }
      </li>
      <li>
        {
          isDashboard && <Link to="/about" className="dashboardStyles">
              <strong>About</strong>
            </Link>
        }
        {
          isDashboard && <Link to="/login" className="dashboardStyles">
              <strong>Login</strong>
            </Link>
        }
        {
          isDashboard && <Link to="/addcontact" className="dashboardStyles">
              <strong>Add Contact</strong>
            </Link>
        }
        {
          isDashboard && <Link to="/dashboard" className="dashboardStyles">
              <strong>Dashboard</strong>
            </Link>
        }
      </li>
      <li>
        {
          isAddContact && <Link to="/about" className="dashboardStyles">
              <strong>About</strong>
            </Link>
        }
        {
          isAddContact && <Link to="/login" className="dashboardStyles">
              <strong>Login</strong>
            </Link>
        }
        {
          isAddContact && <Link to="/addcontact" className="dashboardStyles">
              <strong>Add Contact</strong>
            </Link>
        }
        {
          isAddContact && <Link to="/dashboard" className="dashboardStyles">
              <strong>Dashboard</strong>
            </Link>
        }
      </li>

    </ul>
  </Wrapper>);
}
const Wrapper = styled.div `
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
    margin-left: 150px;

    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
  .aboutStyles{
    display:inline-block;
    margin-left:800px;
  }
  .loginStyles{
    display:inline-block;
    margin-left:475px;
  }
  .registrationStyles{
    display:inline-block;
    margin-left:250px;
  }
  .dashboardStyles{
    display: inline-block;
    margin-left: 150px;

  }
`;
export default Header;
