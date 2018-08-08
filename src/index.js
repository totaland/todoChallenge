import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = (_, state) => {
  window.localStorage.state = JSON.stringify(state);
}

const retrieve = () => {
  try {
    return JSON.parse(window.localStorage.state);
  } catch (e) {
    return {};
  }
}


ReactDOM.render(<App
  initialState={retrieve()}
  onState={store}
  />, document.getElementById('root'));
registerServiceWorker();
