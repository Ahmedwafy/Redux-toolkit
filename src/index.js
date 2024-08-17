import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 3 - Link React With Redux
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider> 
  </React.StrictMode>
);


