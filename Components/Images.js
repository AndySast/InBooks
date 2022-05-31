import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
function Images() {
  return (
    <TouchableOpacity onPress={() => alert('Hello')}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={[styles.img, styles.img1]} source={require('../assets/Images/uno.jpg')} />
          <Image style={[styles.img, styles.img2]} source={require('../assets/Images/dos.jpg')} />
        </View>
        <View style={styles.image}>
          <Image style={[styles.img, styles.img3]} source={require('../assets/Images/tres.jpg')} />
          <Image style={[styles.img, styles.img4]} source={require('../assets/Images/cuatro.jpeg')} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Images;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '50%',
  },
  img1: {
    borderTopLeftRadius: 50,
  },
  img2: {
    borderBottomLeftRadius: 50,
  },
  img3: {
    borderTopRightRadius: 50,
  },
  img4: {
    borderBottomRightRadius: 50,
  },
});
