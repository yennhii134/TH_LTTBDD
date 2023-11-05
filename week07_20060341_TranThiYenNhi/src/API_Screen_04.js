import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function API_Screen_04({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../img/left-chevron.png')} style={styles.imgHeader} resizeMode='contain'></Image>
        <Text style={styles.textHeader}>Your orders</Text>
        <Image source={require('../img/search.png')} style={styles.imgHeader} resizeMode='contain'></Image>
      </View>
      <View style={styles.body}>
        <View style={styles.invoice1}>
          <View style={styles.rowName}>
            <Text style={styles.name}>CAFE DELIVERY</Text>
            <Text style={styles.name}>Order #18 </Text>
          </View>
          <Text style={styles.name}>$5</Text>
        </View>
        <View style={styles.invoice2}>
          <View style={styles.rowName}>
            <Text style={styles.name}>CAFE</Text>
            <Text style={styles.name}>Order #18 </Text>
          </View>
          <Text style={styles.name}>$25</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.imgItem} source={require('../img/salt.png')} resizeMode='contain'></Image>
          <View style={styles.viewNAP}>
            <Text style={styles.itemName}>Salt</Text>
            <Text style={styles.price}>$5</Text>
          </View>
          <View style={styles.viewQuantity}>
            <Image style={styles.imgHeader} source={require('../img/Image 231.png')} resizeMode='contain'></Image>
            <Image style={styles.imgHeader} source={require('../img/Image 230.png')} resizeMode='contain'></Image>
          </View>
        </View>
        <View style={styles.item}>
          <Image style={styles.imgItem} source={require('../img/milk.png')} resizeMode='contain'></Image>
          <View style={styles.viewNAP}>
            <Text style={styles.itemName}>Milk</Text>
            <Text style={styles.price}>$20</Text>
          </View>
          <View style={styles.viewQuantity}>
            <Image style={styles.imgHeader} source={require('../img/Image 231.png')} resizeMode='contain'></Image>
            <Image style={styles.imgHeader} source={require('../img/Image 230.png')} resizeMode='contain'></Image>
          </View>
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.text1}>PAY NOW</Text>
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
    width: '80%'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '60%'
  },
  imgHeader: {
    height: 24,
    width: 24
  },
  body:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '80%',
    width: '100%'
  },
  invoice1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 189, 214, 1)',
    width: '90%',
    height: '18%',
    borderRadius: 10,
    marginBottom: 5
  },
  invoice2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(131, 83, 226, 1)',
    width: '90%',
    height: '18%',
    borderRadius: 10,
    marginBottom: 5
  },
  rowName: {
    height: '70%',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600'
  },
  item: {
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgba(188, 193, 202, 1)',
    marginBottom: 5
  },
  imgItem: {
    width: '20%',
    height: 60,
  },
  viewNAP: {
    width: '50%',
    justifyContent: 'space-between',
    paddingLeft: 10
  },
  itemName: {
    fontWeight: '500',
    fontSize: 16
  },
  price: {
    color: 'rgba(86, 94, 108, 1)'
  },
  viewQuantity: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10
  },
  button: {
    backgroundColor: 'rgba(239, 176, 52, 1)',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    color: 'white',
    fontSize: 18
  }
});
