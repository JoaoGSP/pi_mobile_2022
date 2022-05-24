import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  Alert,
  Button,
} from 'react-native';

import MarketContext from '../contexts/marketContext';
import AuthContext from '../contexts/auth';

//import { Icon } from 'react-native-elements';
//import playersVoid from '../data/PlayersDraft';

export default function HomePage(props) {
  
  const {state, dispatch} = useContext(MarketContext);
  const {userLog, signOut} = useContext(AuthContext)

  function marketRedirect(leng){
      {while (leng < 11) {
          return(<Pressable
                style={styles.buttonAction}
                onPress={() => props.navigation.navigate('Market')}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>+</Text>
          </Pressable>
          )
      }}
  }
  //const { playerData, playerInfo, fillInfo, providePlayer } = useContext(MarketContext)

  //const [debug, setDebug] = useState(props.route.params ? props.route.params : {})

  //console.log(debug.name)

  //!route.params === {} ? console.log('nada') : providePlayer(route.params)

  //fillInfo(playerData)

  //console.warn(playerInfo)

  //console.log(playerData)

  //console.log(playerInfo)

  //if (route.params === {}){
  //  setPlayerInfo(player)
  //}else {
  //  setPlayerInfo(route.params)
  //}
  //playerData = route.params ? route.params : player

  /*state.PlayersDraft.length === 11 ? 
          Alert.alert('Time completo', 'Seu time está cheio', [
            {text: 'Ok'},{ text: 'Ok tbm'}
          ]) :*/

  return (
    <View style={styles.container}>
      {/*Componente carteira*/}
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

      <Button title='editar perfil' onPress={()=>{props.navigation.navigate('EditProfile')}}></Button>

      <Button title='sair' onPress={() => signOut()}></Button>

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
                  {playerSelected.price}
                </Text>
              </View> 
              <Pressable
                style={styles.buttonAction}
                onPress={() => dispatch({
                  type: 'sellPlayer',
                  payload: playerSelected
                })}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>-</Text>
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
  walletWrapper: {
    //flexDirection: 'row',
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
    height: '100%',
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
});
