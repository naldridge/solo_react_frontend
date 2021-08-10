import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

/* const domain = process.env.REACT_APP_DOMAIN;
const client_id = process.env.REACT_APP_CLIENT_ID; */
//{window.location.origin}

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-lojf5doz.us.auth0.com"
    clientId="5hotiktoRjuZmNYEHsRiU9HD42jClzfB"
    redirectUri="http://localhost:3000"
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
