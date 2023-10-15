import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewImgPhone}>
        <Image source={require('./img/vs_blue.png')} style={styles.imgPhone} />
        <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View style={styles.viewRate}>
        <Image source={require('./img/star.png')} style={styles.imgStar} />
        <Image source={require('./img/star.png')} style={styles.imgStar} />
        <Image source={require('./img/star.png')} style={styles.imgStar} />
        <Image source={require('./img/star.png')} style={styles.imgStar} />
        <Image source={require('./img/star.png')} style={styles.imgStar} />
        <Text style={styles.text2}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.viewPrice}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.priceHide}>1.790.000 đ</Text>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text3}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('./img/question.png')} style={styles.imgQuestion}></Image>
      </View>
      <View style={styles.viewButtonColor}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>4 MÀU-CHỌN MÀU</Text>
            <Image source={require('./img/right-arrow.png')} style={styles.buttonImg} />
          </View>
        </TouchableOpacity>
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
    marginLeft: 20,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  viewImgPhone:{
  },
  imgPhone: {
    width: 301,
    height: 361
  },
  text1:{
    fontWeight: '500',
    fontSize: 18,
    marginTop: 20
  },
  // ------------------
  viewRate: {
    flexDirection: 'row'
  },
  imgStar: {
    width: 32,
    height: 32,
    
  },
  text2:{
    marginLeft: 25,
    fontSize: 17,
    marginTop: 5,
    fontWeight: '500'
  },
  // --------------
  viewPrice: {
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22
  },
  priceHide: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    color: '#808080',
    fontWeight: 'bold',
    marginLeft: 50
  },
  viewText: {
    flexDirection: 'row',
  },
  text3: {
    color: '#FA0000',
    fontWeight: 'bold',
    fontSize: 14,
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
    marginBottom: 35
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    width: 350,
    height: 40,
    fontSize: 16,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonImg: {
    width: 26,
    height: 26,
    marginTop: 5,
    marginLeft: 25
  },
  buttonText: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 15
  },
  buttonBuy:{
    backgroundColor: 'rgba(238,10,10,255)',
    width: 350,
    height: 46,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    borderRadius: 10
  }
});
