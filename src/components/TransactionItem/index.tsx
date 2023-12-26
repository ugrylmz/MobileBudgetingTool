import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Transaction } from '../../../data/mockTransactionData';

const TransactionItem = ({
    id,
    title,
    amount,
    date,
    category,
    paymentType,
}: Transaction) => {
    return (
        <View key={id} style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.amount}>${amount.toFixed(2)}</Text>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.category}>{paymentType}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: 'white',
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    amount: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        color: 'gray',
    },
    category: {
        fontSize: 14,
        color: '#007bff',
        marginTop: 4,
    },
});

export default TransactionItem;
