import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
           domain={process.env.REACT_APP_AUTH0_DOMAIN}
           clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
           authorizationParams={{
               redirect_uri: window.location.origin// process.env.REACT_APP_REDIRECT_URI
           }}
    >
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </Auth0Provider>
);