import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textName, onChangeTextName] = useState('Name');
  const [textPassword, onChangeTextPassword] = useState('Password');

  return (
    <View style={styles.container}>
     < View style={styles.titleLogin}>
        <Text style={styles.login}>LOGIN</Text>
      </View>
      <View style={styles.inputAll}>
        <View style={styles.inputView}>
          <SafeAreaView style={styles.row}> 
          <Image source={require('./img/user.png')} style = {styles.img} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeTextName}
              value={textName}
            />
          </SafeAreaView> 
        </View>
        <View style={styles.inputView}>
          <SafeAreaView  style={styles.row}>
          <Image source={require('./img/lock.png')} style = {styles.img} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeTextPassword}
              value={textPassword}
            />
            <Image source={require('./img/eye.png')} style = {styles.img} />
          </SafeAreaView> 
        </View>
      </View>
      <View style={styles.buttonLogin}>
        <button style={styles.button}>LOGIN</button> 
        <Text style={styles.textBottom}>CREATE ACCOUNT</Text>
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
    backgroundImage:'linear-gradient(#FBCB00,#BF9A00)',
  },
  titleLogin:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '40px',
    marginTop: '20px'
  },
  login:{
    fontWeight: 'bold',
    fontSize: 32,
    
  },
  inputAll:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px'
  },
  inputView:{
    flexDirection: 'row',
    alignContent: 'center',
    height: '65px',
    width: '350px',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    marginTop: '20px',
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  input: {
    marginLeft: '12px',
    borderWidth: 0,
    paddingVertical: 0,
    fontWeight: '600',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  img:{
    width: '34px',
    height: '34px'
  },
  buttonLogin:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px'
  },
  button:{
    backgroundColor: 'black',
    color: '#FFFFFF',
    height: '50px',
    width: '350px',
    fontWeight: 'bold',
    fontSize: '20px',
    borderWidth: 0,
  },
  
  textBottom:{
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: '40px'
  },
  bottom:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});
