import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import TxtInput from '../Components/TextInput';
import Btton from '../Components/Button';
function CreateAccount({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
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
  header: {
    height: '15%',
    width: '90%',
    marginBottom: '10%',
  },
  textview: {
    height: '50%',
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
