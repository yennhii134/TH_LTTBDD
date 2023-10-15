import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import screen1 from './src/screen1';
import screen2 from './src/screen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={screen1}/>
                <Stack.Screen name="ChooseColor" component={screen2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

