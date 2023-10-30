import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaVie, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './demo/Home';
import Item from './demo/item';
import List from './demo/list';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='List' component={List}/>
        <Stack.Screen name='Item' component={Item}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
