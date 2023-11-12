import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MasterPortrait from './src/MasterPortrait';
import DetailPortrait from './src/DetailPortrait';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MasterPortrait">
        <Stack.Screen name = "MasterPortrait" component={MasterPortrait} />
        <Stack.Screen name = "DetailPortrait" component={DetailPortrait} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
