import React from 'react';
import { View, Image, Pressable, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
//import LogsButton from '../components/Button'

export default function LandingPage({navigation}) {
  return (
    <View>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
      </View>
      <View style={styles.buttonWrapper}>
        <View>
          <Pressable
            style={styles.logButton}
            onPress={() => navigation.navigate('LoginPage')}>
            <Text style={{color: 'black'}}>Fazer Login</Text>
            <Icon name="rocket1" size={16} color='black' style={{padding:2}}/>
          </Pressable>
        </View>
        <View style={{paddingTop: 40}}>
          <Pressable
            style={styles.logButton}
            onPress={() => navigation.navigate('RegisterPage')}>
            <Text style={{color: 'black'}}>Registrar-se</Text>
            <Icon name="save" size={16} color='black' style={{padding:2}}/>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoWrapper: {
    paddingTop: 150,
    alignItems: 'center',
  },
  logo: {
    width: 210,
    height: 235,
    paddingTop: 27,
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    paddingTop: 176,
    alignItems: 'center',
  },
  logButton: {
    width: 200,
    height: 52,
    borderWidth: 2,
    borderColor: '#03113c',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
