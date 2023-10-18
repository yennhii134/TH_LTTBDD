import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import screen2 from './screen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation, route }) {
  var colorPhone = route.params?.colorPhone || "blue";

  return (
    <View style={styles.container}>
      <View style={styles.viewImgPhone}>
        <Image source={require('../img/vs_'+colorPhone+'.png')} style={styles.imgPhone} />
        <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View style={styles.viewRate}>
        <Image source={require('../img/star.png')} style={styles.imgStar} />
        <Image source={require('../img/star.png')} style={styles.imgStar} />
        <Image source={require('../img/star.png')} style={styles.imgStar} />
        <Image source={require('../img/star.png')} style={styles.imgStar} />
        <Image source={require('../img/star.png')} style={styles.imgStar} />
        <Text style={styles.text2}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.viewPrice}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.priceHide}>1.790.000 đ</Text>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text3}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('../img/question.png')} style={styles.imgQuestion}></Image>
      </View>
      <View style={styles.viewButtonColor}>
        <Pressable style={styles.buttonContent}
          onPress={
            () => { navigation.navigate("ChooseColor") }
          }>
          <Text style={styles.buttonText}>4 MÀU-CHỌN MÀU</Text>
        </Pressable>
      </View>
      <View style={styles.viewButtonBuy}>
        <button style={styles.buttonBuy}>CHỌN MUA</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    padding: 15,
    // justifyContent: 'center',
  },
  viewImgPhone: {
   marginBottom: 10
  },
  imgPhone: {
    width: '85%',
    height: 320,
    alignSelf: 'center'
  },
  text1: {
    fontWeight: '500',
    fontSize: 16,
    marginTop: 20
  },
  // ------------------
  viewRate: {
    flexDirection: 'row',
    marginBottom: 10
  },
  imgStar: {
    width: 30,
    height: 30,

  },
  text2: {
    marginLeft: 25,
    fontSize: 15,
    marginTop: 5,
    fontWeight: '500'
  },
  // --------------
  viewPrice: {
    flexDirection: 'row',
    marginBottom: 10
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20
  },
  priceHide: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: '#808080',
    fontWeight: 'bold',
    marginLeft: 50
  },
  viewText: {
    flexDirection: 'row',
    marginBottom: 10
  },
  text3: {
    color: '#FA0000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  imgQuestion: {
    width: 26,
    height: 26,
    marginLeft: 20
  },
  viewButtonColor: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  buttonContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10
  },
  buttonImg: {
    width: 26,
    height: 26,
    marginTop: 5,
    marginLeft: 25
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500'
  },
  buttonBuy: {
    backgroundColor: 'rgba(238,10,10,255)',
    width: '100%',
    height: 46,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    borderRadius: 10
  }
});
