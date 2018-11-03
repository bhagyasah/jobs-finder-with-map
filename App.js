import React from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './src/router/RootRouter';
import store from './src/store';

export default class App extends React.Component {

  state = {};

  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
