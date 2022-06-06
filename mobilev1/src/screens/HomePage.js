import 'react-native-gesture-handler';

import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MarketContext from '../contexts/marketContext';
import AuthContext from '../contexts/auth';

export default function HomePage(props) {
  const {state, dispatch} = useContext(MarketContext);
  const {userLog, signed, signOut} = useContext(AuthContext);

  console.warn(signed);

  function marketRedirect(leng) {
    {
      if (leng === 0) {
        return (
          <View
            style={{
              backgroundColor: '#DED9D9',
              padding: 16,
              borderWidth: 2,
              borderColor: 'black',
              borderRadius: 16,
              borderColor: '#4D4D4D',
            }}>
            <View>
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
            </View>
            {/*Dev*/}
            <Pressable 
              style={({pressed})=>[pressed ? styles.shoppingCartButtonPressed : styles.shoppingCartButtonStatic]}
              onPress={() => props.navigation.navigate('Market')}>
                {({pressed})=>[
                  pressed ? <AntDesign
                  name="shoppingcart"
                  size={30}
                  style={styles.shoppingCartTextPressed}
                />
                :
                <AntDesign
                name="shoppingcart"
                size={30}
                style={styles.shoppingCartTextStatic}
              />
                ]}
            </Pressable>
          </View>
        );
      }
      if (leng > 0 && leng < 11) {
        return (
          <Pressable
            style={{
              height: 75,
              width: 75,
              alignSelf: 'center',
              alignItems: 'center',
              paddingTop: 16,
            }}
            onPress={() => props.navigation.navigate('Market')}>
            <AntDesign
              name="shoppingcart"
              size={30}
              style={{color: '#4D4D4D', fontWeight: 'bold'}}
            />
          </Pressable>
        );
      }
    }
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
          <Text style={{color: 'white'}}>R$ 00,00</Text>
        </View>
        <View style={styles.balanceWrapper}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Saldo Restante:
          </Text>
          <Text style={{marginLeft: 24, color: 'black'}}>R$ 100,00</Text>
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
                  {playerSelected.price}
                </Text>
              </View>
              <Pressable
                style={styles.buttonAction}
                onPress={() =>
                  dispatch({
                    type: 'sellPlayer',
                    payload: playerSelected,
                  })
                }>
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
  shoppingCartButtonStatic: {
    height: 75,
    width: 75,
    marginTop: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoppingCartButtonPressed: {
    height: 75,
    width: 75,
    borderRadius: 40,
    backgroundColor:'#03113C',
    marginTop: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoppingCartTextStatic:{
    color: '#4D4D4D', fontWeight: 'bold'
  },
  shoppingCartTextPressed:{
    color: 'white', fontWeight: 'bold'
  }
});
