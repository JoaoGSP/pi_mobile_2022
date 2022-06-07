import 'react-native-gesture-handler';

import React, {useContext, useState} from 'react';
import {Text, View, Pressable, Image, ScrollView} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MarketContext from '../contexts/marketContext';
import AuthContext from '../contexts/auth';
import {styles} from './Styles/stylesHomePage';

export default function HomePage(props) {
  const {state, dispatch} = useContext(MarketContext);
  const {userLog, signed, signOut} = useContext(AuthContext);

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
                borderColor: '#4D4D4D',
              }}>
              <Text
                style={{fontSize: 24, color: '#4D4D4D', textAlign: 'center'}}>
                Ops!
              </Text>
              <Text
                style={{fontSize: 24, color: '#4D4D4D', textAlign: 'center'}}>
                Parece que você ainda não tem ninguem no seu time.
              </Text>
              <Text
                style={{fontSize: 24, color: '#4D4D4D', textAlign: 'center'}}>
                Vamos as compras?
              </Text>
              {/*Dev*/}
            </View>
            <View>
              <Pressable
                style={({pressed}) => [
                  pressed
                    ? styles.shoppingCartButtonPressed
                    : styles.shoppingCartButtonStatic,
                ]}
                onPress={() => props.navigation.navigate('Market')}>
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
              onPress={() => props.navigation.navigate('Market')}>
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
      <View
        style={{
          backgroundColor: '#e5e5e5',
          borderBottomWidth: 2,
          borderBottomColor: '#ccc',
          width: '100%',
          height: '7%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Pressable onPress={() => props.navigation.openDrawer()}>
          <Ionicons
            name="menu-sharp"
            size={35}
            style={{marginRight: 10, color: '#03113C'}}></Ionicons>
        </Pressable>
      </View>

      {/*Componente carteira*/}
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

      {/*Renderização de time*/}
      <View style={styles.cardGroupWrapper}>
        <ScrollView>
          {marketRedirect(state.PlayersDraft.length)}

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
                    <Ionicons
                      name="md-remove"
                      size={20}
                      color="white"></Ionicons>
                  ) : (
                    <Ionicons name="md-remove" size={20} color="red"></Ionicons>
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
