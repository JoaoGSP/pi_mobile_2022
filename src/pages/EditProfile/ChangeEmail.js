/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {Pressable, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useForm} from 'react-hook-form';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

//Dev components and providers
import CustomInput from '../../components/CustomInput';
import AuthContext from '../../contexts/auth';
import {styles} from './styles';

export default function ChangeEmail({navigation}) {
  const {user, UpdateUserEmail} = useContext(AuthContext);
  const [currentEmail, setCurrentEmail] = useState('');
  const {
    handleSubmit,
    control,
    watch,
    // eslint-disable-next-line no-unused-vars
    formState: {errors, isSubmitSuccessful},
  } = useForm();
  const eml = watch('email');
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  useEffect(() => {
    setCurrentEmail(user.email);
  }, [user.email]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      navigation.goBack();
    }
    // eslint-disable-next-line no-sequences
  }),
    [isSubmitSuccessful];

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.containerOnForms}>
        <View style={styles.formWrapper}>
          <Text style={{color: '#6DECF2'}}>Email atual: {currentEmail}</Text>
          <CustomInput
            name="email"
            iconName="mail"
            key={0}
            control={control}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Insira o novo email..."
            rules={{
              required: 'Campo obrigatório',
              pattern: {value: EMAIL_REGEX, message: 'Email inválido'},
            }}
          />
          <CustomInput
            name="validateEmail"
            iconName="mail"
            key={1}
            control={control}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Repita o email inserido..."
            rules={{
              validate: value =>
                value === eml ||
                'O email deve ser igual ao digitado anteriormente',
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 24,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({pressed}) =>
              pressed ? styles.goBackButtonPressed : styles.goBackButtonStatic
            }>
            {({pressed}) =>
              pressed
                ? [<Text style={{color: 'white'}}>Retornar</Text>]
                : [<Text style={{color: 'gray'}}>Retornar</Text>]
            }
          </Pressable>
          <Pressable
            onPress={handleSubmit(UpdateUserEmail)}
            style={({pressed}) =>
              pressed
                ? styles.saveChangesButtonPressed
                : styles.saveChangesButtonStatic
            }>
            {({pressed}) =>
              pressed
                ? [<Text style={{color: 'white'}}>Salvar Alteração</Text>]
                : [<Text style={{color: 'green'}}>Salvar Alteração</Text>]
            }
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
