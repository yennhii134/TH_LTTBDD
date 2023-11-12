import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function DetailPortrait({navigation, route}) {
  const { itemDonut } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: itemDonut.image }} style={styles.imgDonut} resizeMode='contain'></Image>
      <View style={styles.viewName}>
        <Text style={styles.textName}>{itemDonut.name}</Text>
        <View style={styles.row}>
          <Text style={styles.textDetail}>{itemDonut.detail}</Text>
          <Text style={styles.textPrice}>{itemDonut.price}</Text>
        </View>
      </View>
      <View style={styles.viewDelivery}>
        <View style={styles.viewText1}>
          <Image source={require('../img/Vector.png')} style={styles.imgVector} resizeMode='contain'></Image>
          <Text style={styles.text1}>Delivery in</Text>
        </View>
        <View style={styles.viewText2}>
          <Text style={styles.text2}>30 min</Text>
          <View style={styles.viewCount}>
            <Image source={require('../img/Group16.png')} style={styles.imgCount} resizeMode='contain'></Image>
            <Text style={styles.text2}>1</Text>
            <Image source={require('../img/Group15.png')} style={styles.imgCount} resizeMode='contain'></Image>
          </View>
        </View>
      </View>
      <View style={styles.viewInfo}>
        <Text style={styles.text2}>Restaurants info</Text>
        <Text style={styles.text1}>
            Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Add to cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  imgDonut:{
    width: '80%',
    height: '50%',
  },
  imgVector:{
    width: 20,
    height: 20
  },
  imgCount:{
    width: 21,
    height: 21
  },
  viewName:{
    width: '90%'
  },
  textName:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5
  },
  textDetail:{
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 15
  },
  textPrice:{
    fontWeight: 'bold',
    fontSize: 20
  },
  viewDelivery:{
    width: '90%',
  },
  viewText1:{
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between'
  },
  text1:{
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 'bold'
  },
  viewText2:{
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    paddingLeft: 10

  },
  viewCount:{
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text2:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewInfo:{
    width: '95%'
  },
  button: {
    backgroundColor: 'rgba(241, 176, 0, 1)',
    width: '90%',
    height: 56,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
