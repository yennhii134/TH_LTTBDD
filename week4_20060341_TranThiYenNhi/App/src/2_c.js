import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, CheckBox } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textPassword, onChangeTextPassword] = useState('');
  const [textPwLength, onChangeTextPwLength] = useState('');
  const [isSelectedLower, setSelectionLower] = useState('');
  const [isSelectedUpCase, setSelectionUpCase] = useState('');
  const [isSelectedNumber, setSelectionNumber] = useState('');
  const [isSelectedSymbol, setSelectionSymbol] = useState('');

  const handleLowerSelection = () => {
    setSelectionLower(true);
    setSelectionUpCase(false);
  };
  
  const handleUpCaseSelection = () => {
    setSelectionLower(false);
    setSelectionUpCase(true); 
  };
  const handlePassword = () => {
    const pwLength = parseInt(textPwLength, 10);
    if (!isNaN(pwLength)) {
      let characters = '';
  
      if (isSelectedLower) characters += 'abcdefghijklmnopqrstuvwxyz';
      if (isSelectedUpCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (isSelectedNumber) characters += '0123456789';
      if (isSelectedSymbol) characters += '!@#$%^&*()';
      let result = '';
  
      for (let i = 0; i < pwLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
      }
      onChangeTextPassword(result);
      ;
    } else {
      alert("Vui lòng nhập chiều dài mật khẩu hợp lệ.");
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.containerIn}>
        <View style={styles.viewTittle}>
          <Text style={styles.textTittle}>PASSWORD</Text>
          <Text style={styles.textTittle}>GENERATOR</Text>
        </View>
        <View>
          <SafeAreaView style={styles.viewInputPassword}>
            <TextInput
              style={styles.inputPassword}
              onChangeText={onChangeTextPassword}
              value={textPassword}
            />
          </SafeAreaView>
        </View>
        <View style={styles.view}>
          <SafeAreaView style={styles.viewCB}>
            <Text style={styles.textCheckBox}>Password Length</Text>
            <TextInput
              style={styles.inputPwLength}
              onChangeText={onChangeTextPwLength}
              value={textPwLength}
            />
          </SafeAreaView>
          <View style={styles.viewCB}>
            <Text style={styles.textCheckBox}>Include lower case letters</Text>
            <CheckBox
              value={isSelectedLower}
              onValueChange={handleLowerSelection}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.viewCB}>
            <Text style={styles.textCheckBox}>Include upcase letters</Text>
            <CheckBox
              value={isSelectedUpCase}
              onValueChange={handleUpCaseSelection}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.viewCB}>
            <Text style={styles.textCheckBox}>Include number</Text>
            <CheckBox
              value={isSelectedNumber}
              onValueChange={setSelectionNumber}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.viewCB}>
            <Text style={styles.textCheckBox}>Include special symbol</Text>
            <CheckBox
              value={isSelectedSymbol}
              onValueChange={setSelectionSymbol}
              style={styles.checkbox}
            />
          </View>
        </View>
        <View style={styles.viewButton}>
          <button onClick={handlePassword} style={styles.button}>GENERATE PASSWORD </button>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(157,157,203)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerIn: {
    backgroundColor: '#23235B',
    width: 350,
    height: 620,
    borderRadius: 15,
    justifyContent: 'space-around'
  },
  viewTittle: {
    alignItems: 'center'
  },
  textTittle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold'
  },
  // --------------------------
  viewInputPassword: {
    alignItems: 'center'
  },
  inputPassword: {
    height: 55,
    width: 310,
    backgroundColor: '#151537',
    fontSize: 18,
    color: 'white'
  },
  // ---------------------------
  view: {

  },
  viewCB: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputPwLength: {
    flex: 1,
    height: 35,
    width: 118,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    fontSize: 20
  },
  textCheckBox: {
    flex: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
    margin: 10
  },
  checkbox: {
    flex: 1,
    height: 25,
    width: 25,
    marginRight: 10
  },
  // -------------
  viewButton: {
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3B3B98',
    padding: 10,
    width: 300,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  },
});
