/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, Pressable} from 'react-native';

//Dev components and providers
import AlertBox from '../../components/AlertBox';
import ButtonForEditProfile from '../../components/ButtonForEditProfile';
import {styles} from './styles';
import AuthContext from '../../contexts/auth';

//Pages
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';
import EditName from './EditName';

export default function EditProfile({navigation}) {
  const {DeleteUserAccount} = useContext(AuthContext);
  function goTo(page) {
    navigation.navigate(page);
  }
  return (
    <View style={styles.container}>
      <AlertBox />
      <View style={styles.optionsWrapper}>
        <ButtonForEditProfile
          leftIconName="tago"
          buttonLabel="Alterar nome de usuário"
          func={goTo}
          routeName={EditName}
        />
        <ButtonForEditProfile
          leftIconName="mail"
          buttonLabel="Alterar email"
          func={goTo}
          routeName={ChangeEmail}
        />
        <ButtonForEditProfile
          leftIconName="lock1"
          buttonLabel="Alterar senha"
          func={goTo}
          routeName={ChangePassword}
        />
      </View>
      <View style={{width: '80%', height: '10%', marginTop: '100%'}}>
        <Pressable
          onPress={() => DeleteUserAccount()}
          style={({pressed}) => [
            pressed ? styles.excludeButtonPressed : styles.excludeButtonStatic,
          ]}>
          {({pressed}) =>
            pressed
              ? [
                  <Text
                    style={{color: 'white', alignSelf: 'center', fontSize: 14}}>
                    Excluir conta
                  </Text>,
                ]
              : [
                  <Text
                    style={{color: 'red', alignSelf: 'center', fontSize: 14}}>
                    Excluir conta
                  </Text>,
                ]
          }
        </Pressable>
      </View>
    </View>
  );
}
