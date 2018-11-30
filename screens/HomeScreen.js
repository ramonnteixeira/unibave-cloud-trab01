import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.saldo}>Saldo</Text>
            <Text style={styles.saldoValor}>R$30,00</Text>
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <Button title="Pagar Pedágio" style={styles.button} onPress={() => console.log('Pagou')} />
          <Button color="#B3B0B0FF" title="Adicionar Crédito" style={styles.button} onPress={() => console.log('Creditou')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#c9c9c9',
    paddingBottom: 20
  },
  bottomContainer: {
    display: 'flex',
    marginBottom: 20
  },
  button: {
    height: 60,
    marginTop: 10
  },
  saldo: {
    fontSize: 24
  },
  saldoValor: {
    padding: 10,
    fontSize: 48,
    fontWeight: 'bold'
  }
});
