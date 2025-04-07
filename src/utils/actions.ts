// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

class Actions {
  addToCart = (id: number) => {
    Alert.alert('You clicked to add cart');
  };
  addToFavorite = (id: number) => {
    Alert.alert('You clicked to add to Favorite');
  };
}

const actions = new Actions();
export default actions;
