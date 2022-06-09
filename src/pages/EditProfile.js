import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import AuthContext from '../contexts/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';

import RegularButton from '../components/RegularButton';

import CustomInput from '../components/CustomInput';
//import AntDesign from 'react-native-vector-icons/AntDesign';
//import LogsButton from '../components/Button';

export default function EditProfile() {
  const {handleSubmit, control, watch, formState: {errors}} = useForm();
  const pwd = watch('password')
  const {user} = useContext(AuthContext);

  console.warn(user);
  return (
    <View style={styles.container}>
      <CustomInput
        control={control}
        name="mail"
        key={1}
        placeholder="Email"
        iconName="mail"
        inputTitle="Email"
        rules={{required: 'Campo obrigatório'}}
      />
      <CustomInput
        control={control}
        name="password"
        key={2}
        placeholder="Senha"
        iconName="lock"
        inputTitle="Senha"
        rules={{required: 'Campo obrigatório'}}
      />
      <CustomInput
        control={control}
        name="validatePassword"
        key={3}
        placeholder="Repita a senha"
        iconName="lock"
        inputTitle="Repita a senha"
        rules={{validate: value => value === pwd || 'Senhas não conferem'}}
      />
      <RegularButton func={handleSubmit()} iconName="rocket1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  formWrapperInside: {
    marginTop: 90,
    width: '90%',
    height: '65%',
    backgroundColor: '#03113c',
    //borderTopWidth: 32,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    //position: 'absolute',
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
    marginBottom: 24,
    backgroundColor: '#C4C4C4',
    opacity: 0.5,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
  },
  inputField: {
    padding: 10,
  },
  icons: {
    paddingLeft: 16,
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
