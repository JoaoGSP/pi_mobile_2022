import React, {useContext, useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import AuthContext from '../contexts/auth';
import Icon from 'react-native-vector-icons/AntDesign';
import {default as IconFA} from 'react-native-vector-icons/FontAwesome';

//import Icon from 'react-native-vector-icons/AntDesign';
//import LogsButton from '../components/Button';

export default function EditProfile() {
    const {userLog, signed, signUp} = useContext(AuthContext);
    const [dataForm, setDataForm] = useState({})

return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
    style={styles.container}>    
        

        {/*Inside wrapper component*/}
        <View style={styles.formWrapperInside}>
          <Text style={styles.inputTitle}>Novo Email:</Text>
          <View style={styles.inputWrapper}>
          <Icon name="mail" size={16} color="white" style={styles.icons} />
            <TextInput
              style={styles.inputField}
              placeholder="Insira o seu email..."
              onChangeText={email => setDataForm({...userLog, email})}
              //defaultValue={userLog.email}
            />
          </View>
          <Text style={styles.inputTitle}>Confirme o Novo Email:</Text>
          <View style={styles.inputWrapper}>
          <Icon name="mail" size={16} color="white" style={styles.icons} />
            <TextInput
              style={styles.inputField}
              placeholder="Confirme o email inserido"
              //onChangeText={verificarEmail()}
            />
          </View>
          <Text style={styles.inputTitle}>Nova Senha</Text>
          <View style={styles.inputWrapper}>
          <Icon name="unlock" size={16} color="white" style={styles.icons} />
            <TextInput
              style={styles.inputField}
              placeholder="Digite a nova senha..."
              onChangeText={password => setDataForm({...userLog, password})}
            />
          </View>
          <Text style={styles.inputTitle}>Confirme a Nova Senha</Text>
          <View style={styles.inputWrapper}>
            <Icon name="lock1" size={16} color="white" style={styles.icons} />
            <TextInput
              style={styles.inputField}
              placeholder="Digite sua senha novamente"
            />
          </View>
        </View>
        
        {/*Action button*/}
        <View style={{alignItems: 'center', paddingVertical: 40}}>
            <Pressable
            style={styles.logButton}
            title="Logar"
            onPress={()=> signUp(dataForm)}>
            <Text style={{color: 'black'}}>Salvar Alterações</Text>
            </Pressable>  
        </View>
    </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  contentPage: {
    paddingTop: 16
  },
  formWrapperInside: {
    width: '80%',
    height: '65%',
    backgroundColor: '#03113c',
    //borderTopWidth: 32,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    //position: 'absolute',
    zIndex: 4,
    //marginBottom: 56
  },
  inputTitle: {
    marginBottom: 16,
    color: 'white',
  },
  inputWrapper: {
    width: 324,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#C4C4C4',
    opacity: 0.5,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
  },
  inputField: {
    padding: 10,
  },
  icons: {
    paddingLeft: 16,
  },
  logButton:{
    width: 200,
    height: 52,
    borderWidth: 2,
    borderColor: '#03113c',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
