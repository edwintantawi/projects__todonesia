import React from 'react';
import styled from 'styled-components';
import AppLogo from '../components/AppLogo';
import colors from '../styles/colors';

const AppAuth = () => {
  return (
    <AuthScreen>
      <img src="/bg-auth.webp" alt="" />
      <AuthProvider>
        <AuthProviderWrapper>
          <AppLogo />
          <p>Login With</p>
          <button id="google">
            <img src="/google.svg" alt="" /> Google
          </button>
          <button id="facebook">
            <img src="/facebook.svg" alt="" />
            Facebook
          </button>
        </AuthProviderWrapper>
      </AuthProvider>
    </AuthScreen>
  );
};

const AuthScreen = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 80px;

  & > img {
    grid-column: 1 / span 8;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthProvider = styled.div`
  grid-column: 9 / span 3;
  display: grid;
  place-items: center;
`;

const AuthProviderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    color: ${colors.gray};
    font-size: 0.9rem;
    margin: 1rem 0 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: white;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    img {
      height: 1rem;
      margin-right: 0.5rem;
    }
  }

  button#google {
    border: 1px solid ${colors.gray};
  }

  button#facebook {
    background-color: #3b5998;
    color: white;
  }
`;

export default AppAuth;
