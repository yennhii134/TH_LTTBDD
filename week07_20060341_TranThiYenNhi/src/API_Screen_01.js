import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';

export default function API_Screen_01({ navigation}) {

  return (
    <View style={styles.container}>
        <Text style={styles.text1}>Welcome to Cafe world</Text>
        <Image source={require('../img/Image.png')} style={styles.img}></Image>
        <Image source={require('../img/Image (1).png')} style={styles.img}></Image>
        <Image source={require('../img/Image(4).png')} style={styles.img}></Image>
        <Pressable style={styles.button}
            onPress={
                () => {navigation.navigate("API_Screen_02")}
            }>
          <Text style={styles.text2}>GET STARTED</Text>
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
  img:{
    width: '50%',
    height: 100,
    borderRadius: 10
  },
  text1:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  button:{
    backgroundColor: 'rgba(0, 189, 214, 1)',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text2:{
    color: 'white'
  }
});
