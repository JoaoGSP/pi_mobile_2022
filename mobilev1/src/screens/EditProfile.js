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
    const {userLog, signUp} = useContext(AuthContext);
    const [dataForm, setDataForm] = useState({})
return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
    style={styles.container}>    
        

        {/*Outside wrapper component*/}
        <View style={styles.formWrapperOutside}>

          {/*User avatar*/}
        <View style={{ alignItems: 'center', backgroundColor: 'white', borderRadius: 90}}>
        <Image
          style={styles.avatarStyle}
          source={{
              uri: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png',
            }}
            />
        </View>
          <Text
            style={{
              color: '#03113c',
              fontWeight: 'bold',
              fontSize: 24,
              textAlign:'center'
            }}>
            {userLog.name}
          </Text>
         
        </View>

        {/*Inside wrapper component*/}
        <View style={styles.formWrapperInside}>
          <Text style={styles.inputTitle}>Alterar nome:</Text>
          <View style={styles.inputWrapper}>
            <Icon name="tago" size={16} color="white" style={styles.icons} />
            <TextInput
              style={styles.inputField}
              placeholder="Insira o novo nome..."
              onChangeText={name => setDataForm({...userLog, name})}
              //value={userLog.name}
            />
          </View>
          <Text style={styles.inputTitle}>Novo Email:</Text>
          <View style={styles.inputWrapper}>
          <Icon name="mail" size={16} color="white" style={styles.icons} />
            <TextInput
              style={styles.inputField}
              placeholder="Insira o seu email..."
              onChangeText={mail => setDataForm({...userLog, mail})}
              defaultValue={userLog.mail}
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
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  contentPage: {
    paddingTop: 16
  },
  avatarStyle: {
    height: 175,
    width: 175,
    //alignItems: 'flex-center',
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
  },
  formWrapperOutside: {
    position: 'absolute',
    width: 370,
    height: 500,
    //flexDirection: 'row',
    backgroundColor: '#5B6585',
    //borderTopWidth: 30,
    //borderLeftWidth: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 32,
    //marginLeft: 170,
    paddingTop: 16,
    alignItems: 'center',
    //opacity: 0.5,
    zIndex: 3,
    //marginBottom: 56
  },
  formWrapperInside: {
    width: 370,
    height: 400,
    backgroundColor: '#03113c',
    //borderTopWidth: 32,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 270,
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
