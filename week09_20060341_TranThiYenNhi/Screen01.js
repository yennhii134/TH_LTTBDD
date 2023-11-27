import { useState } from 'react';
import { Pressable, Text, View, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function App({ navigation }) {
    const dispatch = useDispatch()
    const { number1, number2, result } = useSelector(state => state)
    return (
        <View style={style.container}>
            <TextInput
                style={style.textInput}
                inputMode="numeric"
                placeholder="Input numner 1"
                value={number1}
                onChangeText={value => dispatch({ type: 'SET_ONE', payload: value })}>
            </TextInput>
            <TextInput
                style={style.textInput}
                inputMode="numeric"
                placeholder="Input numner 2"
                value={number2}
                onChangeText={value => dispatch({ type: 'SET_TWO', payload: value })}>
            </TextInput>
            <Text style={style.textResult}>Result: {result}</Text>
            <View style={style.viewButton}>
                <Pressable
                    style={style.press}
                    onPress={() => { dispatch({ type: 'ADD' }) }}>
                    <Text style={style.textPress}>+</Text>
                </Pressable>
                <Pressable
                    style={style.press}
                    onPress={() => { dispatch({ type: 'MINUS' }) }}>
                    <Text style={style.textPress}>-</Text>
                </Pressable>
                <Pressable
                    style={style.press}
                    onPress={() => { dispatch({ type: 'MUTIL' }) }}>
                    <Text style={style.textPress}>*</Text>
                </Pressable>
                <Pressable
                    style={style.press}
                    onPress={() => { dispatch({ type: 'DIV' }) }}>
                    <Text style={style.textPress}>/</Text>
                </Pressable>
            </View>
            <Pressable style={style.pressScreen02} onPress={
                () => {navigation.navigate("Screen02")}
            }>Screen02</Pressable>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        borderWidth: 1,
        padding: 10
    },
    viewButton: {
        flexDirection: 'row'
    },
    press: {
        backgroundColor: 'pink',
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    pressScreen02:{
        width: 100,
        height: 50,
        backgroundColor: 'purple',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})