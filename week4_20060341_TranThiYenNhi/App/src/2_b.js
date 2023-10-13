import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textDescription, onChangeText] = useState('');
  const handleSubmit = () => {
    alert(textDescription)
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewProduct}>
        <Image source={require('./img/usb.png')} style={styles.imgUSB} />
        <Text style={styles.textProduct}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <View style={styles.viewTextRate}>
        <Text style={styles.textRate}>Cực kỳ hài lòng</Text>
      </View>
      <View style={styles.viewRate}>
        <Image source={require('./img/star.png')} style={styles.imgStart} />
        <Image source={require('./img/star.png')} style={styles.imgStart} />
        <Image source={require('./img/star.png')} style={styles.imgStart} />
        <Image source={require('./img/star.png')} style={styles.imgStart} />
        <Image source={require('./img/star.png')} style={styles.imgStart} />
      </View>
      <View style={styles.viewInputImage}>
        <Image source={require('./img/camera.png')} style={styles.imgCamera} />
        <Text style={styles.textInputImage}>Thêm hình ảnh</Text>
      </View>
      <SafeAreaView style={styles.inputDescription}>
        <TextInput
          style={styles.textDesrciption}
          onChangeText={onChangeText}
          value={textDescription}
          placeholder='Hãy chia sẽ những điều bạn thích về sản phẩm'
          multiline={true}
          numberOfLines={4}
        />
      </SafeAreaView>
      <View style={styles.viewButton}>
        <button onClick={handleSubmit} style={styles.button}>Gửi</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  viewProduct: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgUSB: {
    height: 80,
    width: 80,
    marginLeft: 20
  },
  textProduct: {
    marginLeft: 20,
    fontWeight: 700,
    fontSize: 16
  },
  viewTextRate: {
    alignItems: 'center',
    marginTop: 40
  },
  textRate: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20
  },
  viewRate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  imgStart: {
    height: 36,
    width: 36,
    margin: 8
  },
  viewInputImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderBlockColor: '#1511EB',
    width: 280,
    height: 80
  },
  textInputImage: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: '10px'
  },
  imgCamera: {
    height: 42,
    width: 42,
    margin: 10
  },
  inputDescription: {
    width: 280,
    height: 230,
    borderWidth: 1,
    borderBlockColor: '#C4C4C4',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  textDesrciption: {
    color: '#C4C4C4',
    margin: 15,
    fontSize: 16,
    fontWeight: '600',
  },
  linkMeet: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    margin: 8,
    fontSize: 12
  },
  viewButton: {
    margin: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0D5DB6',
    padding: 10,
    width: 280,
    borderRadius: 5,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    height: 45
  },

});
