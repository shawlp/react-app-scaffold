import React, { PureComponent, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './index.less';

const TestCom = lazy(() => import('@pages/test-com'));
const About = lazy(() => import('@pages/about-com'));
const List = lazy(() => import('@pages/list-com'));
const StickyCom = lazy(() => import('@pages/sticky-com'));

const AnimationMap = {
  'PUSH': 'forward',
  'POP': 'back'
};

const RoutesComponent = withRouter(({location, history}) => (
  <TransitionGroup 
    className={'router-wrapper'}
    childFactory={child => React.cloneElement(
      child,
      {classNames: AnimationMap[history.action]}
    )}>
    <CSSTransition
      timeout={500}
      classNames={'fade'}
      key={location.pathname}    
    >
      <Switch location={location}>
          <Route exact path='/' component={TestCom} />
          <Route exact path='/test' component={TestCom} />
          <Route exact path='/about' component={About} />
          <Route exact path='/list' component={List} />
          <Route exact path='/sticky' component={StickyCom} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

class Routes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <RoutesComponent />
        </Suspense>
    </Router>
    )
  }
}

export default Routes;