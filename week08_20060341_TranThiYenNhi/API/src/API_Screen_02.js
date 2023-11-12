import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {
    const [text, onChangText] = useState('')
    const DATA = [
        {
            id: 1,
            listName: 'To check email'
        },
        {
            id: 2,
            listName: 'UI task web page'
        },
        {
            id: 3,
            listName: 'Learn javascript basic'
        },
        {
            id: 4,
            listName: 'Learn HTML Advance'
        },
        {
            id: 5,
            listName: 'Medical App UI'
        },
        {
            id: 6,
            listName: 'Learn Java'
        }
    ];
    const Item = ({ listName }) => (
        <Pressable style={styles.button}>
            <Image source={require('./img/checked.png')} style={styles.imgButton} resizeMode='contain'></Image>
            <Text style={styles.textButton}>{listName}</Text>
            <Image source={require('./img/pencil.png')} style={styles.imgButton} resizeMode='contain'></Image>
        </Pressable>
    )

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={require('./img/arrow.png')} style={styles.imgArrow}></Image>
                <View style={styles.viewUser}>
                    <Image source={require('./img/Rectangle.png')} style={styles.imgProfile}></Image>
                    <View style={styles.rowTextUser}>
                        <Text style={styles.textUser1}>Hi Twinkle</Text>
                        <Text style={styles.textUser2}>Have agrate day a head</Text>
                    </View>
                </View>
            </View>
            <SafeAreaView style={styles.input}>
                <Image source={require('./img/search.png')} style={styles.imgSearch} resizeMode='contain'></Image>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangText}
                    value={text}
                    placeholder='Search'
                >
                </TextInput>
            </SafeAreaView>
            <SafeAreaView style={styles.viewCheckList}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <Item
                            listName={item.listName}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
            <Pressable style={styles.buttonAdd}>
                <Image source={require('./img/plus.png')} style={styles.imgPlus} resizeMode='contain'></Image>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
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
    imgSearch: {
        width: "10%",
        height: 26
    },
    input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(144, 149, 160, 1)',
        width: '85%',
        height: 42,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textInput: {
        width: '80%',
        height: '100%',
    },
    imgButton: {
        width: 24,
        height: 24
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 44,
        borderRadius: 20,
        backgroundColor: 'rgba(222, 225, 230, 0.47)',
        width: '80%',
        alignSelf: 'center',
        height: 50,
        marginBottom: 10
    },
    viewCheckList: {
        width: '100%',
    },
    textButton: {
        width: '60%',
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonAdd: {
        backgroundColor: 'rgba(0, 189, 214, 1)',
        width: '22%',
        height: '12%',
        borderRadius: '100%'
    },
    imgPlus: {
        width: 32,
        height: 32,
        alignSelf: 'center',
        marginTop: 20
    }
});