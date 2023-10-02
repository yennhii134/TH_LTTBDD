import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dot}></Text>
      <View>
        <Text style={[styles.textTitle, {textAlign: 'center'}]}>GROW</Text> {"\n"}
        <Text style={styles.textTitle}>YOUR BUSINESS</Text>
      </View>
      <View style={{marginTop: '40px'}}>
      <Text style={styles.textDescriptive}>We will help you to grow your business using </Text>
      <Text style={[styles.textDescriptive,{textAlign: 'center'}]}>online server</Text>
      </View>
      <View style={styles.buttonContainer}>
      <button style={styles.button}>LOGIN</button> 
      <button style={styles.button}>SIGN UP</button>
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
    backgroundColor: '#00CCF9',
  },
  dot:{
    marginBottom: '30px',
    height: '160px',
    width: '160px',
    borderColor: 'black',
    borderRadius: '50%',
    borderWidth: 15,
    backgroundColor: 'transparent'
  },
  textTitle:{
    fontSize: 28, 
    fontWeight: 'bold'
  },
  textDescriptive:{
    fontWeight:'bold', 
    fontSize: 15
  },
  buttonContainer:{
    flexDirection: 'row',
    marginTop: '20px'
  },
  button:{
    margin: '30px',
    backgroundColor: "#E3C000",
    height: '50px',
    width: '120px',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '20px',
    borderWidth: 0,
  }
});
