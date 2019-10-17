import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';
import './App.less';
import { Button } from 'antd-mobile';

const Routes = lazy(() => import('@routes/index'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Routes />
      </Suspense>
    </div>
  );
}

export default hot(module)(App);
