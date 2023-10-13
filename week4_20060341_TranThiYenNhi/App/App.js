import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView, CheckBox, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textMaGiamGia, onChangeTextMaGiamGia] = useState('');

  const handleDatHang = () => {
    alert('Đặt hàng thành công')
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewBook}>
        <View style={styles.bookCol}>
          <View style={styles.book}>
            <Image source={require('./img/book.jpg')} style={styles.imgBook} />
          </View>
        </View>
        <View style={styles.bookCol}>
          <Text style={styles.textBook1}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.textBook1}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>141.800 đ</Text>
          <Text style={styles.priceHide}>141.800 đ</Text>
          <View style={styles.rowQuantity}>
            <View style={styles.colQuantity}>
              <Image source={require('./img/minus.png')} style={styles.imgQuantity} />
              <Text style={styles.textQuantity}>1</Text>
              <Image source={require('./img/plus.png')} style={styles.imgQuantity} />
            </View>
            <View style={styles.colQuantity}>
              <Text style={styles.textMuaSau}>Mua sau</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewBook}>
        <Text style={styles.textBook2}>Mã giảm giá đã lưu</Text>
        <Text style={styles.textBook3}>Xem tại đây  </Text>
      </View>
      <View style={styles.viewBook}>
        <SafeAreaView style={styles.viewMaGiamGia}>
          <View style={styles.boxYellow}></View>
          <TextInput
            style={styles.inputMaGiamGia}
            onChangeText={onChangeTextMaGiamGia}
            value={textMaGiamGia}
            placeholder='Mã giảm giá'
          />
        </SafeAreaView>
        <View style={styles.viewApDung}>
          <button style={styles.btnApDung}>Áp dụng</button>
        </View>
      </View>
      <View style={styles.viewGray1}></View>
      <View style={styles.viewBook}>
        <Text style={styles.text1}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={styles.text2}>Nhập tại đây?</Text>
      </View>
      <View style={styles.viewGray1}></View>
      <View style={styles.viewBook2}>
        <Text style={styles.text3}>Tạm tính</Text>
        <Text style={styles.text4}>141.800 đ</Text>
      </View>
      <View style={styles.viewGray2}></View>
      <View style={styles.viewBook2}>
        <Text style={styles.text5}>Thành tiền</Text>
        <Text style={styles.text4}>141.800 đ</Text>
      </View>
      <View style={styles.viewDatHang}>
          <button onClick={handleDatHang} style={styles.btnDatHang}>TIẾN HÀNH ĐẶT HÀNG</button>
        </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    margin: 10,
    justifyContent: 'space-evenly',

  },
  viewBook: {
    flexDirection: 'row',

  },
  bookCol: {
    justifyContent: 'space-between',

  },
  imgBook: {
    width: 135,
    height: 157
  },
  textBook1: {
    fontWeight: 'bold',
    fontSize: 16
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red'
  },
  priceHide: {
    fontWeight: 'bold',
    color: '#808080',
    textDecorationLine: 'line-through'
  },
  rowQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colQuantity: {
    flexDirection: 'row',
  },
  imgQuantity: {
    height: 24,
    width: 24,
    marginRight: 10
  },
  textQuantity: {
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  textMuaSau: {
    color: '#134FEC',
    fontWeight: 'bold',
    fontSize: 16
  },
  // -----------------
  textBook2: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 15
  },
  textBook3: {
    fontWeight: 'bold',
    color: '#134FEC',
    fontSize: 16,
    margin: 15
  },
  // -----------------
  viewMaGiamGia: {
    flexDirection: 'row',
    borderWidth: 1.5,
    width: '65%'
  },
  boxYellow: {
    backgroundColor: '#F2DD1B',
    width: 46,
    height: 32,
    margin: 15,
  },
  inputMaGiamGia: {
    fontWeight: 'bold',
    fontSize: 20
  },
  viewApDung: {

  },
  btnApDung: {
    backgroundColor: '#0A5EB7',
    color: 'white',
    width: 105,
    height: 63,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  // ----------------
  viewGray1:{
    height: 15,
   backgroundColor: '#C4C4C4'
  },
  // -------------------
  text1:{
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
    marginLeft: 15
  },
  text2:{
    fontWeight: 'bold',
    color: '#134FEC'
  },
  // ---------------
  viewBook2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15
  },
  text3:{
    fontWeight: 'bold',
    fontSize: 22
  },
  text4:{
    fontWeight: 'bold',
    color: '#EE0D0D',
    fontSize: 22
  },
  // --------------
  viewGray2:{
    backgroundColor: '#C4C4C4',
    height: 95
  },
  text5:{
    fontWeight: 'bold',
    fontSize: 22,
    color: '#808080'
  },
  // -------------
  viewBtnDatHang:{
    
  },
  btnDatHang:{
    backgroundColor: '#E53935',
    color: 'white',
    height: 50,
    fontSize: 25,
    fontWeight: 'bold'
  }
});
