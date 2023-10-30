import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TextInput } from 'react-native';

export default function App() {
  const DATA = [
   {
      id: 1,
      image: require('./img/giacchuyen_1.png'),
    },
    {
      id: 2,
      image: require('./img/daynguon_1.png'),
    },
    {
      id: 3,
      image: require('./img/dauchuyendoipsps2_1.png'),
    },
    {
      id: 4,
      image: require('./img/dauchuyendoi_1.png'),
    },
    {
      id: 5,
      image: require('./img/carbusbtops2_1.png'),
    },
    {
      id: 6,
      image: require('./img/daucam_1.png'),
    },
  ];
  
  const Item = ({ image }) => (
    <View style={styles.viewItem}>
      <Image style={styles.imageItem} source={image}></Image>
      <Text style={styles.nameItem}>Cáp chuyển từ Cổng USB sang PS2...</Text>
      <View style={styles.rowStar}>
        <Image style={styles.imageStar} source={require('./img/star.png')} resizeMethod='contain'></Image>
        <Image style={styles.imageStar} source={require('./img/star.png')} resizeMethod='contain'></Image>
        <Image style={styles.imageStar} source={require('./img/star.png')} resizeMethod='contain'></Image>
        <Image style={styles.imageStar} source={require('./img/star.png')} resizeMethod='contain'></Image>
        <Image style={styles.imageStar} source={require('./img/star_1.png')} resizeMethod='contain'></Image>
        <Text style={styles.textRate}>(15)</Text>
      </View>
      <View style={styles.viewPrice}>
        <Text style={styles.price}>69.900 đ</Text>
        <Text style={styles.discount}>-39%</Text>
      </View>
    </View>
  );
  const [textFind, onChangeTextFind] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={require('./img/left-arrow.png')} style={styles.imgHeader}></Image>
        <SafeAreaView style={styles.viewSearch}>
          <Image source={require('./img/search.png')} style={styles.imgSearch}></Image>
          <TextInput
            style={styles.search}
            onChangeText={onChangeTextFind}
            value={textFind}
            placeholder='Dây cáp usb'>
          </TextInput>
        </SafeAreaView>
        <Image source={require('./img/shopping-cart.png')} style={styles.imgHeader}></Image>
        <Image source={require('./img/more.png')} style={styles.imgHeader}></Image>
      </View>
      <SafeAreaView style={styles.viewBody}>
        <FlatList
          data={DATA}
          renderItem={({ item }) =>
            <Item
              title={item.title}
              image={item.image}
              shopName={item.shopName} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </SafeAreaView>
      <View style={styles.viewFooter}>
        <Image source={require('./img/menu.png')} style={styles.imgFooter}></Image>
        <Image source={require('./img/hut.png')} style={styles.imgFooter}></Image>
        <Image source={require('./img/return-button.png')} style={styles.imgFooter}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewHeader: {
    backgroundColor: '#1BA9FF',
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imgHeader: {
    width: 32,
    height: 32
  },
  viewSearch: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 15
  },
  imgSearch: {
    width: 32,
    height: 32,
    marginRight: 15
  },
  // ---------------
  viewBody:{
  
  },
  viewItem:{
    width: '40%',
   marginHorizontal: 20,
   marginVertical: 10
  },
  nameItem:{
    marginLeft: 10
  },
  viewPrice:{
    flexDirection: 'row',
    
  },
  price:{
    fontWeight: 'bold',
    marginRight: 15,
    marginLeft: 10
  },
  discount:{
    color: 'rgba(150, 157, 170, 1)',
  },
  imageItem: {
    width: '100%',
    height: 100,
  },
  rowStar: {
    flexDirection: 'row',
    marginLeft: 10
  },
  imageStar: {
    width: 18,
    height: 18,
  },
  viewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    width: '100%',
    height: '6%',
    paddingHorizontal: 20,
    paddingVertical: 5  
  },

  imgFooter: {
    width: 32,
    height: 32
  }
});
