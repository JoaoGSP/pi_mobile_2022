/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {Text, View, Pressable, Image, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

//Dev components and providers
import MarketContext from '../../contexts/marketContext';
import Wallet from '../../components/Wallet';
import {styles} from './styles';
import AlertBox from '../../components/AlertBox';

export default function Market({navigation}) {
  const {state, dispatch} = useContext(MarketContext);
  const [searchPosition, setSearchPosition] = useState('');
  const positions = ['Goleiro', 'Defensor', 'Meia', 'Atacante', ''];

  function FilterGroup() {
    return (
      <View style={styles.filterWrapper}>
        {positions.map((position, idx) => {
          if (position === '') {
            return (
              <Pressable
                key={idx}
                style={({pressed}) => [
                  pressed
                    ? styles.clearFilterPressed
                    : styles.clearFilterStatic,
                ]}
                onPress={() => {
                  setSearchPosition(position);
                }}>
                {({pressed}) => [
                  pressed ? (
                    <Octicons name="trash" size={15} />
                  ) : (
                    <Octicons name="trash" size={15} color="red" />
                  ),
                ]}
              </Pressable>
            );
          } else if (position === searchPosition) {
            return (
              <Pressable
                key={idx}
                style={styles.buttonActivate}
                onPress={() => {
                  setSearchPosition(position);
                }}>
                <Text style={styles.labelActivate}>{position}</Text>
              </Pressable>
            );
          } else {
            return (
              <Pressable
                key={idx}
                style={styles.buttonDisable}
                onPress={() => {
                  setSearchPosition(position);
                }}>
                <Text style={styles.labelDisable}>{position}</Text>
              </Pressable>
            );
          }
        })}
      </View>
    );
  }

  function BuyPlayer(tp, data, nav) {
    dispatch({
      type: tp,
      payload: data,
    });
    navigation.navigate(nav);
  }
  function UpdateBalanceBuy(tp, data) {
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
      <Wallet />
      {FilterGroup()}

      <View style={styles.cardGroupWrapper}>
        <ScrollView>
          {state.PlayersBase.filter(val => {
            if (searchPosition === '') {
              return val;
            } else if (val.position.includes(searchPosition)) {
              return val;
            }
          }).map((player, idx) => (
            <View key={idx} style={styles.cardWrapper}>
              <View style={styles.cardAvatar}>
                <Image
                  source={{uri: player.avatarUrl}}
                  style={{height: 80, width: 72, borderRadius: 64}}
                />
              </View>
              <View style={styles.playerInfo}>
                <Text style={{fontWeight: 'bold', color: '#03113C'}}>
                  {player.name}
                </Text>
                <Text style={{opacity: 0.7, color: '#03113C'}}>
                  {player.position}
                </Text>
                <Text style={{opacity: 0.7, color: '#03113C'}}>
                  {player.team}
                </Text>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: '#03113C'}}>
                  {currencyFormat(player.price)}
                </Text>
              </View>
              <Pressable
                style={({pressed}) => [
                  pressed
                    ? styles.buttonActionPressed
                    : styles.buttonActionStatic,
                ]}
                onPress={() => {
                  BuyPlayer('buyPlayer', player, 'Página Inicial');
                  UpdateBalanceBuy('updateBalanceBuy', player);
                }}>
                {({pressed}) => [
                  pressed ? (
                    <Ionicons name="md-add-outline" color="white" size={20} />
                  ) : (
                    <Ionicons name="md-add-outline" color="green" size={20} />
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
