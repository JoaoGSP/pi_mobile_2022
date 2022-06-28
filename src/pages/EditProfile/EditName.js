/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useForm} from 'react-hook-form';

//Dev components and providers
import CustomInput from '../../components/CustomInput';
import AuthContext from '../../contexts/auth';
import {styles} from './styles';

export default function EditName({navigation}) {
  const {user, UpdateUserDisplayName} = useContext(AuthContext);
  const [currentName, setCurrentName] = useState('');
  const {
    handleSubmit,
    control,
    // eslint-disable-next-line no-unused-vars
    formState: {errors, isSubmitSuccessful},
  } = useForm();

  useEffect(() => {
    setCurrentName(user.displayName);
  }, [user.displayName]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      navigation.goBack();
    }
    // eslint-disable-next-line no-sequences
  }),
    [isSubmitSuccessful];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.containerOnForms}>
        <View style={styles.formWrapper}>
          <Text style={{color: '#6DECF2'}}>Nome atual: {currentName}</Text>
          <CustomInput
            name="name"
            iconName="tago"
            key={0}
            control={control}
            placeholder="Insira o novo nome..."
            rules={{
              required: 'Campo obrigatório',
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
            onPress={handleSubmit(UpdateUserDisplayName)}
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
