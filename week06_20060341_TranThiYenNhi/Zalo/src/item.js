import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaVie, FlatList, SafeAreaView } from 'react-native';

export default function Item({route}) {
    var currentImage = route.params?.currentImage;
    var currentTitle = route.params?.currentTitle;
    var currentPrice = route.params?.currentPrice;
  return (
    <View style={styles.container}>
     <View style={styles.viewImgItem}>
      <Image source={currentImage} style={styles.imgItem} resizeMode='contain'></Image>
     </View>
     <View style={styles.viewText}>
      <Text style={styles.textTitle}>{currentTitle}</Text>
      <View style={styles.viewPrice}>
        <Text style={styles.price1}>15% OFF I 350$</Text>
        <Text style={styles.price2}>449$</Text>
      </View>
     </View>
     <View style={styles.viewDescription}>
      <Text style={styles.text1}>Description</Text>
      <Text style={styles.text2}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
     </View>
     <View style={styles.viewButton}>
      <Pressable style={styles.button}>
        <Text style={styles.textButotn}>Add to card</Text>
      </Pressable>
     </View>
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
  viewImgItem:{
    width: '95%',
    height: '50%',
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
  },
  imgItem:{
    width: '100%',
    height: '100%'
  },
  viewText:{
    width: '80%',
  },
  textTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Voltaire',
  },
  viewPrice:{
    flexDirection: 'row',
    
  },
  price1:{
    fontFamily: 'Voltaire',
    color: 'rgba(0, 0, 0, 0.59)',
    fontSize: 24,
    marginRight: 30
  },
  price2:{
    fontFamily: 'Voltaire',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 24,
    fontWeight: '500',
    textDecorationLine: 'line-through'
  },
  viewDescription:{
    width: '80%',
    justifyContent: 'center'
  },
  text1:{
    fontFamily: 'Voltaire',
    fontSize: 22,
    fontWeight: '600'
  },
  text2:{
    color: 'rgba(0, 0, 0, 0.57)',
    fontFamily: 'Voltaire',
    fontSize: 22,
  },
  viewButton:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    height: '7%'
  },
  button:{
    backgroundColor: 'rgba(233, 65, 65, 1)',
    width: '60%',
   borderRadius: 20,
   alignItems :'center',
   justifyContent: 'center'
  },
  textButotn:{
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Voltaire'
  }
});
