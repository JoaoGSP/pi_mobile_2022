/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, Image, View, ActivityIndicator} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Splash() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E5E5E5',
        }}>
        <Image style={styles.image} source={require('../../assets/Logo.png')} />
        <ActivityIndicator size="large" />
        <View style={{marginTop: 200, alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 18}}>Made with</Text>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Ionicons name="md-logo-react" size={30} color="#61dafb" />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
                paddingLeft: 8,
              }}>
              React Native
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 200,
    alignSelf: 'center',
    margin: 80,
  },
});
