import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue900 } from 'material-ui/styles/colors';

import Layout from './components/Layout.jsx';
import Splash from './components/Splash.jsx';
import NotFound from './components/NotFound.jsx';

import './style.css';
import store from './store';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primaryColor: lightBlue900
    // accentColor: yellow50
  }
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout} >
          {/* <IndexRoute component={Splash} /> */}
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
