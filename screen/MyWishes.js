import { View, StyleSheet } from 'react-native';
import Btton from '../Components/Button';
import Title from '../Components/Ttile';
import Book from '../Components/Book';
import Header from '../Components/Header';

function MyWishes({ navigation }) {
  const handleBook = () => {
    navigation.navigate('Book');
  };
  const handleWish = () => {
    navigation.navigate('BookWish');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.title}>
        <Title content="My Wishes" />
      </View>
      <View style={styles.Books}>
        <Book title="The Lord of the Rings" rut={handleBook} />
        <Book title="Dracula" rut={handleWish} />
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

export default MyWishes;

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
