import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaVie, FlatList, SafeAreaView } from 'react-native';

export default function List({navigation}) {
  const [imagePicker, setImagePicker] = useState('');
  const [titlePicker, setTitlePicker] = useState('');
  const [pricePicker, setPricePicker] = useState('');

  const DATA = [
    {
      id: 1,
      image: require('../img/item_first.png'),
      title: 'Pinarello',
      price: '1800'
    },
    {
      id: 2,
      image: require('../img/bione-removebg-preview.png'),
      title: 'Pina Mountai',
      price: '1700'
    },
    {
      id: 3,
      image: require('../img/bithree_removebg-preview.png'),
      title: 'Pina Bike',
      price: '1500'
    },
    {
      id: 4,
      image: require('../img/bitwo-removebg-preview.png'),
      title: 'Pinarello',
      price: '1900'
    },
    {
      id: 5,
      image: require('../img/bithree_removebg-preview.png'),
      title: 'Pinarello',
      price: '2700'
    },
    {
      id: 6,
      image: require('../img/bione-removebg-preview.png'),
      title: 'Pinarello',
      price: '1350'
    },
  ];

  const Item = ({ image, title, price }) => (
    <Pressable style={styles.itemList}
    onPress={()=>{
      navigation.navigate({
        name: 'Item', 
        params: {currentImage: image,currentTitle: title},
        merge: true,
      })
    }}>
      <Image source={image} style={styles.imgItem} resizeMode='contain'></Image>
      <Text style={styles.textName}>{title}</Text>
      <View style={styles.viewPrice}>
        <Text style={styles.text$}>$</Text>
        <Text style={styles.textPrice}>{price}</Text>
      </View>
    </Pressable>
  )
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>The world’s Best Bike</Text>
      </View>
      <View style={styles.viewButton}>
        <Pressable style={styles.button}>
          <Text style={styles.text2}>All</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text3}>Roadbike</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text3}>Mountain</Text>
        </Pressable>
      </View>
      <SafeAreaView style={styles.viewItem}>
        <FlatList
          data={DATA}
          renderItem={({ item }) =>
            <Item
              title={item.title}
              image={item.image}
              price={item.price} />
          }
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%'
  },
  header: {
    height: '5%'
  },
  text1: {
    fontSize: 24,
    color: 'rgba(233, 65, 65, 1)',
    fontWeight: 'bold'
  },
  viewButton: {
    flexDirection: 'row',
    width: '100%',
    height: '5%',
    justifyContent: 'space-around',
  },
  button: {
    width: '25%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderBlockColor: 'rgba(233, 65, 65, 0.53)',
    alignItems: 'center',
    justifyContent: 'center'

  },
  text2: {
    color: 'rgba(233, 65, 65, 1)',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },
  text3: {
    color: 'rgba(190, 182, 182, 1)',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center'
  },
  viewItem: {
    width: '100%',
    height: '90%'
  },
  itemList: {
    width: '45%',
    height: 165,
    backgroundColor: 'rgba(247, 186, 131, 0.15)',
    borderRadius: 20,
    margin: 9,
    alignItems: 'center'
  },
  imgItem: {
    width: '75%',
    height: '65%'
  },
  textName: {
    fontSize: 20,
    fontFamily: 'Voltaire',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  viewPrice:{
    flexDirection: 'row'
  },
  text$:{
    fontWeight: 'bold',
    fontSize: 18,
    color: 'rgba(247, 186, 131, 1)'
  },
  textPrice: {
    fontSize: 18,
    fontWeight: '500'
  }
});
