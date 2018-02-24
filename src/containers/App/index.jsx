import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PropTypes from 'prop-types';

import { withRouter } from 'react-router';
import styled from 'styled-components';
import {
  Route,
  Switch,
  // Link,
} from 'react-router-dom';

// import MainNavigation from 'Components/UI/Menus/MainNavigation';
// import Button from 'Components/UI/Button';

import Page from 'Components/UI/Page';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

const PageWrapper = styled.div`

position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;

&.fade-appear,
&.fade-enter {
  opacity: 0;
  transform: translateY(0);
}

&.fade-appear-active,
&.fade-enter-active {
  transition: opacity .3s linear, transform 0.3s linear;
  opacity: 1;
  
}

&.fade-exit {
  transition: opacity .3s linear, transform 0.3s linear;
  opacity: 1;
  
}

&.fade-exit-active {
  opacity: 0;
  transform: translateY(200px);
}

`;

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 300 };

  return (
    <Page>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <Switch location={location}>
            <PageWrapper>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
            </PageWrapper>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Page>
  );
};

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(App);
