import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import increment from './redux/action';
import store from './redux/store';
import storeTK from './rtk/storeTK'
import { Provider } from 'react-redux';
import Screen01 from './Screen01'
import Screen02 from './Screen02'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
       {/* <Provider store={storeTK}> */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen01">
          <Stack.Screen name="Screen01" component={Screen01}></Stack.Screen>
          <Stack.Screen name="Screen02" component={Screen02}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

