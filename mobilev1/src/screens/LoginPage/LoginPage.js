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
import AuthContext from '../contexts/auth';
import RegularButton from '../components/RegularButton';
import {styles} from './Styles/stylesLoginPage';

export default function LoginPage({navigation}) {
  const {signIn} = useContext(AuthContext);
  const [dataForm, setDataForm] = useState({email: '', password: ''});
  const [isFocused, setIsFocused] = useState(false);
  const [trigger, setTrigger] = useState(null);
  //const [isFilled, setIsFilled] = useState(false);

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
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Insira o seu email..."
              value={dataForm.email}
            />
          </View>
          <Text style={styles.inputTitle}>Senha:</Text>
          <View
            style={
              isFocused && trigger === 2
                ? styles.inputWrapperFocused
                : styles.inputWrapperStatic
            }>
            <Icon
              name="lock1"
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
              value={dataForm.password}
            />
          </View>
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
            param={dataForm}
            func={signIn}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}