import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import api from '../../utils/api.ts';
import {useDispatch} from 'react-redux';
import {addToFavorite, addToCart} from '../../store/slices/cartSlice.ts';
import ProductItem from '../../components/ProductItem.tsx';

const SPScreen = ({route}: any) => {
  const {productId, productCategory} = route.params;
  const [product, setProduct] = useState<any>(null);
  const [sameProducts, setSameProducts] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    api.getOne('products', productId).then(res => {
      setProduct(res);
    });
    api.getAll(`products/category/${productCategory}`).then(res => {
      setSameProducts(res);
    });
  }, [productId, productCategory]);

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={{uri: product.image}}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>Категорія: {product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}>Рейтинг: {product.rating?.rate}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => dispatch(addToCart(product.id))}>
            <Text style={styles.buttonText}>Додати в корзину</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => dispatch(addToFavorite(product.id))}>
            <Text style={styles.buttonText}>Додати в обране</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>Схожі товари</Text>
        <ScrollView horizontal={true}>
          {sameProducts &&
              sameProducts.map((product: any) => {
                return <ProductItem key={product.id} product={product} c_width={'50%'} />;
              })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    // Тіні для iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Підняття для Android
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#131921',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF9900',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFA41C',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    flex: 1,
    marginRight: 8,
  },
  favoriteButton: {
    backgroundColor: '#131921',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    flex: 1,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default SPScreen;
