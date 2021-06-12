import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import AppLogo from './AppLogo';

const AppLoading = () => {
  return (
    <LoadingScreen>
      <AppLogo />
    </LoadingScreen>
  );
};

const LoadingScreen = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.white};
  display: grid;
  place-items: center;
  z-index: 99;
`;

export default AppLoading;
