import React, {useContext, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
//import { Icon } from 'react-native-elements';

import MarketContext from '../contexts/marketContext';

//import players from '../data/PlayersBase';

export default function Market({navigation}) {
  const {state, dispatch} = useContext(MarketContext);

  const [searchPosition, setSearchPosition] = useState('');

  const positions = ['Goleiro', 'Defensor', 'Meia', 'Atacante'];

  //    const [activate, setActivate] = useState(positions[0]);
  function FilterGroup() {
    return (
      <View style={styles.filterWrapper}>
        {positions.map((position, idx) => {
          if (position == searchPosition) {
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

  return (
    <View style={styles.container}>
      <View style={styles.walletWrapper}>
        <View style={styles.spentWrapper}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Total Gasto:</Text>
          <Text style={{color: 'white'}}>R$ 00,00</Text>
        </View>
        <View style={styles.balanceWrapper}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Saldo Restante:
          </Text>
          <Text style={{marginLeft: 24, color: 'black'}}>R$ 100,00</Text>
        </View>
      </View>

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
                  R$ {player.price},00
                </Text>
              </View>
              <Pressable
                style={styles.buttonAction}
                onPress={() => {
                  BuyPlayer('buyPlayer', player, 'HomePage');
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>+</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  filterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    //borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 8,
    paddingHorizontal: 16,
    //marginTop: 8,
    width: '100%',
    height: 40,
    backgroundColor: '#E5E5E5',
  },
  buttonDisable: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: 'white',
    width: 70,
    height: 24,
    backgroundColor: 'white',
  },
  buttonActivate: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: 'white',
    width: 70,
    height: 24,
    backgroundColor: '#03113C',
  },
  labelDisable: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#03113C',
  },
  labelActivate: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  cardGroupWrapper: {
    alignItems: 'center',
    height: '80%',
    width: '96%',
    marginTop: 16,
    //backgroundColor: 'white'
  },
  cardWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    height: 96,
    width: 336,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#03113C',
    borderRadius: 16,
  },
  cardAvatar: {
    flex: 1,
    alignItems: 'center',
  },
  playerInfo: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAction: {
    flex: 1,
    height: 24,
    borderRadius: 16,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    //borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 8,
    paddingLeft: 24,
    marginTop: 16,
    width: '100%',
    height: 64,
    backgroundColor: '#E5E5E5',
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
    backgroundColor: '#e5e5e5',
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
