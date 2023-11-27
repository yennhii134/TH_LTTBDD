import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function API_Screen_02({ navigation }) {
  var [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://65460236fe036a2fa95511bd.mockapi.io/Shops")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => {
          navigation.navigate('API_Screen_01')}}>
          <Image source={require('../img/left-chevron.png')} style={styles.imgHeader} resizeMode='contain'></Image>
        </Pressable>
        <Text style={styles.textHeader}>Shops Near Me</Text>
        <Image source={require('../img/search.png')} style={styles.imgHeader} resizeMode='contain'></Image>
      </View>
      {
        data.map((item) => {
          return (
            <View style={styles.body} key={item.id}>
              <Pressable
                onPress={() => {
                  if (item.name === 'Kitanda Espresso & Acai-U District') {
                    navigation.navigate('API_Screen_03')
                  }
                }}>
                <Image style={styles.img} source={{ uri: item.image }}></Image>
                <View style={styles.viewSAM}>
                  <View style={styles.viewStatus}>
                    {item.status === 'Accepting Orders' && (
                      <Image
                        source={require('../img/Image 178.png')}
                        style={styles.imgBody}
                        resizeMode='contain'
                      />
                    )}
                    {item.status === 'Tempory Unavailable' && (
                      <Image
                        source={require('../img/Image 190.png')}
                        style={styles.imgBody}
                        resizeMode='contain'
                      />
                    )}
                    <Text style={styles.textStatus}>{item.status}</Text>
                  </View>
                  <View style={styles.viewMinutes}>
                    <Image source={require('../img/Image 180.png')} style={styles.imgBody} resizeMode='contain'></Image>
                    <Text style={styles.textMinutes}>{item.minutes}</Text>
                  </View>
                  <Image source={require('../img/Image 181.png')} style={styles.imgBody} resizeMode='contain'></Image>
                </View>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textAddress}>{item.address}</Text>
              </Pressable>
            </View>
          )
        })
      }
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18, 15, 40, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  imgHeader: {
    height: 24,
    width: 24
  },
  body: {
    width: '90%',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginBottom: 15
  },
  img: {
    height: 90,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 5
  },
  viewSAM: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewStatus: {
    flexDirection: 'row',
    backgroundColor: 'rgba(243, 244, 246, 1)',
  },
  textStatus: {
    color: 'rgba(29, 215, 91, 1)'
  },
  viewMinutes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
    marginBottom: 5,
    backgroundColor: 'rgba(243, 244, 246, 1)'
  },
  textMinutes: {
    color: 'rgba(222, 59, 64, 1)',
    fontWeight: '400',
  },
  imgBody: {
    width: 18,
    height: 18
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textAddress: {
    color: 'rgba(23, 26, 31, 1)',
    marginBottom: 5,
    fontSize: 12
  }
});
