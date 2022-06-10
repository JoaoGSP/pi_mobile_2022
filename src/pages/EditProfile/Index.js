/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {useForm} from 'react-hook-form';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

//Dev components and providers
import AuthContext from '../../contexts/auth';
import RegularButton from '../../components/RegularButton';
import CustomInput from '../../components/CustomInput';
import {styles} from './styles';
import AlertBox from '../../components/AlertBox';

export default function EditProfile() {
  const {
    handleSubmit,
    control,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: displayName,
      mail: email,
    },
  });
  const {user, updateUserProfile} = useContext(AuthContext);
  const [displayName, setDisplayName] = useState('Insira seu nome');
  const [email, setEmail] = useState(user.email);
  const pwd = watch('password');
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (user.displayName) {
    setDisplayName(user.displayName);
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <>
        <AlertBox />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.formWrapperInside}>
            <CustomInput
              control={control}
              name="name"
              key={0}
              iconName="tago"
              inputTitle="Novo Nome:"
              placeholder={displayName}
              //rules={{required: 'Campo obrigatório'}}
            />
            <CustomInput
              control={control}
              name="email"
              key={1}
              iconName="mail"
              inputTitle="Novo Email:"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder={email}
              rules={{pattern: {value: EMAIL_REGEX, message: 'Email inválido'}}}
            />
            <CustomInput
              control={control}
              name="password"
              key={2}
              iconName="lock"
              inputTitle="Nova Senha:"
              autoCapitalize="none"
              secureTextEntry
              placeholder="Digite uma nova senha"
              //rules={{required: 'Campo obrigatório'}}
            />
            <CustomInput
              control={control}
              name="validatePassword"
              key={3}
              iconName="lock"
              inputTitle="Confirme a senha:"
              autoCapitalize="none"
              secureTextEntry
              placeholder="Inisra novamente a senha"
              rules={{
                validate: value => value === pwd || 'Senhas não conferem',
              }}
            />
          </View>
          <View style={{marginTop: 32, alignItems: 'center'}}>
            <RegularButton
              func={handleSubmit(updateUserProfile)}
              title="Atualizar perfil"
              iconName="rocket1"
            />
          </View>
        </KeyboardAvoidingView>
      </>
    </TouchableWithoutFeedback>
  );
}
