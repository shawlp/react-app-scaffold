import React, { PureComponent } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const TestCom = Loadable({
    loader: () => import('@components/test-com'),
    loading: Loading,
});

@observer
class Routes extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
            <Route path='/' component={TestCom} />
            <Route path='/test' component={TestCom} />
        </Switch>
    </Router>
    )
  }
}

export default Routes;