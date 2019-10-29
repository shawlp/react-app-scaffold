// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import rootStore from '@/store';
import App from './App';
import '@/assets/index.css';

function render() {
  ReactDOM.render(
    <AppContainer>
      <Provider {...rootStore}>
          <App />
      </Provider>
    </AppContainer>, 
    document.getElementById('root')
  );
}

render();

if (module.hot) {
  module.hot.accept(() => {
      render();
  })  
}   




