import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Promotion} from "../../@types/promotion/Promotion.tsx";

const promotions: Promotion[] = [
    { title: "Promotion 1+1=3", text: "Buy 2 get 3 free", date: "April 10 - April 15" },
    { title: "Weekend Sale", text: "Up to 50% off on all items", date: "April 12 - April 14" },
    { title: "Flash Deal", text: "Extra 10% off on checkout", date: "April 14 - April 16" },
    { title: "Limited Offer", text: "Buy 1 get 1 free on selected items", date: "April 15 - April 17" }
];

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Notifications</Text>
            <FlatList
                data={promotions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    card: { backgroundColor: '#f9f9f9', padding: 16, marginVertical: 8, borderRadius: 8 },
    title: { fontSize: 16, fontWeight: 'bold' },
    text: { fontSize: 14, marginVertical: 4 },
    date: { fontSize: 12, color: 'gray' }
});

export default NotificationScreen;
