import {useState} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { mockTransactions, Transaction } from '../../../data/mockTransactionData';
import TransactionItem from '../TransactionItem'
import ButtonGroup from '../ButtonGroup'


const renderItem = ({ item }: { item: Transaction }) => {
    return (
        <TransactionItem
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            category={item.category}
            paymentType={item.paymentType}
        />
    )
}

const TransactionsList: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'debit' | 'credit'>('all');

    const filteredTransactions = filter === 'all' 
    ? mockTransactions 
    : mockTransactions.filter(t => t.paymentType === filter);

    return (
        <View style={styles.container}>
            <ButtonGroup setFilter={setFilter} />
            <FlatList
               data={filteredTransactions}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
});

export default TransactionsList;
