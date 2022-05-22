import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, Button } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
//import LogsButton from '../components/Button';

export default function EditProfile () {
  return(
    <View style={styles.container}>
            <View style={styles.formWrapperField}>
                <Text style={styles.inputTitle}>Novo Email:</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="mail" size={16} color='white' style={styles.icons}/>
                    <TextInput style={styles.inputField} placeholder='Insira o seu email...'/>
                </View>
                <Text style={styles.inputTitle}>Confirme o Novo Email:</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="mail" size={16} color='white' style={styles.icons}/>
                    <TextInput style={styles.inputField} placeholder='Insira o seu email novamente'/>
                </View>
                <Text style={styles.inputTitle}>Nova Senha</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="lock" size={16} color='white' style={styles.icons}/>
                    <TextInput style={styles.inputField} placeholder='Digite sua senha...'/>
                </View>
                <Text style={styles.inputTitle}>Confirme a Nova Senha</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="lock" size={16} color='white' style={styles.icons}/>
                    <TextInput style={styles.inputField} placeholder='Digite sua senha novamente'/>
                </View>
            </View>
            <View style={styles.formWrapperRegister}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Editar Perfil</Text>
            </View>
            <View style={{alignItems: 'center', paddingTop: 64}}>
                <Button title={'Salvar Alterações'}></Button>
            </View>
        </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'collumn',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5'
  },
    formWrapperField:{
        width: 370,
        height: 344,
        backgroundColor: '#03113c',
        //borderTopWidth: 32,
        paddingTop: 8,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 272,
        //position: 'absolute',
        zIndex: 4
        //marginBottom: 56
    },formWrapperRegister:{
        position: 'absolute',
        width: 370,
        height: 242,
        backgroundColor: '#03113c',
        //borderTopWidth: 30,
        //borderLeftWidth: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 232,
        marginLeft: 170,
        paddingTop: 16,
        alignItems: 'center',
        opacity: 0.5,
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