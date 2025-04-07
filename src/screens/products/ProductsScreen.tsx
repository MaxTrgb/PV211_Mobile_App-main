import React, {useState, useEffect} from 'react';
import api from '../../utils/api.ts';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import ProductItem from '../../components/ProductItem.tsx';
import StatCart from '../../components/StatCart.tsx';
import FProducts from '../../sections/favorite/Products.tsx';

const ProductsScreen = () => {
  // стани
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // при монтуванні
  useEffect(() => {
    try {
      setLoading(true);
      api.getAll('products').then((res: any) => {
        setProducts(res as any);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <StatCart />
        <FProducts />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Amazon Mobile</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Список продуктів</Text>
          {products.map((product: any) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#131921', // фірмовий синій відтінок Amazon
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Platform.select({
      android: 26,
      ios: 0,
      default: 0,
    }),
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#131921',
    marginBottom: 12,
    marginTop: 10,
  },
  scrollView: {
    paddingBottom: 20,
  },
});

export default ProductsScreen;
