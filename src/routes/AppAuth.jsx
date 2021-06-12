import React from 'react';
import styled from 'styled-components';
import AppLogo from '../components/AppLogo';
import colors from '../styles/colors';
import firebase, {
  auth,
  facebookAuthProvider,
  googleAuthProvider,
} from '../services/firebase';
import useDataStore from '../hooks/useDataStore';
import actionTypes from '../context/actionTypes';

const AppAuth = () => {
  const [, dispatch] = useDataStore();

  const handleSignIn = (provider) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.info(result);
        const accessToken = result.credential.accessToken;
        const photoURL =
          result.credential.providerId === 'facebook.com'
            ? `${result.user.photoURL}?access_token=${accessToken}`
            : result.user.photoURL;

        dispatch({
          type: actionTypes.ADD_USER,
          payload: {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName,
            photoURL: photoURL,
          },
        });
      })
      .catch((error) => firebase.auth().signInWithCredential(error.credential));
  };

  return (
    <AuthScreen>
      <img src="/bg-auth.webp" alt="" />
      <AuthProvider>
        <AuthProviderWrapper>
          <AppLogo />
          <p>Login With</p>
          <button id="google" onClick={() => handleSignIn(googleAuthProvider)}>
            <img src="/google.svg" alt="" /> Google
          </button>
          <button
            id="facebook"
            onClick={() => handleSignIn(facebookAuthProvider)}>
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
  grid-template-columns: 1fr;
  grid-template-rows: 20vh 1fr;
  column-gap: 80px;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }

  & > img {
    grid-column: auto;
    width: 100%;
    height: 20vh;
    object-fit: cover;

    @media screen and (min-width: 900px) {
      grid-column: 1 / span 7;
      height: 100%;
    }

    @media screen and (min-width: 1060px) {
      grid-column: 1 / span 8;
    }
  }
`;

const AuthProvider = styled.div`
  grid-column: auto;
  display: grid;
  place-items: center;

  @media screen and (min-width: 900px) {
    grid-column: 8 / span 4;
  }

  @media screen and (min-width: 1060px) {
    grid-column: 9 / span 3;
  }
`;

const AuthProviderWrapper = styled.div`
  width: 90%;

  @media screen and (min-width: 900px) {
    width: 100%;
  }

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
