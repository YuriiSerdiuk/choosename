import React from 'react';
import {createRoot} from 'react-dom/client';

import {SnackbarProvider} from 'notistack';

import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {sendToVercelAnalytics} from './vitals';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
  <SnackbarProvider maxSnack={3}>
    <App/>
  </SnackbarProvider>
</React.StrictMode>);

reportWebVitals(sendToVercelAnalytics);
