import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Title from '../Components/Ttile';

function Details({ text }) {
  const Book = {
    ISBN: '978-0-7356-6745-7',
    name: 'The Lord of the Rings',
    Pasta: 'Hard Pasta',
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.title}>
        <Title content="Details" />
      </View>
      <View style={styles.Details}>
        <Text style={styles.DetailsText}>{`ISBN: ${Book.ISBN}`}</Text>
        <Text style={styles.DetailsText}>{`Name: ${Book.name}`}</Text>
        <Text style={styles.DetailsText}>{`Cover: ${Book.Pasta}`}</Text>
        <TouchableOpacity>
          <Text style={styles.options}>Add +</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.options}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Details;

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
  Details: {
    width: '90%',
    height: '40%',
  },
  DetailsText: {
    color: '#9A9483',
    fontSize: 30,
    marginBottom: '5%',
    fontFamily: 'Inter_300Light',
  },
  options: {
    color: '#9A9483',
    fontSize: 30,
    marginBottom: '5%',
    fontFamily: 'Inter_700Bold',
  },
});
