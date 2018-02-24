import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'Modules/rootReducer';
import rootSaga from 'Modules/rootSaga';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import MainNavigation from 'Components/UI/Menus/MainNavigation';
import Button from 'Components/UI/Button';

import theme from 'Constants/theme';

import Basic from '../pages/Basic';
import Basic2 from '../pages/Basic2';
import Basic3 from '../pages/Basic3';


const StyledApp = styled.div`

`;

// Saga
const sagaMiddleware = createSagaMiddleware();

// Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default () =>
  (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <StyledApp>
            <MainNavigation>
              <Link to="/"><Button>Basic 1</Button></Link>
              <Link to="/basic-2"><Button>Basic 2</Button></Link>
              <Link to="/basic-3"><Button>Basic 3</Button></Link>
            </MainNavigation>
            <Route exact path="/" component={Basic} />
            <Route exact path="/basic-2" component={Basic2} />
            <Route exact path="/basic-3" component={Basic3} />
          </StyledApp>
        </ThemeProvider>
      </Router>
    </Provider>
  );
