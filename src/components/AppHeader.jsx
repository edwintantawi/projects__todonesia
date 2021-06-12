import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import AppContainer from './AppContainer';
import AppLogo from './AppLogo';
import Avatar from '@material-ui/core/Avatar';

const AppHeader = () => {
  return (
    <Header>
      <AppContainer>
        <Wrapper>
          <AppLogo />
          <UserMenu>
            <span>useremail@email.com</span>
            <Avatar src="" />
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
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 1rem;
    font-size: 0.9rem;
  }
`;

export default AppHeader;
