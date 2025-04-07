import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, addToCart } from '../store/slices/cartSlice.ts';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store';

const ProductItem = ({ product, c_width }: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favoriteList = useSelector((state: RootState) => state.cart.favorite);
  const isFavorite = favoriteList.includes(product.id);

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.slice(0, 100) + '...' : description;
  };

  return (
      <View style={{ maxWidth: c_width, ...styles.card }} key={product.id}>
        <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>Категорія: {product.category}</Text>
        <Text style={styles.description}>
          {truncateDescription(product.description)}
        </Text>
        <Text style={styles.rating}>
          Рейтинг: {product.rating?.rate || product.rating}
        </Text>
        <View>
          <TouchableOpacity
              style={styles.cartButton}
              onPress={() => dispatch(addToCart(product.id))}
          >
            <Text style={styles.buttonText}>Додати в корзину</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[
                styles.favoriteButton,
                isFavorite ? styles.favoriteActive : {},
              ]}
              onPress={() => dispatch(addToFavorite(product.id))}
          >
            <Text
                style={[
                  styles.buttonText,
                  styles.favoriteText,
                  isFavorite ? styles.favoriteTextActive : {},
                ]}
            >
              {isFavorite ? 'Видалити з обраного' : 'Додати в обране'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.viewButton}
              onPress={() =>
                  navigation.navigate('SingleProduct', {
                    productId: product.id,
                    productCategory: product.category,
                  })
              }
          >
            <Text style={styles.buttonText}>Переглянути</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#131921',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffa41c',
    marginBottom: 10,
  },
  cartButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    flex: 1,
    marginBottom: 8,
  },
  favoriteButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    flex: 1,
    marginBottom: 8,
  },
  favoriteActive: {
    backgroundColor: '#d9534f',
  },
  viewButton: {
    backgroundColor: '#131921',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  favoriteText: {
    color: '#000',
  },
  favoriteTextActive: {
    color: '#fff',
  },
});

export default ProductItem;
