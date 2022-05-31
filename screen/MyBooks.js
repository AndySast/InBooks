import { View, Text, StyleSheet } from 'react-native';
import Book from '../Components/Book';
import Header from '../Components/Header';
import Btton from '../Components/Button';
import Title from '../Components/Ttile';
function MyBooks({ navigation }) {
  const handleBook = () => {
    navigation.navigate('Book');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.title}>
        <Title content="My Books" />
      </View>
      <View style={styles.Books}>
        <Book title="The Lord of the Rings" rut={handleBook} />
        <Book title="The Hobbit" />
        <Book title="The Catcher in the Rye" />
        <Book title="The Hunger Games" />
        <Book title="The Fault in Our Stars" />
      </View>
      <View style={styles.Btton}>
        <Btton text="Add Book" />
      </View>
    </View>
  );
}

export default MyBooks;
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
  Books: {
    width: '90%',
    height: '55%',
    marginBottom: '10%',
  },
});
