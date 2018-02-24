import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import rootReducer from 'Modules/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'Modules/rootSaga';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'Constants/theme';
import App from './containers/App';

// Saga
const sagaMiddleware = createSagaMiddleware();

// Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Saga
sagaMiddleware.run(rootSaga);

/* global document */
const render = (Component) => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <Component />
          </ThemeProvider>
        </Router>
      </Provider>
    </AppContainer>), document.getElementById('app'));
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
