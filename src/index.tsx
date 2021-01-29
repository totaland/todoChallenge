import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = (_: any, state: []) => {
  window.localStorage.state = JSON.stringify(state);
}

const retrieve = () => {
  try {
    return JSON.parse(window.localStorage.state);
  } catch (e) {
    return {};
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App
      initialState={retrieve()}
      onState={store}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
