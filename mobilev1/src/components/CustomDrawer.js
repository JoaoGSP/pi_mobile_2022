import React, {useContext} from 'react';
import {View, Text, ImageBackground, Image, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthContext from '../contexts/auth';


export default function CustomDrawer(props) {
    const {signOut} = useContext(AuthContext)
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#03113c'}}>
        <ImageBackground
          source={require('../assets/fundo.jpg')}
          style={{padding: 20, alignItems: 'center'}}>
          <Image
            source={require('../assets/Logo.png')}
            style={{width: 173, height: 193.6, marginBottom: 10}}
          />
          <Text style={{fontSize: 18, color: 'white'}}>Building...</Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <Pressable onPress={() => signOut}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text style={{fontSize: 15, marginRight: 5, color: 'black'}}>
              Sair
            </Text>
            <Ionicons name="exit-outline" size={22} color="black" />
          </View>
        </Pressable>
      </View>
    </View>
  );
}