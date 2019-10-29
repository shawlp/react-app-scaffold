import React, { PureComponent, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Toast from '@/components/Toast';
import './index.less';

const MallPage = lazy(() => import('@/pages/mall-page'));
const GoodsDetail = lazy(() => import('@/pages/goods-detail'));
const ExchangePoint = lazy(() => import('@/pages/exchange-point'));
const SubmitOrder = lazy(() => import('@/pages/submit-order'));
const OrderResult = lazy(() => import('@/pages/order-result'));

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
          <Route exact path='/mall' component={MallPage} />
          <Route exact path='/detail' component={GoodsDetail} />
          <Route exact path='/exchange' component={ExchangePoint} />
          <Route exact path='/submit' component={SubmitOrder} />
          <Route exact path='/result' component={OrderResult} />
          <Redirect exact from="" to="/mall" />
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
        <Suspense fallback={<Toast />}>
          <RoutesComponent />
        </Suspense>
    </Router>
    )
  }
}

export default Routes;