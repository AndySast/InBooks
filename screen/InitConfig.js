import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Header from '../Components/Header';
function InitConfig({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.containerprofile}>
        <TouchableOpacity style={styles.containerprofile} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Add Image</Text>
          <Image style={styles.img} source={require('../assets/Logos/User.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => navigation.navigate('MyBooks')}>
          <Text style={styles.texts}>My Books +</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyWishes')}>
          <Text style={styles.texts}>My Wishes +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default InitConfig;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E5DCC3',
  },
  header: {
    height: '15%',
    width: '90%',
    marginBottom: '10%',
  },
  containerprofile: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#9A9483',
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  text: {
    fontFamily: 'Inter_700Bold',
    fontSize: 50,
    color: '#E5DCC3',
    marginTop: 20,
  },
  options: {
    marginTop: 40,
    height: '40%',
    width: '90%',
    justifyContent: 'space-around',
  },
  texts: {
    fontFamily: 'Inter_300Light',
    color: '#9A9483',
    fontSize: 60,
  },
});
