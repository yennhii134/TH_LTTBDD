import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ChooseColor({ navigation }) {
  const [pickColor, setPickColor] = useState('blue');
  const[color, setColor] = useState('xanh');
  return (
    <View style={styles.container}>
      <View style={styles.viewPhone}>
        <View style={styles.img}>
          <Image source={require('../img/vs_' + pickColor + '.png')} style={{ width: null, height: '100%' }} resizeMode='contain'></Image>
        </View>
        <View style={styles.viewText1}>
          <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 </Text>
          <Text style={styles.text1}>Hàng chính hãng</Text>
          <Text style={styles.text1}>Màu: <Text style={styles.text1}>{color}</Text> </Text>
          <Text style={styles.text1}>Cung cấp bởi: <Text style={styles.text1}>TiKi Tradding</Text></Text>
          <Text style={styles.text1}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.viewChooseColor}>
        <Text style={styles.text2}>Chọn một màu bên dưới:</Text>
        <View style={styles.viewBox}>
          <Pressable style={[styles.box, styles.silver]} onPress={() => ([setPickColor('silver'), setColor("Xanh nhạt")])}></Pressable>
          <Pressable style={[styles.box, styles.red]} onPress={() => ([setPickColor('red'), setColor("Đỏ")])}></Pressable>
          <Pressable style={[styles.box, styles.black]} onPress={() => ([setPickColor('black'), setColor("Đen")])}></Pressable>
          <Pressable style={[styles.box, styles.blue]} onPress={() => ([setPickColor('blue'), setColor("Xanh đậm")])}></Pressable>

        </View>
        <Pressable style={styles.buttonDone}
           onPress={() => {
            navigation.navigate({
                name: 'Home', params: { colorPhone: pickColor },
                merge: true,
            })
        }}
    >
          <Text style={styles.text3}>XONG</Text>
        </Pressable>
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
  },
  viewPhone: {
    flexDirection: 'row',
    flex: 3
  },
  img: {
    width: '40%',
    height: '100%',
  },
  text1: {
    fontSize: 18,
    fontWeight: '500'
  },
  // -------------
  viewChooseColor: {
    backgroundColor: '#C4C4C4',
    flex: 7
  },
  text2: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 15
  },
  viewBox: {
    alignSelf: 'center',
    marginTop: 10,
  },
  box: {
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  silver:{
    backgroundColor: '#C5F1FB',
  },
  red: {
    backgroundColor: '#F30D0D',
  },
  black: {
    backgroundColor: '#000000',
  },
  blue: {
    backgroundColor: '#234896',
  },
  buttonDone: {
    backgroundColor: 'rgba(25, 82, 226, 0.58)',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    height: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  text3:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '500',

  }
});
