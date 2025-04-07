import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const StatCart = () => {
    const products = useSelector((state: RootState) => state.cart.products);
    const favorite = useSelector((state: RootState) => state.cart.favorite);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Stat Cart</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.productsText}>
                    Кількість товарів у корзині: {products.length}
                </Text>
                <Text style={styles.favText}>
                    Кількість обраних товарів: {favorite.length}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        marginHorizontal: 16,
        borderRadius: 8,
        padding: 12,
        // Тіні для iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // Підняття для Android
        elevation: 2,
    },
    header: {
        backgroundColor: '#131921',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    content: {
        alignItems: 'center',
    },
    productsText: {
        fontSize: 16,
        color: '#008000',
        marginBottom: 6,
    },
    favText: {
        fontSize: 16,
        color: '#ff0000',
    },
});

export default StatCart;
