import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function Book({ title, rut }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={rut}>
        <View style={styles.Book}>
          <View style={styles.Img}>
            <Image style={styles.img} source={require('../assets/Logos/LogoW.png')} />
          </View>
          <View style={styles.text}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  Book: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#E5DCC3',
  },
  img: {
    width: 47,
    height: 38,
  },
  text: {
    marginLeft: 10,
    textAlign: 'center',
    fontFamily: 'Inter_300Light',
    fontSize: 30,
    color: '#9A9483',
  },
});
