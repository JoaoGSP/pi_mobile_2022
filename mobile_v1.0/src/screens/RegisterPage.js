import React from 'react';
import { View, Image, Text, TextInput, Pressable, Button, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
//import LogsButton from '../components/Button';

export default function RegisterPage ({navigation}) {
  return(
    <View style={styles.container}>
          <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={require('../../assets/Logo.png')}/> 
            </View>
            <View style={styles.formWrapperField}>
                <Text style={styles.inputTitle}>Email:</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="mail" size={16} color='white' style={styles.icons}/>
                    <TextInput style={styles.inputField} placeholder='Insira o seu email...'/>
                </View>
                <Text style={styles.inputTitle}>Senha</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="lock" size={16} color='white' style={styles.icons}/>
                    <TextInput style={styles.inputField} placeholder='Digite sua senha...'/>
                </View>
                <Text style={styles.inputTitle}>Confirme a Senha</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="lock" size={16} color='white' style={styles.icons}/>
                    <TextInput style={styles.inputField} placeholder='Digite sua senha novamente'/>
                </View>
            </View>
            <Pressable onPress={()=> navigation.goBack()}>
              <View style={styles.formWrapperLogin}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
              </View>
            </Pressable>
            <View style={styles.formWrapperRegister}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>REGISTRAR-SE</Text>
            </View>
            <View style={{alignItems: 'center', paddingTop: 96}}>
                <Button title={'Registrar'} onPress={()=>{}}></Button>
            </View>
        </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'collumn',
    alignItems: 'center',
    backgroundColor: '#E5E5E5'
  },
    logoWrapper:{
        paddingTop: 130,
        alignItems: 'center'
    },
    logo: {
        width: 173,
        height: 193.6,
        paddingTop: 27
    },
    formWrapperField:{
        width: 370,
        height: 268,
        backgroundColor: '#03113c',
        //borderTopWidth: 30,
        paddingTop: 8,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 400,
        position: 'absolute',
        zIndex: 4
        //marginBottom: 56
    },formWrapperLogin:{
        //position: 'absolute',
        width: 192,
        height: 242,
        backgroundColor: '#03113c',
        //borderTopWidth: 30,
        //borderLeftWidth: 10,
        borderTopLeftRadius: 25,
        //borderTopRightRadius: 25,
        marginTop: 32,
        marginRight: 178,
        paddingTop: 16,
        alignItems: 'center',
        opacity: 0.5,
        //marginBottom: 56
    },formWrapperRegister:{
        //position: 'absolute',
        width: 200,
        height: 242,
        backgroundColor: '#03113c',
        //borderTopWidth: 30,
        //borderLeftWidth: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -242,
        marginLeft: 170,
        paddingTop: 16,
        alignItems: 'center',
        
        zIndex: 3
        //marginBottom: 56
    },
    inputTitle:{
        //marginTop: 16,
        color: 'white',
    },
    inputWrapper:{
        width: 324,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#C4C4C4',
        opacity: 0.5,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16
    },
    inputField:{
        padding: 10,
    },
    icons: {
        paddingLeft: 16,
    }
})