import { Text, View, StyleSheet } from 'react-native';
import api from '../utils/api.ts';
import { useState, useEffect } from 'react';

interface FavoriteProps {
  productId: string | number;
}

interface FavoriteProductsState {
  title: string,
}

const ProductFavorite = ({ productId }: FavoriteProps) => {
  const [product, setProduct] = useState<FavoriteProductsState>();

  useEffect(() => {
    api.getOne('products', productId).then(res => {
      setProduct(res);
    });
  }, [productId]);

  return (
      <View style={styles.card}>
        <Text style={styles.title}>{product?.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    // Тіні для iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Підняття для Android
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#131921', // фірмовий темно-синій
  },
});

export default ProductFavorite;
