import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

var increment = {type:'increment'}
var initialState = {count: 0}
function reducer(state, action){
  switch (action.type) {
    case 'increment': return {
      count: state.count + 1
    }
      
    default:
      return state;
  }
}

var store = createStore(reducer)


export default function App() {
  return (
    <View style={styles.container}>
      
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
});
