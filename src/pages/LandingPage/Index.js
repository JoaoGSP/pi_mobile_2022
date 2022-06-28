/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';

//Dev components and providers
import NavigationButton from '../../components/NavigationButton';
import {styles} from './styles';

export default function LandingPage({navigation}) {
  function goTo(page) {
    navigation.navigate(page);
  }

  return (
    <View>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require('../../assets/Logo.png')} />
      </View>
      <View style={styles.buttonWrapper}>
        <NavigationButton
          title="Fazer Login"
          iconName="rocket1"
          routeName="LoginPage"
          func={goTo}
        />
        <View style={{paddingTop: 40}}>
          <NavigationButton
            title="Registrar-se"
            iconName="save"
            routeName="RegisterPage"
            func={goTo}
          />
        </View>
      </View>
    </View>
  );
}
