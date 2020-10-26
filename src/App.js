import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from 'store';

import Root from 'views/Root';

const App = () => (
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>
);

export default App;
