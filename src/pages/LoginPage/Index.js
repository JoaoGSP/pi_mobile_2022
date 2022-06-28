/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useForm} from 'react-hook-form';

//Dev components and providers
import AuthContext from '../../contexts/auth';
import RegularButton from '../../components/RegularButton';
import CustomInput from '../../components/CustomInput';
import {styles} from './styles';

export default function LoginPage({navigation}) {
  const {SignIn} = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={styles.container}>
        {/*App logo*/}
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('../../assets/Logo.png')}
          />
        </View>

        {/*Component who wrap the inside part of input field*/}
        <View style={styles.insideComponent_FormWrapper}>
          <CustomInput
            key={0}
            name="email"
            inputTitle="Email:"
            iconName="mail"
            control={control}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Insira o seu email..."
            rules={{
              required: 'Campo obrigatório',
              pattern: {value: EMAIL_REGEX, message: 'Email inválido'},
            }}
          />
          <CustomInput
            key={1}
            name="password"
            inputTitle="Senha:"
            iconName="lock1"
            control={control}
            secureTextEntry={true}
            placeholder="Digite sua senha..."
            rules={{required: 'Campo obrigatório'}}
          />
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
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              REGISTRAR-SE
            </Text>
          </Pressable>
        </View>

        {/*
      -- Submit button;
      -- Has 2 parts;
      -- The wrapper button, and the button itself
      */}
        <View style={{alignItems: 'center', paddingTop: 144}}>
          <RegularButton
            title="Logar"
            iconName="rocket1"
            func={handleSubmit(SignIn)}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
