import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Router
import { BrowserRouter } from 'react-router-dom'

// Redux
import store from './store'
import { Provider } from 'react-redux'

// CSS files
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
