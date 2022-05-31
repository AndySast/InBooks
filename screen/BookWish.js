import { View, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Title from '../Components/Ttile';
import Description from '../Components/Description';

function BookWish({ navigation }) {
  const text =
    'Hola, Estoy buscando este libro, preferiblemente en pasta dura pero no necesariamente, no importa que tanto tenga solo que este en buen estado sus paginas y sin apuntes en sus paginas gracias :3 ';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.title}>
        <Title content="Dracula" />
      </View>
      <View style={styles.Description}>
        <Description text={text} />
      </View>
    </View>
  );
}

export default BookWish;

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
    height: '10%',
  },
  Description: {
    width: '90%',
    height: '55%',
  },
});
