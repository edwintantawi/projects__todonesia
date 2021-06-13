import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import AppContainer from './AppContainer';
import AppLogo from './AppLogo';
import Avatar from '@material-ui/core/Avatar';
import useDataStore from '../hooks/useDataStore';

import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import actionTypes from '../context/actionTypes';
import firebase from '../services/firebase';
import { useState } from 'react';

const AppHeader = () => {
  const [{ user }, dispatch] = useDataStore();
  const [activeSubMenu, setActiveSubMenu] = useState(false);
  return (
    <Header>
      <AppContainer>
        <Wrapper>
          <IconButton
            id="toggler"
            onClick={() => {
              dispatch({
                type: actionTypes.UPDATE_ACTIVE_MENU,
              });
            }}
          >
            <MenuIcon />
          </IconButton>
          <AppLogo />
          <UserMenu>
            <Avatar
              src={user.photoURL}
              onClick={() => setActiveSubMenu((prev) => !prev)}
            />
            <UserSubMenu isActive={activeSubMenu}>
              <div className="identity">{user.email}</div>
              <button
                className="logout"
                onClick={() =>
                  firebase
                    .auth()
                    .signOut()
                    .then(() => {
                      dispatch({ type: actionTypes.REMOVE_USER });
                    })
                }
              >
                Logout
              </button>
            </UserSubMenu>
          </UserMenu>
        </Wrapper>
      </AppContainer>
    </Header>
  );
};

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 9;
  padding: 0.5rem 0;
  background-color: ${colors.white};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  #toggler {
    display: block;

    @media screen and (min-width: 750px) {
      display: none;
    }
  }
`;

const UserMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .MuiAvatar-root {
    margin-left: 26px;
    cursor: pointer;
  }

  @media screen and (min-width: 750px) {
    .MuiAvatar-root {
      margin-left: 0;
    }
  }
`;

const UserSubMenu = styled.div`
  position: absolute;
  top: 65px;
  width: max-content;
  right: 0;
  padding: 0.8rem 0.8rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transition: 350ms;

  transform: ${(props) =>
    props.isActive ? 'translateY(0)' : 'translateY(-10px)'};
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isActive ? '1' : '0')};

  & > * {
    font-size: 0.7rem;
  }

  .identity {
    padding: 0.2rem 1rem;
    font-weight: ${fonts.medium};
    border-radius: 8px;
  }

  .logout {
    width: 100%;
    background-color: #d60000;
    color: white;
    border: none;
    padding: 0.7rem;
    margin-top: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
  }

  @media screen and (min-width: 750px) {
    padding: 0.8rem 1rem;
    top: 70px;
    & > * {
      font-size: 0.9rem;
    }
  }
`;

export default AppHeader;
