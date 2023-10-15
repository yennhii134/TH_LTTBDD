import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ChooseColor({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewPhone}>
        <Image source={require('./img/vs_blue_1.png')} style={styles.imgPhone} resizeMode='contain'></Image>
        <View style={styles.viewText1}>
          <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 </Text>
          <Text style={styles.text1}>Hàng chính hãng</Text>
        </View>
      </View>
      <View style={styles.viewChooseColor}>
        <Text style={styles.text2}>Chọn một màu bên dưới:</Text>
        <View style={styles.viewBox}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </View>
        <button style={styles.buttonDone}>Xong</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  viewPhone: {
    flexDirection: 'row',
    flex: 3
  },
  imgPhone: {
    width: null,
    height: '100%',
  },
  text1: {
    fontSize: 18,
    fontWeight: '500'
  },
  viewChooseColor: {
    backgroundColor: '#C4C4C4',
    flex: 7
  },
  text2: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 15
  },
  viewBox:{
    alignSelf: 'center',
    marginTop: 10
  },
  box1:{
    width: 75,
    height: 75,
    backgroundColor: '#C5F1FB',
    marginBottom: 15,
  },
  box2:{
    width: 75,
    height: 75,
    backgroundColor: '#F30D0D',
    marginBottom: 15
  },
  box3:{
    width: 75,
    height: 75,
    backgroundColor: '#000000',
    marginBottom: 15
  },
  box4:{
    width: 75,
    height: 75,
    backgroundColor: '#234896',
    marginBottom: 15
  },
  buttonDone:{
    backgroundColor: 'rgba(25, 82, 226, 0.58)',
    color: 'white',
    borderRadius: 10,
    width: 350,
    alignSelf: 'center',
    height: 42,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
