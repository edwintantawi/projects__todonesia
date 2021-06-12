import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles';
import App from './App/App';
import DataStoreProvider from './context/store';
import initialState from './context/initialState';
import reducer from './context/reducer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <DataStoreProvider initialState={initialState} reducer={reducer}>
      <App />
    </DataStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
