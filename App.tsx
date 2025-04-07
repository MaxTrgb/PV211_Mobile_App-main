import React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from "./src/navigation/StackNavigator.tsx";

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
          <SafeAreaProvider>
              <NavigationContainer>
                  <StackNavigator/>
              </NavigationContainer>
          </SafeAreaProvider>
      </Provider>
    </>
  );
}

export default App;
