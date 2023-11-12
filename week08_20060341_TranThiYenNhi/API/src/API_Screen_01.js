import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image, SafeAreaView } from 'react-native';

export default function App() {
    const [text, onChangeText] = useState('')
    return (
        <View style={styles.container} >
            <Image source={require('./img/Image 95.png')} style={styles.imgHeader} resizeMode='contain'></Image>
            <Text style={styles.textHeader}>MANAGE YOUR TASK</Text>
            <SafeAreaView style={styles.input}>
                <Image source={require('./img/mail.png')} style={styles.imgMail} resizeMode='contain'></Image>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Enter your name'
                >
                </TextInput>
            </SafeAreaView>
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>GET STARTED -{'>'}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    imgHeader: {
        width: '80%',
        height: '40%'
    },
    textHeader: {
        fontSize: 28,
        color: 'rgba(131, 83, 226, 1)',
        fontWeight: 'bold',
        width: '50%',
        textAlign: 'center'
    },
    input:{
        flexDirection: 'row',
        borderWidth: 1,
        width: '80%',
        height: 44,
        borderRadius: 10,
        borderColor: 'rgba(144, 149, 160, 1)',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    imgMail:{
        width: 24,
        height: 24
    },
    textInput:{
        width: '75%',
        color: 'rgba(188, 193, 202, 1)',
        height: '90%'
    },
    button:{
        backgroundColor: 'rgba(0, 189, 214, 1)',
        width: '50%',
        height: 44,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton:{
        color: 'white'
    }
});