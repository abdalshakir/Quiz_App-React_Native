import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyStack from './src/Navigation/Stack';
import store from './src/Store/Source';
import { Provider } from 'react-redux';
import Map from './src/Screens/Map'

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
        <Map />
      </NavigationContainer>
    </Provider>
  )
}

export default App;