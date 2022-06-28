/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {Pressable, Text, TouchableWithoutFeedback, View} from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {useForm} from 'react-hook-form';

//Dev components and providers
import CustomInput from '../../components/CustomInput';
import AuthContext from '../../contexts/auth';
import {styles} from './styles';

export default function ChangePassword({navigation}) {
  const {UpdateUserPassword} = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    watch,
    // eslint-disable-next-line no-unused-vars
    formState: {errors, isSubmitSuccessful},
  } = useForm();
  const pwd = watch('password');

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
        <View style={styles.formWrapperForChangePassword}>
          <CustomInput
            name="password"
            iconName="unlock"
            key={0}
            control={control}
            autoCapitalize="none"
            placeholder="Insira a nova senha..."
            secureTextEntry
            rules={{
              required: 'Campo obrigatório',
            }}
          />
          <CustomInput
            name="validatePassword"
            iconName="lock1"
            key={1}
            control={control}
            autoCapitalize="none"
            placeholder="Digite a senha inserida novamente..."
            secureTextEntry
            rules={{
              validate: value =>
                value === pwd || 'As senhas digitadas não conferem!',
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
            onPress={handleSubmit(UpdateUserPassword)}
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
