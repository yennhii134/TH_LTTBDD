import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.titleCode}>
        <Text style={styles.code}>CODE</Text>
      </View>
      <View style={styles.titleVerification}>
        <Text style={styles.verification}>VERIFICATION</Text>
      </View>
      <View styles={styles.titleDescription}>
        <Text style={styles.description}>Enter ontime password sent on</Text>
        <Text style={[styles.description, {textAlign: 'center'}]}>++849092605798</Text>
      </View>
      <View style={styles.inputCode}>
      <SafeAreaView style={styles.row}>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={setCode}
        value={code}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={setCode}
        value={code}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={setCode}
        value={code}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={setCode}
        value={code}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={setCode}
        value={code}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={setCode}
        value={code}
      />
    </SafeAreaView>
      </View>
      <View style={styles.buttonCode}>
      <button style={styles.button}>VERIFY CODE</button> 
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
    display: 'flex',
    backgroundImage:'linear-gradient(#C7F4F6,#D1F4F6,#E5F4F5,#00CCF9)',
  },
  code:{
    fontWeight: 'bold',
    fontSize: 60

  },
  titleVerification:{
    margin: '60px'
  },
  verification:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  description:{
    fontWeight: 'bold',
    fontSize: 16
  },
  inputCode:{
    flexDirection: 'row',
    marginTop: '60px'
  },
  row:{
    flexDirection: 'row',
    alignContent: 'center',

  },
  input:{
    borderWidth: 1,
    width: '55px',
    height: '55px'
  },
  button:{
    margin: '30px',
    backgroundColor: "#E3C000",
    height: '50px',
    width: '360px',
    fontWeight: 'bold',
    fontSize: '20px',
    borderWidth: 0,
  },
});
