import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable, Image, Button, ScrollView } from 'react-native';
//import { Icon } from 'react-native-elements';
import playersVoid from '../data/PlayersVoid';

export default function HomePage ({ navigation, route}){

  //console.log(route.params)

  //const [player, setPlayer] = useState(!route.params ? playersVoid[0]  :  route.params)

  //console.log(player)
    
  return (
    <View style={styles.container}>
      <View style={styles.walletWrapper}>
        <View style={styles.spentWrapper}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Total Gasto:</Text>
        <Text style={{color: 'white'}}>R$ 00,00</Text>
        </View>
        <View style={styles.balanceWrapper}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>Saldo Restante:</Text>
        <Text style={{marginLeft: 24}}>R$ 100,00</Text>
        </View>      
      </View>
      <View style={styles.cardGroupWrapper}>
        <ScrollView>
          {playersVoid.map((playerVoid)=>(
            <View style={styles.cardWrapper}>
              <View style={styles.cardAvatar}>
                <Image source={{uri: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png', }} style={{height: 80, width: 72, borderRadius: 64}} />
              </View>
              <View style={styles.playerInfo}>
                <Text style={{fontWeight: 'bold'}}>{playerVoid.id ? playerVoid.id : 'Jogador'}</Text>
                <Text style={{opacity: 0.7}}>Posição</Text>
                <Text style={{opacity: 0.7}}>Clube</Text>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>Preço</Text>
              </View>
              <Pressable style={styles.buttonAction} onPress={()=>navigation.navigate('Market')}>
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
    flexDirection: 'collumn',
    alignItems: 'center',
    backgroundColor: '#E5E5E5'
  },
  walletWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    //borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 8,
    paddingLeft: 24,
    marginTop: 16,
    width: "100%",
    height: 64,
    backgroundColor: '#e5e5e5'
  },
  spentWrapper:{
    marginLeft: 120,
    backgroundColor: '#03113C', 
    height: 40, width: '40%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 2, 
    borderColor: 'white', 
    borderRadius: 25,
    zIndex: 2},
  balanceWrapper:{
    position: 'absolute',
    backgroundColor: '#E5E5E5', 
    height: 40, width: '78%', 
    justifyContent: 'center', 
    alignItems: 'start',
    paddingLeft: 16, 
    borderWidth: 2, 
    borderColor: 'white', 
    borderRadius: 25,
    //opacity: 0.5
  },
  labelDisable:{
    fontSize: 10,
    fontWeight: 'bold',
    color: '#03113C'
  },
  labelActivate:{
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  cardGroupWrapper:{
    alignItems: 'center',
    height: '100%',
    width: '96%',
    marginTop: 16,
    //backgroundColor: 'white'
  },
  cardWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
    height: 96,
    width: 336,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#03113C',
    borderRadius: 16,
  },
  cardAvatar:{
    flex: 2,
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
    borderRadius:  16,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  }
});