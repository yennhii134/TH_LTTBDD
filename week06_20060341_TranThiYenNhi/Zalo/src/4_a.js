import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button } from 'react-native';

export default function App() {
  const DATA = [
    {
      id: '1',
      image: require('./img/ca_nau_lau.png'),
      title: 'Ca nấu lẩu, nấu mì mini',
      shopName: 'Devang'
    },
    {
      id: '2',
      image: require('./img/ga_bo_toi.png'),
      title: '1KG KHÔ GÀ BƠ TỎI',
      shopName: 'LTD Food'
    },
    {
      id: '3',
      image: require('./img/xa_can_cau.png'),
      title: 'Xe cần cẩu đa năng',
      shopName: 'Thế giới đồ chơi'
    },
    {
      id: '4',
      image: require('./img/do_choi_dang_mo_hinh.png'),
      title: 'Đồ chơi dạng mô hình',
      shopName: 'Thế giới đồ chơi'
    },
    {
      id: '5',
      image: require('./img/lanh_dao_gian_don.png'),
      title: 'Lãnh đạo giản đơn',
      shopName: 'Minh Long Book'
    },
    {
      id: '6',
      image: require('./img/hieu_long_con_tre.png'),
      title: 'Hiếu lòng con trẻ',
      shopName: 'Minh Long Book'
    }
  ];


  const Item = ({ title, image, shopName }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.viewDescription}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rowShopName}>
          <Text style={styles.shop}>Shop </Text>
          <Text style={styles.shopName}>{shopName}</Text>
        </View>
      </View>
      <button style={styles.buttonChat}>Chat</button>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={require('./img/left-arrow.png')} style={styles.imgLeftArrow}></Image>
        <Text style={styles.text1}>Chat</Text>
        <Image source={require('./img/shopping-cart.png')} style={styles.imgCart}></Image>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text2}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      </View>
      <SafeAreaView style={styles.viewItem}>
        <FlatList
          data={DATA}
          renderItem={({ item }) =>
            <Item
              title={item.title}
              image={item.image}
              shopName={item.shopName} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View style={styles.viewFooter}>
        <Image source={require('./img/menu.png')} style={styles.imgFooter}></Image>
        <Image source={require('./img/hut.png')} style={styles.imgFooter}></Image>
        <Image source={require('./img/return-button.png')} style={styles.imgFooter}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(196, 196, 196, 0.5)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewHeader: {
    backgroundColor: '#1BA9FF',
    height: '7%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  imgLeftArrow: {
    width: 38,
    height: 38
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  },
  imgCart: {
    width: 38,
    height: 38
  },
  viewText: {
    justifyContent: 'center',
    width: '80%',
    height: '10%'
  },
  text2: {
    fontSize: 16,
    fontWeight: '500'
  },
  // -----------
  viewItem: {
    width: '100%',
    height: '76%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 3,
    height: 80
  },
  title: {
    fontWeight: '500',
    fontSize: 18
  },
  image: {
    width: '25%',
    height: '100%'
  },
  rowShopName: {
    flexDirection: 'row'
  },
  shop:{
    fontSize: 16
  },
  shopName:{
    fontSize: 16,
    fontWeight: '500'
  },
  buttonChat: {
    backgroundColor: '#F31111',
    color: 'white',
    width: '23%',
    height: '65%',
    alignSelf: 'center',
    fontSize: 16,
    borderWidth: 0,
    marginRight: 10
  },
  // --------
  viewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    width: '100%',
    height: '7%',
    paddingHorizontal: 20,
    paddingVertical: 5  
  },

  imgFooter: {
    width: 32,
    height: 32
  }
});
