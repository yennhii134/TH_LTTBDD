import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import API_Screen_01 from './src/API_Screen_01';
import API_Screen_02 from './src/API_Screen_02';
import API_Screen_03 from './src/API_Screen_03';
import API_Screen_04 from './src/API_Screen_04';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="API_Screen_01">
        <Stack.Screen name="API_Screen_01" component={API_Screen_01}></Stack.Screen>
        <Stack.Screen name="API_Screen_02" component={API_Screen_02}></Stack.Screen>
        <Stack.Screen name="API_Screen_03" component={API_Screen_03}></Stack.Screen>
        <Stack.Screen name="API_Screen_04" component={API_Screen_04}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
