import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import TxtInput from '../Components/TextInput';
import Btton from '../Components/Button';
function CreateAccount({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Animatable.Image animation="zoomIn" delay={350} duration={200} source={require('../assets/Logos/LogoW.png')} style={styles.image} />
        <Animatable.Text animation="zoomIn" delay={350} duration={200} style={styles.text}>
          INBOOKS
        </Animatable.Text>
      </View>
      <View style={styles.textview}>
        <TxtInput placeholder="First name" />
        <TxtInput placeholder="Last name" />
        <TxtInput placeholder="Email" />
        <TxtInput placeholder="Password" password={true} />
        <TxtInput placeholder="Confirm password" password={true} />
      </View>
      <View style={styles.SignUp}>
        <Btton navigation={navigation} text="SignUp" />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={require('../assets/Logos/LogoGoogle.png')} style={styles.SignUpLogo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={require('../assets/Logos/LogoGitHub.png')} style={styles.SignUpLogo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DCC3',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
  textview: {
    height: 550,
    width: '90%',
  },
  SignUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '90%',
  },
  SignUpLogo: {
    width: 68,
    height: 68,
    marginLeft: 20,
  },
});
