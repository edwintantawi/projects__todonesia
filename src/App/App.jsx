import AppHeader from '../components/AppHeader';
import AppMenu from '../components/AppMenu';
import AppContainer from '../components/AppContainer';
import styled from 'styled-components';
import AppMain from '../components/AppMain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppTodayTodo from '../routes/AppTodayTodo';

const App = () => {
  return (
    <div className="app">
      <Router>
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
    </div>
  );
};

const Content = styled.div`
  display: grid;
  grid-template-columns: 345px 1fr;
  column-gap: 70px;
  margin-top: 3rem;
`;

export default App;
