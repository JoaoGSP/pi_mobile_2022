import React, {useContext, useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

import AuthContext from '../contexts/auth';

export default function LoginPage({navigation}) {
  const {userLog, signUp} = useContext(AuthContext);
  const [dataForm, setDataForm] = useState({})

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
    style={styles.container}>

      {/*App logo*/}
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
      </View>

      {/*Component who wrap the inside part of input field*/}
      <View style={styles.insideComponent_FormWrapper}>
        <Text style={styles.inputTitle}>Email:</Text>
        <View style={styles.inputWrapper}>
          <Icon name="mail" size={16} color='white' style={styles.iconField}/>
          <TextInput
            style={styles.inputField}
            onChangeText={mail => setDataForm({...userLog, mail})}
            keyboardType='email-address'
            //value={userLog.mail}
            placeholder="Insira o seu email..."
          />
        </View>
        <Text style={styles.inputTitle}>Senha</Text>
        <View style={styles.inputWrapper}>
          <Icon name="lock1" size={16} color='white' style={styles.iconField}/>
          <TextInput
            style={styles.inputField}
            onChangeText={password => setDataForm({...userLog, password})}
            secureTextEntry={true}
            //value={userLog.password}
            placeholder="Digite sua senha..."
          />
        </View>
      </View>

      {/*
      -- Component who wrap the outside part of input field
      -- Has 2 parts
      -- Login part and the register part
      */}

      <View style={styles.outsideComponent_login}>
        <Pressable
          onPress={() => {
            console.log('Pressed');
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
        </Pressable>
      </View>
      {/*Divider*/}
      <View style={styles.outsideComponent_Register}>
        <Pressable onPress={() => navigation.navigate('RegisterPage')}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>REGISTRAR-SE</Text>
        </Pressable>
      </View>

      {/*
      -- Submit button;
      -- Has 2 parts;
      -- The wrapper button, and the button itself
      */}

      <View style={{alignItems: 'center', paddingTop: 144}}>
        <Pressable
          style={styles.submitButton}
          title="Logar"
          onPress={()=> signUp(dataForm)}>
          <Text style={{color: 'black'}}>Logar</Text>
          <Icon name="rocket1" size={16} color='black' style={{padding:2}}/>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  logoWrapper: {
    marginTop: 40,
    alignItems: 'center',
  },
  logo: {
    width: 173,
    height: 193.6,
    paddingTop: 16,
  },
  insideComponent_FormWrapper: {
    width: 370,
    height: 240,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 346,
    position: 'absolute',
    zIndex: 4,
    //marginBottom: 56
  },
  outsideComponent_login: {
    //position: 'absolute',
    width: 185,
    height: 242,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    //borderLeftWidth: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 72,
    marginRight: 185,
    paddingTop: 16,
    alignItems: 'center',
    zIndex: 3,
    //marginBottom: 56
  },
  outsideComponent_Register: {
    //position: 'absolute',
    width: 208,
    height: 242,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    //borderLeftWidth: 10,
    //borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -242,
    marginLeft: 162,
    paddingTop: 16,
    alignItems: 'center',
    opacity: 0.5,
    //marginBottom: 56
  },
  inputTitle: {
    marginTop: 8,
    color: 'white',
  },
  inputWrapper: {
    width: 324,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#C4C4C4',
    opacity: 0.5,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
  },
  inputField: {
    padding: 10,
  },
  iconField: {
    paddingLeft: 16,
  },
  submitButton: {
    width: 200,
    height: 52,
    borderWidth: 2,
    borderColor: '#03113c',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
