import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Btton from '../Components/Button';
import TxtInput from '../Components/TextInput';
import * as Animatable from 'react-native-animatable';
function Login({ navigation }) {
  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Animatable.Text animation="zoomIn" duration={350} style={styles.text}>
          INBOOKS
        </Animatable.Text>
        <Animatable.Image animation="zoomIn" delay={350} duration={350} source={require('../assets/Logos/LogoW.png')} style={styles.image} />
      </View>
      <View style={styles.textview}>
        <TxtInput placeholder="User" />
        <TxtInput placeholder="Password" password={true} />
      </View>
      <View>
        <Btton navigation={navigation} text="Sign In" />
      </View>
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.createaccount}>Create account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DCC3',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    marginTop: 130,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    fontSize: 60,
    color: '#9A9483',
  },
  image: {
    width: 188,
    height: 150,
    marginTop: 50,
    marginBottom: 70,
  },
  textview: {
    height: 200,
    marginBottom: 80,
  },
  logo: {
    alignItems: 'center',
  },
  createaccount: {
    marginTop: 20,
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#AAA492',
  },
  forgot: {
    marginTop: 20,
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#9A9483',
  },
});
