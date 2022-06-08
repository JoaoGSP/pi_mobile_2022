import React, {useContext, useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

{
  /*Dev components and providers*/
}
import {styles} from './Styles/stylesRegisterPage';
import AuthContext from '../contexts/auth';
import RegularButton from '../components/RegularButton';

export default function RegisterPage({navigation}) {
  const {signUp} = useContext(AuthContext);
  const [userLogInfo, setUserLogInfo] = useState('');
  const [dataForm, setDataForm] = useState({});
  const [isFocused, setIsFocused] = useState(false);
  const [trigger, setTrigger] = useState(null);

  function handleInputFocus(v) {
    setIsFocused(true);
    setTrigger(v);
  }
  function handleInputBlur() {
    setIsFocused(false);
    //data ==! '' ? setIsFilled(true) : setIsFilled(false)
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
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
          <View
            style={
              isFocused && trigger === 0
                ? styles.inputWrapperFocused
                : styles.inputWrapperStatic
            }>
            <Icon
              name="tago"
              size={16}
              color={isFocused && trigger === 0 ? '#6DECF2' : '#C4C4C4'}
              style={styles.iconField}
            />
            <TextInput
              key={0}
              style={styles.inputField}
              onFocus={() => handleInputFocus(0)}
              onBlur={handleInputBlur}
              onChangeText={name => setUserLogInfo({...userLogInfo, name})}
              placeholder="Insira o seu nome..."
              //value={userLog.name}
            />
          </View>
          <Text style={styles.inputTitle}>Email:</Text>
          <View
            style={
              isFocused && trigger === 1
                ? styles.inputWrapperFocused
                : styles.inputWrapperStatic
            }>
            <Icon
              name="mail"
              size={16}
              color={isFocused && trigger === 1 ? '#6DECF2' : '#C4C4C4'}
              style={styles.iconField}
            />
            <TextInput
              key={1}
              style={styles.inputField}
              onFocus={() => handleInputFocus(1)}
              onBlur={handleInputBlur}
              onChangeText={email => setDataForm({...dataForm, email})}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Insira o seu email..."
            />
          </View>

          <Text style={styles.inputTitle}>Senha</Text>
          <View
            style={
              isFocused && trigger === 2
                ? styles.inputWrapperFocused
                : styles.inputWrapperStatic
            }>
            <Icon
              name="unlock"
              size={16}
              color={isFocused && trigger === 2 ? '#6DECF2' : '#C4C4C4'}
              style={styles.iconField}
            />
            <TextInput
              key={2}
              style={styles.inputField}
              onFocus={() => handleInputFocus(2)}
              onBlur={handleInputBlur}
              onChangeText={password => setDataForm({...dataForm, password})}
              secureTextEntry={true}
              autoCapitalize="none"
              placeholder="Digite sua senha..."
            />
          </View>
          <Text style={styles.inputTitle}>Confirme a Senha</Text>
          <View
            style={
              isFocused && trigger === 3
                ? styles.inputWrapperFocused
                : styles.inputWrapperStatic
            }>
            <Icon
              name="lock1"
              size={16}
              color={isFocused && trigger === 3 ? '#6DECF2' : '#C4C4C4'}
              style={styles.iconField}
            />
            <TextInput
              Key={3}
              style={styles.inputField}
              onFocus={() => handleInputFocus(3)}
              onBlur={handleInputBlur}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholder="Digite sua senha novamente"
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
          <RegularButton
            title="Registra-se"
            iconName="save"
            param={{dataForm, userLogInfo}}
            func={signUp}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
