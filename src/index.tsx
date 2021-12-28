import { StrictMode } from 'react';
import { hydrate, render } from 'react-dom';

import config from './config';
import App from './app';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const rootNode = document.querySelector('div#root');

const properRender = rootNode?.hasChildNodes() ? hydrate : render;

properRender(
  <StrictMode>
    <App />
  </StrictMode>,
  rootNode,
);

serviceWorkerRegistration.register();

reportWebVitals(config.REACT_APP_HOST_ENV === 'local'
// eslint-disable-next-line no-console
  ? console.log
  : undefined);
