import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

ReactDOM.render(
  <React.StrictMode>
    <KindeProvider clientId="c6c217d993ae492081a8886c08bc960f"
      domain="https://akashkumar.kinde.com"
      redirectUri="http://localhost:3000"
      logoutUri="http://localhost:3000">
      <Router>
        <App />
      </Router>
    </KindeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
