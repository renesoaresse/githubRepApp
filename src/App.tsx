import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Routers from './routers';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <StatusBar barStyle={'light-content'} />
    <Provider store={store}>
      <Routers />
    </Provider>
  </SafeAreaView>
);

export default App;
