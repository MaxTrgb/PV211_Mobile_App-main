import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductFavorite from '../../components/ProductFavorite.tsx';
import { RootState } from '../../store';
import { clearFavorites } from '../../store/slices/cartSlice.ts';

const FProducts = () => {
    const dispatch = useDispatch();
    const productsIds = useSelector((state: RootState) => state.cart.favorite);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Список обраних:</Text>

            {productsIds.length > 0 ? (
                <ScrollView>
                    {productsIds.map((productId, index) => (
                        <ProductFavorite key={index} productId={productId} />
                    ))}

                    <TouchableOpacity
                        style={styles.clearButton}
                        onPress={() => dispatch(clearFavorites())}
                    >
                        <Text style={styles.buttonText}>Очистити обране</Text>
                    </TouchableOpacity>
                </ScrollView>
            ) : (
                <Text style={styles.emptyText}>Список обраних порожній.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#f8f8f8',
        flex: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#131921',
        marginBottom: 10,
    },
    clearButton: {
        backgroundColor: '#ff0000',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#555',
    },
});

export default FProducts;
