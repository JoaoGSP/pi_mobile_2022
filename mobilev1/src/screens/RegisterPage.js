import React, { useContext, useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import AuthContext from '../contexts/auth';
import Icon from 'react-native-vector-icons/AntDesign'

export default function RegisterPage({navigation}) {

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
        <Text style={styles.inputTitle}>Nome:</Text>
        <View style={styles.inputWrapper}>
          <Icon name="tago" size={16} color="white" style={styles.iconField} />
          <TextInput
            style={styles.inputField}
            placeholder="Insira o seu nome..."
            onChangeText={name => setDataForm({...userLog, name})}
            //value={userLog.name}
          />
        </View>
        <Text style={styles.inputTitle}>Email:</Text>
        <View style={styles.inputWrapper}>
          <Icon name="mail" size={16} color="white" style={styles.iconField} />
          <TextInput
            style={styles.inputField}
            placeholder="Insira o seu email..."
            keyboardType='email-address'
          />
        </View>
        <Text style={styles.inputTitle}>Senha</Text>
        <View style={styles.inputWrapper}>
          <Icon name="unlock" size={16} color="white" style={styles.iconField} />
          <TextInput
            style={styles.inputField}
            placeholder="Digite sua senha..."
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.inputTitle}>Confirme a Senha</Text>
        <View style={styles.inputWrapper}>
          <Icon name="lock1" size={16} color="white" style={styles.iconField} />
          <TextInput
            style={styles.inputField}
            placeholder="Digite sua senha novamente"
            secureTextEntry={true}
          />
        </View>
      </View>

      {/*
      -- Component who wrap the outside part of input field
      -- Has 2 parts
      -- Login part and the register part
      */}

      <View style={styles.outsideComponent_Login}>
        <Pressable onPress={() => navigation.navigate('LoginPage')}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
        </Pressable>
      </View>
      {/*Divider*/}
      <View style={styles.outsideComponent_Register}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>REGISTRAR-SE</Text>
      </View>

      {/*
      -- Submit button;
      -- Has 2 parts;
      -- The wrapper button, and the button itself
      */}

      <View style={{alignItems: 'center', paddingTop: 204}}>
        <Pressable
          style={styles.submitButton}
          title="Logar"
          onPress={()=> signUp(dataForm)}>
          <Text style={{color: 'black'}}>Registrar-se</Text>
          <Icon name="save" size={16} color='black' style={{padding:2}}/>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
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
    height: 368,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    paddingTop: 8,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 346,
    position: 'absolute',
    zIndex: 4,
    //marginBottom: 56
  },
  outsideComponent_Login: {
    //position: 'absolute',
    width: 192,
    height: 242,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    //borderLeftWidth: 10,
    borderTopLeftRadius: 25,
    //borderTopRightRadius: 25,
    marginTop: 72,
    marginRight: 178,
    paddingTop: 16,
    alignItems: 'center',
    opacity: 0.5,
    //marginBottom: 56
  },
  outsideComponent_Register: {
    //position: 'absolute',
    width: 200,
    height: 242,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    //borderLeftWidth: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -242,
    marginLeft: 170,
    paddingTop: 16,
    alignItems: 'center',
    zIndex: 3,
    //marginBottom: 56
  },
  inputTitle: {
    marginBottom: 16,
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