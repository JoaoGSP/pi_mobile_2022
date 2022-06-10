/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
import 'react-native-gesture-handler';

import React, {useContext} from 'react';
import {Text, View, Pressable, Image, ScrollView} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Dev components and providers
import MarketContext from '../../contexts/marketContext';
import Wallet from '../../components/Wallet';
import {styles} from './styles';
import AlertBox from '../../components/AlertBox';

export default function HomePage(props) {
  const {state, dispatch} = useContext(MarketContext);

  function marketRedirect(leng) {
    {
      if (leng === 0) {
        return (
          <View>
            <View
              style={{
                backgroundColor: '#DED9D9',
                padding: 16,
                borderWidth: 2,
                borderColor: 'black',
                borderRadius: 16,
              }}>
              <Text
                style={{fontSize: 24, color: '#4D4D4D', textAlign: 'center'}}>
                Ops! Parece que você ainda não tem ninguem no seu time. Vamos as
                compras?
              </Text>
            </View>
            <View>
              <Pressable
                style={({pressed}) => [
                  pressed
                    ? styles.shoppingCartButtonPressed
                    : styles.shoppingCartButtonStatic,
                ]}
                onPress={() => props.navigation.navigate('Mercado')}>
                {({pressed}) => [
                  pressed ? (
                    <AntDesign
                      name="shoppingcart"
                      size={30}
                      style={styles.shoppingCartTextPressed}
                    />
                  ) : (
                    <AntDesign
                      name="shoppingcart"
                      size={30}
                      style={styles.shoppingCartTextStatic}
                    />
                  ),
                ]}
              </Pressable>
            </View>
          </View>
        );
      }
      if (leng > 0 && leng < 11) {
        return (
          <View style={{marginBottom: 24}}>
            <Pressable
              style={({pressed}) => [
                pressed
                  ? styles.shoppingCartButtonPressed
                  : styles.shoppingCartButtonStatic,
              ]}
              onPress={() => props.navigation.navigate('Mercado')}>
              {({pressed}) => [
                pressed ? (
                  <AntDesign
                    name="shoppingcart"
                    size={30}
                    style={styles.shoppingCartTextPressed}
                  />
                ) : (
                  <AntDesign
                    name="shoppingcart"
                    size={30}
                    style={styles.shoppingCartTextStatic}
                  />
                ),
              ]}
            </Pressable>
          </View>
        );
      }
    }
  }
  function SellPlayer(tp, data) {
    dispatch({
      type: tp,
      payload: data,
    });
  }
  function UpdateBalanceSell(tp, data) {
    dispatch({
      type: tp,
      payload: data,
    });
  }
  function currencyFormat(num) {
    return 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <View style={styles.container}>
      <AlertBox />
      {/*Componente carteira*/}
      <Wallet />
      {/*Renderização de time*/}
      <View style={styles.cardGroupWrapper}>
        {marketRedirect(state.PlayersDraft.length)}
        <ScrollView>
          {state.PlayersDraft.map((playerSelected, idx) => (
            <View style={styles.cardWrapper} key={idx}>
              <View style={styles.cardAvatar}>
                <Image
                  source={{
                    uri: playerSelected.avatarUrl,
                  }}
                  style={{height: 80, width: 72, borderRadius: 64}}
                />
              </View>
              <View style={styles.playerInfo}>
                <Text style={{fontWeight: 'bold', color: '#03113C'}}>
                  {playerSelected.name}
                </Text>
                <Text style={{opacity: 0.7, color: '#03113C'}}>
                  {playerSelected.position}
                </Text>
                <Text style={{opacity: 0.7, color: '#03113C'}}>
                  {playerSelected.team}
                </Text>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: '#03113C'}}>
                  {currencyFormat(playerSelected.price)}
                </Text>
              </View>
              <Pressable
                style={({pressed}) => [
                  pressed
                    ? styles.buttonActionPressed
                    : styles.buttonActionStatic,
                ]}
                onPress={() => {
                  SellPlayer('sellPlayer', playerSelected);
                  UpdateBalanceSell('updateBalanceSell', playerSelected);
                }}>
                {({pressed}) => [
                  pressed ? (
                    <Ionicons name="md-remove" size={20} color="white" />
                  ) : (
                    <Ionicons name="md-remove" size={20} color="red" />
                  ),
                ]}
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
