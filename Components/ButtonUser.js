import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';

function ButtonUser({ navigation }) {
  handleSettings = () => {
    navigation.navigate('SettingsUser');
  };
  return (
    <TouchableOpacity onPress={handleSettings}>
      <View style={styles.button}>
        <Image style={styles.img} source={require('../assets/Logos/User.png')} />
      </View>
    </TouchableOpacity>
  );
}

export default ButtonUser;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  img: {
    width: 50,
    height: 50,
  },
});
