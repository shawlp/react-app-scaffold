import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import rootStore from '@store';
import App from './App';
import '@assets/index.css';

ReactDOM.render(
  <Provider {...rootStore}>
      <App />
  </Provider>, 
  document.getElementById('root')
);



