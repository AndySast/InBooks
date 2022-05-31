import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

function Header({ mostrar, navigation }) {
  const handleSettingsUser = () => {
    navigation.navigate('SettingsUser');
  };
  return (
    <View style={styles.logo}>
      <Animatable.Image animation="zoomIn" delay={150} duration={100} source={require('../assets/Logos/LogoW.png')} style={styles.image} />
      <Animatable.Text animation="zoomIn" delay={250} duration={200} style={styles.text}>
        INBOOKS
      </Animatable.Text>
      {mostrar ? (
        <TouchableOpacity onPress={handleSettingsUser}>
          <View style={styles.button}>
            <Image style={styles.img} source={require('../assets/Logos/User.png')} />
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '90%',
  },
  text: {
    marginLeft: '5%',
    marginRight: '30%',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    fontSize: 40,
    color: '#9A9483',
  },
  image: {
    width: 94,
    height: 75,
  },
  button: {
    width: 50,
    height: 50,
  },
  img: {
    width: 50,
    height: 50,
  },
});
