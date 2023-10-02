import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput, SafeAreaView} from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [text, onChangeText] = useState('Email');

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('./img/lock.png')} style={styles.lock} />
      </View>
      <View style={styles.title}>
        <Text style={[styles.textTitle, {textAlign: 'center'}]}>FORGET</Text> {"\n"}
        <Text style={styles.textTitle}>PASSWORD </Text>
      </View>
      <View style={{marginTop: '40px'}}>
        
        <Text style={styles.textDescriptive}>Provide your account’s email for which you </Text>
        <Text style={[styles.textDescriptive,{textAlign: 'center'}]}>want to reset your password</Text>
      </View>
      <View style={styles.inputEmail}>
      <Image source={require('./img/mail.png')} style = {styles.mail} />
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
      </View>
      <View style={styles.buttonNext}>
      <button style={styles.button}>NEXT</button> 
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
    backgroundImage:'linear-gradient(#C7F4F6,#D1F4F6,#E5F4F5,#00CCF9)',

  },
  lock: {
    width: 100,
    height: 130,
  },
  title:{
    marginTop: '40px'
  },  
  textTitle:{
    fontSize: 28, 
    fontWeight: 'bold',
  },
  textDescriptive:{
    fontWeight:'bold', 
    fontSize: 15
  },
  inputEmail:{
    marginTop: '30px'
  },
  buttonNext:{
    flexDirection: 'row',
    marginTop: '20px'
  },
  button:{
    margin: '30px',
    backgroundColor: "#E3C000",
    height: '50px',
    width: '320px',
    fontWeight: 'bold',
    fontSize: '20px',
    borderWidth: 0,
  },
  inputEmail:{
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: '#C4C4C4',
    height: '50px',
    width: '320px',
    marginTop: '40px',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderWidth: 0,
    paddingVertical: 0,
    fontWeight: 'bold'
  },
  mail: {
    height: '32px',
    width: '32px',
    marginTop: '8px',
    marginLeft: '20px'
  }
});
