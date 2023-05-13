import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-MHPDGLH',
  dataLayer: {
    name: 'Super Sonic Octopus',
  },
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
