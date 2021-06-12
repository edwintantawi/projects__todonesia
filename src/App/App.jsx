import AppHeader from '../components/AppHeader';
import AppMenu from '../components/AppMenu';
import AppContainer from '../components/AppContainer';
import styled from 'styled-components';
import AppMain from '../components/AppMain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppTodayTodo from '../routes/AppTodayTodo';
import useDataStore from '../hooks/useDataStore';
import AppAuth from '../routes/AppAuth';
import AppDataProvider from '../components/AppDataProvider';
import firebase from '../services/firebase';
import actionTypes from '../context/actionTypes';
import { useLayoutEffect } from 'react';
import AppLoading from '../components/AppLoading';
import { useState } from 'react';

const App = () => {
  const [{ user }, dispatch] = useDataStore();
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: actionTypes.ADD_USER,
          payload: {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
        });
      }
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <div className="app">
      {loading && <AppLoading />}
      {!user ? (
        <AppAuth />
      ) : (
        <Router>
          <AppDataProvider />
          <AppHeader />
          <AppContainer>
            <Content>
              <AppMenu />
              <AppMain>
                <Switch>
                  <Route exact path="/" component={AppTodayTodo} />
                </Switch>
              </AppMain>
            </Content>
          </AppContainer>
        </Router>
      )}
    </div>
  );
};

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 70px;
  margin-top: 1rem;

  @media screen and (min-width: 750px) {
    grid-template-columns: 250px 1fr;
    margin-top: 3rem;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 345px 1fr;
  }
`;

export default App;
