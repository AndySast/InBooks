import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

function Header() {
  return (
    <View style={styles.logo}>
      <Animatable.Image animation="zoomIn" delay={350} duration={200} source={require('../assets/Logos/LogoW.png')} style={styles.image} />
      <Animatable.Text animation="zoomIn" delay={350} duration={200} style={styles.text}>
        INBOOKS
      </Animatable.Text>
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
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    fontSize: 60,
    color: '#9A9483',
  },
  image: {
    width: 94,
    height: 75,
  },
});
