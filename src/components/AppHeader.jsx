import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import AppContainer from './AppContainer';
import AppLogo from './AppLogo';
import Avatar from '@material-ui/core/Avatar';
import useDataStore from '../hooks/useDataStore';

import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import actionTypes from '../context/actionTypes';

const AppHeader = () => {
  const [{ user }, dispatch] = useDataStore();
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
            }}>
            <MenuIcon />
          </IconButton>
          <AppLogo />
          <UserMenu>
            <span>{user.email}</span>
            <Avatar src={user.photoURL} />
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
  display: flex;
  align-items: center;
  span {
    margin-right: 1rem;
    font-size: 0.9rem;
    display: none;

    @media screen and (min-width: 750px) {
      display: block;
    }
  }
`;

export default AppHeader;
