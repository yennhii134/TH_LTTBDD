import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function API_Screen_03({ navigation }) {
  const [data, setData] = useState([]);
  const [dataAddCart, setDataAddCart] = useState([]);

  useEffect(() => {
    fetch("https://65460236fe036a2fa95511bd.mockapi.io/drinks")
      .then((respone) => respone.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  

  const handleChoose = (x) => {
    setDataAddCart(prevData => [...prevData, x]);
  
  }

  useEffect(() => {
    console.log(dataAddCart);
  }, [dataAddCart]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Pressable onPress={() => {navigation.navigate('API_Screen_03')}}>
          <Image source={require('../img/left-chevron.png')} style={styles.imgHeader} resizeMode='contain'></Image>
        </Pressable>
        <Text style={styles.textHeader}>Drinks</Text>
        <Image source={require('../img/search.png')} style={styles.imgHeader} resizeMode='contain'></Image>
      </View>
      {
        data.map((item) => {
          return (
            <Pressable style={styles.body} key={item.id} onPress={() => handleChoose(item)}>
                <Image style={styles.imgItem} source={{ uri: item.image }} resizeMode='contain'></Image>
                <View style={styles.viewNAP}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                <View style={styles.viewQuantity}>
                  <Image style={styles.imgHeader} source={require('../img/Image 231.png')} resizeMode='contain'></Image>
                  <Image style={styles.imgHeader} source={require('../img/Image 230.png')} resizeMode='contain'></Image>
                </View>
            </Pressable>
          )
        })
      }
      <Pressable style={styles.button}
        onPress={
          () => { navigation.navigate("API_Screen_04", { dataAddCart: dataAddCart }) }}
          >
        <Text style={styles.text1}>GO TO CART</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  imgItem: {
    width: '20%',
    height: 60,
  },
  body: {
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgba(188, 193, 202, 1)',
  },
  viewNAP: {
    width: '50%',
    justifyContent: 'space-between',
    paddingLeft: 10
  },
  name: {
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
