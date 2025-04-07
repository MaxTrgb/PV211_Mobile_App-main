import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ProductFavorite from '../../components/ProductFavorite.tsx';
import { RootState } from '../../store';

const FProducts = () => {
    const productsIds = useSelector((state: RootState) => state.cart.favorite);
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Список обраних:</Text>
            {productsIds.length > 0 &&
                productsIds.map((productId, index) => (
                    <ProductFavorite key={index} productId={productId} />
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#f8f8f8',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#131921', // фірмовий темно-синій відтінок
        marginBottom: 10,
    },
});

export default FProducts;
