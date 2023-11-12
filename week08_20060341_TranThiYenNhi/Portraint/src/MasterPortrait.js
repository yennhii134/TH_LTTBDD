import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function MasterPortrait({ navigation }) {
  const [text, onChangText] = useState('')
  const [datas, setData] = useState([])
  const [originalData, setOriginalData] = useState([])
  const [selectedButton, setSelectedButton] = useState(null)

  const fetchAutoData = () => {
    fetch("https://65507f2b7d203ab6626dda63.mockapi.io/Donut")
      .then((respone) => respone.json())
      .then((json) => {
        setData(json);
        setOriginalData(json);
      });
  };

  useEffect(() => {
    fetchAutoData();
  }, []);

  const filterDonut = () => {
    setData(originalData);
    hangleButtonPress('button1')
  }
  const filterPinkDonut = () => {
    const pinkDonut = originalData.filter(data => data.name.includes("Pink Donut"));
    setData(pinkDonut);
    hangleButtonPress('button2')
  }
  const filterFloating = () => {
    const floating = originalData.filter(data => data.name.includes("Floating Donut"));
    setData(floating);
    hangleButtonPress('button3')
  }
  const hangleButtonPress = (buttonName) => {
    setSelectedButton(buttonName)
  }
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={styles.text1}>Welcome, Jala!</Text>
        <Text style={styles.text2}>Choice you Best food</Text>
      </View>
      <SafeAreaView style={styles.searchFood}>
        <TextInput
          style={styles.textSearch}
          value={text}
          onChangeText={onChangText}
          placeholder='Search food'
        />
      </SafeAreaView>
      <View style={styles.viewButton}>
        <Pressable style={[
          styles.button,
          {
            backgroundColor:
              selectedButton === 'button1' ? 'rgba(241, 176, 0, 1)' : 'rgba(196, 196, 196, 0.17)',
          },
        ]} onPress={filterDonut}>
          <Text style={styles.textButton}>Donut</Text>
        </Pressable>
        <Pressable style={[
          styles.button,
          {
            backgroundColor:
              selectedButton === 'button2' ? 'rgba(241, 176, 0, 1)' : 'rgba(196, 196, 196, 0.17)',
          },
        ]} onPress={filterPinkDonut}
          backgroundColor={selectedButton === 'button2' ? 'rgba(241, 176, 0, 1)' : 'rgba(196, 196, 196, 0.17)'}>
          <Text style={styles.textButton}>Pink Donut</Text>
        </Pressable>
        <Pressable style={[
          styles.button,
          {
            backgroundColor:
              selectedButton === 'button3' ? 'rgba(241, 176, 0, 1)' : 'rgba(196, 196, 196, 0.17)',
          },
        ]}onPress={filterFloating}
          backgroundColor={selectedButton === 'button3' ? 'rgba(241, 176, 0, 1)' : 'rgba(196, 196, 196, 0.17)'}>
          <Text style={styles.textButton}>Floating</Text>
        </Pressable>
      </View>
      {
        datas.map((item) => {
          return (
            <Pressable key={item.id} style={styles.body}
              onPress={() => {
                navigation.navigate({
                  name: "DetailPortrait", params: { itemDonut: item },
                  merge: true,
                })
              }}>
              <Image style={styles.imgDonut} source={{ uri: item.image }} resizeMode='contain'></Image>
              <View style={styles.row}>
                <Text style={styles.textDonut}>{item.name}</Text>
                <Text style={styles.detail}>{item.detail}</Text>
                <Text style={styles.textDonut}>{item.price}</Text>
              </View>
              <View style={styles.viewImgAdd}>
                <Image source={require('../img/add.png')} style={styles.imgAdd} resizeMode='contain'></Image>
              </View>
            </Pressable>
          )
        })
      }
    </View >
  );
}

const styles = StyleSheet.create({
  button1: {
    backgroundColor: 'red',
    width: 32
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10
  },
  textHeader: {
    paddingBottom: 10
  },
  text1: {
    color: 'rgba(0, 0, 0, 0.65)',
    fontSize: 16,
    fontWeight: '600'
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20
  },
  searchFood: {
    width: '80%',
    height: 46,
    borderWidth: 1,
    backgroundColor: 'rgba(196, 196, 196, 0.1)',
    justifyContent: 'center',
    borderColor: 'rgba(196, 196, 196, 1)',
    marginBottom: 10
  },
  textSearch: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontSize: 16,
    width: '70%',
    marginLeft: 10,
    fontWeight: '700'
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingBottom: 10
  },
  button: {
    // backgroundColor: 'rgba(196, 196, 196, 0.17)',
    height: 35,
    width: '30%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontWeight: 'bold'
  },
  body: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: 'rgba(244, 221, 221, 1)',
    width: '95%',
    alignSelf: 'center',
    height: 115,
    padding: 10
  },
  imgDonut: {
    width: '30%',
  },
  row: {
    justifyContent: 'space-evenly',
    width: '60%',
    paddingLeft: 10
  },
  textDonut: {
    fontWeight: 'bold',
    fontSize: 18
  },
  detail: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 'bold'
  },
  viewImgAdd: {
    justifyContent: 'flex-end'
  },
  imgAdd: {
    width: 44,
    height: 44
  }
});
