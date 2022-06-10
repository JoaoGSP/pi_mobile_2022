/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MarketContext from '../contexts/marketContext';

export default function Wallet() {
  const {state} = useContext(MarketContext);

  function currencyFormat(num) {
    return 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <>
      <View style={styles.walletWrapper}>
        <View style={styles.spentWrapper}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Total Gasto:</Text>
          <Text style={{color: 'white'}}>
            {currencyFormat(state.NewBalance)}
          </Text>
        </View>
        <View style={styles.balanceWrapper}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Saldo Restante:
          </Text>
          <Text style={{marginLeft: 24, color: 'black'}}>
            {currencyFormat(state.InitialBalance)}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  walletWrapper: {
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    //borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 8,
    paddingLeft: 24,
    width: '100%',
    height: 64,
    backgroundColor: '#e5e5e5',
  },
  spentWrapper: {
    paddingVertical: 8,
    marginLeft: 128,
    backgroundColor: '#03113C',
    height: 48,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    zIndex: 2,
  },
  balanceWrapper: {
    paddingVertical: 8,
    position: 'absolute',
    backgroundColor: '#E5E5E5',
    height: 48,
    width: '78%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    //opacity: 0.5
  },
});
