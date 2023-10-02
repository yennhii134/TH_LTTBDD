import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity , Image, TextInput, SafeAreaView} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textEmail, onChangeTextEmail] = useState('Email');
  const [textPassword, onChangeTextPassword] = useState('Password');

  return (
    <View style={styles.container}>
      <View style={styles.titleLogin}>
          <Text style={styles.login}>LOGIN</Text>
      </View>
      <View style={styles.inputView}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextEmail}
            value={textEmail}
          />
          
        </SafeAreaView>  
      </View>
      <View style={styles.inputView}>
        <SafeAreaView style={styles.row}> 
          <TextInput
              style={styles.input}
              onChangeText={onChangeTextPassword}
              value={textPassword}
            />
            <Image source={require('./img/eye.png')} style = {styles.eye} />
        </SafeAreaView>
      </View>
      <View style={styles.buttonLogin}>
        <button style={styles.button}>LOGIN</button> 
      </View>
      <View style={styles.text}>
        <Text style={styles.text1}>When you agree to terms and conditions</Text>
        <View style={styles.centerText}>
          <Text style={styles.text2}>For got your password?</Text>
          <Text style={styles.text3}>Or login with</Text>
        </View>
      </View>
      <View style={styles.buttonSocialNetwork}>
        <TouchableOpacity style={styles.buttonFacebook}>
          <Image source={require('./img/facebook.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonZalo}>
          <Image source={require('./img/zalo.png')} style={styles.buttonImage} />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.buttonGoogle}>
        <Image source={require('./img/search.png')} style={styles.buttonImage} />
        </TouchableOpacity>
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
    backgroundColor:'rgba(49, 170, 82, 0.19)'
  },
  login:{
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputView:{
    flexDirection: 'row',
    alignContent: 'center',
    height: '60px',
    width: '320px',
    marginTop: '40px',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
  },
  
  input: {
    margin: 15,
    borderWidth: 0,
    paddingVertical: 0,
    fontWeight: '600',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  eye:{
    height: '32px',
    width:'32px',
    marginLeft: '10px'
  },
  buttonLogin:{
    marginTop: '20px'
  },
  button:{
    margin: '30px',
    backgroundColor: '#E53935',
    color: '#FFFFFF',
    height: '50px',
    width: '320px',
    fontWeight: 'bold',
    fontSize: '20px',
    borderWidth: 0,
  },
  text:{
    alignItems: 'center'
  },
  text1:{
    fontWeight: '600',
    fontSize: 16, 
  },
  centerText:{
    alignItems:'center'
  },
  text2:{
    color: '#5D25FA',
    fontWeight: '600',
    fontSize: 16,
    alignContent: 'center',
    margin: '20px'
  },
  text3:{
    fontWeight: '600',
    fontSize: 16,
  },
  buttonSocialNetwork:{
    flexDirection: 'row',
    height: '55px',
    marginTop: '20px'
  },
  buttonFacebook:{
    width: '120px',
    backgroundColor: '#25479B',
  },
  buttonImage:{
    width: '32px',
    height: '32px',
    marginTop: '10px',
    marginLeft: '45px'
  },
  buttonZalo:{
    width: '120px',
    backgroundColor: '#0F8EE0'
  },
  buttonGoogle:{
    width: '120px',
    borderBlockColor: '#0680F1',
    borderWidth: 1
  }
});
