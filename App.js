
import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from './src/redux/Store';
import { Home, SearchVideo, Wellcome } from './src/screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <Navigation>
          <Stack.Screen name="Wellcome" component={Wellcome}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="SearchVideo" component={SearchVideo}/>
      </Navigation>
      
    </Provider>
  );
}

export default App;