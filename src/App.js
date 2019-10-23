import React from 'react';
import './App.less';
import Routes from '@routes';
import axiosConfig from '@common/axiosConfig';

// 拦截request,设置全局请求为ajax
axiosConfig();

function App() {
  return (
    <div className="App">
        <Routes />
    </div>
  );
}

export default App;   
