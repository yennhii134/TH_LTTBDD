import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const name = 'nhi'
  const password = '123456'
  const [textName, onChangeTextName] = useState('');
  const [textPassword, onChangeTextPassword] = useState('');
  const handleLogin = () => {
    if (textName === name && textPassword === password)
      alert("Đăng nhập thành công");
    else 
      alert("Kiểm tra lại name hoặc password")
  }
  return (
    <View style={styles.container}>
      < View style={styles.titleLogin}>
        <Text style={styles.login}>LOGIN</Text>
      </View>
      <View style={styles.inputAll}>
        <View style={styles.inputView}>
          <SafeAreaView style={styles.row}>
            <Image source={require('./img/user.png')} style={styles.img} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeTextName}
              value={textName}
              placeholder='Name'
            />
          </SafeAreaView>
        </View>
        <View style={styles.inputView}>
          <SafeAreaView style={styles.row}>
            <Image source={require('./img/lock.png')} style={styles.img} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeTextPassword}
              value={textPassword}
              placeholder='Password'
            />
            <Image source={require('./img/eye.png')} style={styles.img} />
          </SafeAreaView>
        </View>
      </View>
      <View style={styles.buttonLogin}>
        <button onClick={handleLogin} style={styles.button}>LOGIN</button>
        <Text style={styles.textBottom}>Forgot your password?</Text>
      </View>
      <View style={styles.bottom}></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundImage: 'linear-gradient(#FBCB00,#BF9A00)',
  },
  titleLogin: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 40,
    marginTop: 20
  },
  login: {
    fontWeight: 'bold',
    fontSize: 32,

  },
  inputAll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  inputView: {
    flexDirection: 'row',
    alignContent: 'center',
    height: 65,
    width: 350,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  input: {
    marginLeft: 12,
    borderWidth: 0,
    paddingVertical: 0,
    fontWeight: 600,
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 34,
    height: 34
  },
  buttonLogin:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  button:{
    backgroundColor: 'black',
    color: '#FFFFFF',
    height: 50,
    width: 350,
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 0,
  },
  textBottom:{
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 40
  },
  bottom:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
