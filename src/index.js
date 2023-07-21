import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ConnectionProvider } from './hooks/useConnection';
import AppRouter from './router';

ReactDOM.render(
  <React.StrictMode>
    <ConnectionProvider>
      <AppRouter />
    </ConnectionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
