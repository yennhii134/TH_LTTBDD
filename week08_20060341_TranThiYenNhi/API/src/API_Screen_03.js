import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {
    const [text, onChangeText] = useState('')
    return (
        <View style={styles.container} >
           <View style={styles.header}>
                <View style={styles.viewUser}>
                    <Image source={require('./img/Rectangle.png')} style={styles.imgProfile}></Image>
                    <View style={styles.rowTextUser}>
                        <Text style={styles.textUser1}>Hi Twinkle</Text>
                        <Text style={styles.textUser2}>Have agrate day a head</Text>
                    </View>
                </View>
                <Image source={require('./img/arrow.png')} style={styles.imgArrow}></Image>
            </View>
            <Text style={styles.textAdd}>ADD YOUR JOB</Text>
            <SafeAreaView style={styles.input}>
                <Image source={require('./img/list.png')} style={styles.imgList} resizeMode='contain'></Image>
                <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
                placeholder='Input your job'
                />
            </SafeAreaView>
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>FINISH -{'>'}</Text>
            </Pressable>
            <Image source={require('./img/Image 95.png')} style={styles.imgFooter} resizeMode='contain'></Image>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    imgArrow: {
        width: 24,
        height: 24
    },
    viewUser: {
        flexDirection: 'row'
    },
    imgProfile: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(217, 203, 246, 1)',
        borderRadius: 30,
        marginRight: 10
    },
    textUser1: {
        fontWeight: 'bold',
        fontSize: 20
    },
    textUser2: {
        fontWeight: '600'
    },
    textAdd:{
        fontSize: 32,
        fontWeight: 'bold'
    },
    input:{
        flexDirection: 'row',
        borderWidth: 1,
        width: '80%',
        height: 44,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'rgba(144, 149, 160, 1)'
    },
    imgList:{
        width: 26,
        height: 26
    },
    textInput:{
        width: '80%',
        height: '90%'
    },
    button:{
        backgroundColor: 'rgba(0, 189, 214, 1)',
        width: '40%',
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton:{
        color: 'white'
    },
    imgFooter:{
        width: '55%',
        height: '25%'
    }
});