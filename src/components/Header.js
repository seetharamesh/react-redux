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
  if (pathName === "/about" || pathName === "/")
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
          isAbout && <Link to="/about" className="aboutStyles aboutAbout">
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            </Link>
        }
        {
          isAbout && <Link to="/login" className="aboutStyles aboutLogin">
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            </Link>
        }
      </li>
      <li>
        {
          isLogin && <Link to="/about" className="loginStyles loginAbout">
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            </Link>
        }
        {
          isLogin && <Link to="/login" className="loginStyles loginLogin">
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            </Link>
        }
      </li>
      <li>
        {
          isRegistration && <Link to="/about" className="registrationStyles registerAbout">
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            </Link>
        }
        {
          isRegistration && <Link to="/registration" className="registrationStyles registerRegister">
              <strong>&nbsp;&nbsp;Registration&nbsp;&nbsp;</strong>
            </Link>
        }
      </li>
      <li>
        {
          isDashboard && <Link to="/addcontact" className="dashboardStyles dashboardAddContact">
              <strong>&nbsp;&nbsp;Add&nbsp;Contact&nbsp;&nbsp;</strong>
            </Link>
        }
        {
          isDashboard && <Link to="/dashboard" className="dashboardStyles dashboardDashboard">
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;Dashboard&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            </Link>
        }
      </li>
      <li>
        {
          isAddContact && <Link to="/addcontact" className="addContactStyles addContactContact">
              <strong>&nbsp;&nbsp;Add&nbsp;Contact&nbsp;&nbsp;</strong>
            </Link>
        }
        {
          isAddContact && <Link to="/dashboard" className="addContactStyles addContactDashboard">
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;Dashboard&nbsp;&nbsp;&nbsp;&nbsp;</strong>
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
  background-color: #080505;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-left: 150px;

    a {
      text-decoration: none;
      font-size: 25px;
      color: #fff;
    }
  }

  .aboutStyles {
    position: relative;
    left: 100%;
    font-family: 'Andika New Basic', sans-serif;
  }

  .aboutLogin {
    background-color: none;
    margin-left: 50%;
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .aboutLogin:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .aboutAbout {
    background-color: rgb(84, 5, 5);
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .aboutAbout:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .loginStyles {
    position: relative;
    left: 50%;
    font-family: 'Andika New Basic', sans-serif;
  }

  .loginLogin {
    background-color: rgb(84, 5, 5);
    margin-left: 50%;
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .loginLogin:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .loginAbout {
    background-color: none;
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .loginAbout:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .registrationStyles {
    position: relative;
    left: -10%;
    font-family: 'Andika New Basic', sans-serif;
  }

  .registerAbout {
    background-color: none;
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .registerAbout:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .registerRegister {
    background-color: rgb(84, 5, 5);
    margin-left: 50%;
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .registerRegister:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .dashboardStyles {
    position: relative;
    left: -50%;
    font-family: 'Andika New Basic', sans-serif;
  }

  .dashboardDashboard {
    background-color: rgb(84, 5, 5);
    margin-left: 50%;
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .dashboardDashboard:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .dashboardAddContact {
    background-color: none;
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .dashboardAddContact:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .addContactStyles {
    position: relative;
    left: -90%;
    font-family: 'Andika New Basic', sans-serif;
  }

  .addContactContact {
    background-color: rgb(84, 5, 5);
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .addContactContact:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .addContactDashboard {
    background-color: none;
    margin-left: 50%;
    border-radius: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .addContactDashboard:hover {
    background-color: rgb(207, 29, 5);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

`;
export default Header;
