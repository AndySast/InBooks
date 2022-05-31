import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import Title from '../Components/Ttile';
import Images from '../Components/Images';
function SBook() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.title}>
        <Title content="The Lord of the Rings" />
      </View>
      <View style={styles.image}>
        <Images />
      </View>
      <View style={styles.Description}>
        <Text style={styles.Descriptiontext}>
          Hola, tengo este libro en pasta blanda, lo compre hace 2 años pero está en buen estado, el tamaño de la letra es un poco pequeño pero se lee muy bien.
        </Text>
      </View>
      <View style={styles.Details}>
        <TouchableOpacity>
          <Text style={styles.DetailsText}>Details ...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SBook;

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
  },
  title: {
    width: '70%',
    height: '13%',
  },
  image: {
    width: '90%',
    height: '30%',
    marginTop: '10%',
  },
  Description: {
    width: '90%',
    height: '20%',
    marginTop: '10%',
  },
  Descriptiontext: {
    fontFamily: 'Inter_300Light',
    fontSize: 30,
    color: '#9A9483',
  },
  Details: {
    width: '90%',
  },
  DetailsText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 30,
    color: '#9A9483',
  },
});
