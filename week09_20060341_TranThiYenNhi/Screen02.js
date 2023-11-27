import { useState } from 'react';
import { Pressable, Text, View, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {add, minus, mutil, div, setOne, setTwo} from './rtk/slice'

export default function App() {
    const dispatch = useDispatch();
    const { number1, number2, result } = useSelector((state) => state);
    return (
        <View style={style.container}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Redux Toolkit</Text>
            <TextInput
                style={style.textInput}
                inputMode="numeric"
                placeholder="Input numner 1"
                value={number1}
                onChangeText={(value) => dispatch(setOne(value))}>
                </TextInput>
            <TextInput
                style={style.textInput}
                inputMode="numeric"
                placeholder="Input numner 2"
                value={number2}
                onChangeText={(value) => dispatch(setTwo(value))}>
                </TextInput>
            <Text style={style.textResult}>Result: {result}</Text>
            <View style={style.viewButton}>
                <Pressable
                    style={style.press}
                    onPress={() => { dispatch(add()) }}>
                    <Text style={style.textPress}>+</Text>
                </Pressable>
                <Pressable
                    style={style.press}
                    onPress={() => { dispatch(minus()) }}>
                    <Text style={style.textPress}>-</Text>
                </Pressable>
                <Pressable
                    style={style.press}
                    onPress={() => { dispatch(mutil()) }}>
                    <Text style={style.textPress}>*</Text>
                </Pressable>
                <Pressable
                    style={style.press}
                    onPress={() => { dispatch(div()) }}>
                    <Text style={style.textPress}>/</Text>
                </Pressable>
            </View>
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
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
})