import {SafeAreaView, StyleSheet} from 'react-native'
import Transactions from '../components/Transactions'

const Home = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Transactions/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginTop: 50,
      },
  });

export default Home;