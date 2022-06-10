/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useContext} from 'react';
import {Text, Modal, View, StyleSheet, Image, Pressable} from 'react-native';

import AuthContext from '../contexts/auth';

export default function AlertBox() {
  const {showAlert, hideAlertForSignOut, signOutUser} = useContext(AuthContext);
  return (
    <Modal
      visible={showAlert}
      transparent
      onRequestClose={() => hideAlertForSignOut()}>
      <View style={styles.container}>
        <View style={styles.alertWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../assets/redCard.jpg')}
              style={styles.image}></Image>
          </View>

          <View style={styles.messageWrapper}>
            <Text style={styles.message}>
              Tem certeza que deseja sair do app?
            </Text>
          </View>

          <View style={styles.buttonGroupWrapper}>
            <Pressable
              onPress={signOutUser}
              style={({pressed}) => [
                pressed ? styles.exitButtonPressed : styles.exitButtonStatic,
              ]}>
              {({pressed}) =>
                pressed
                  ? [
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Sair
                      </Text>,
                    ]
                  : [
                      <Text style={{color: 'white', fontWeight: 'bold'}}>
                        Sair
                      </Text>,
                    ]
              }
            </Pressable>
            <Pressable
              onPress={hideAlertForSignOut}
              style={({pressed}) => [
                pressed ? styles.stayButtonPressed : styles.stayButtonStatic,
              ]}>
              {({pressed}) =>
                pressed
                  ? [
                      <Text style={{color: 'white', fontWeight: 'bold'}}>
                        Ficar
                      </Text>,
                    ]
                  : [
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Ficar
                      </Text>,
                    ]
              }
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  alertWrapper: {
    width: '70%',
    height: '50%',
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
  },
  imageWrapper: {
    alignItems: 'center',
    marginVertical: 32,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  messageWrapper: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonGroupWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  exitButtonStatic: {
    width: 100,
    height: 45,
    backgroundColor: '#03113c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  exitButtonPressed: {
    width: 100,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#03113c',
    borderWidth: 2,
    elevation: 20,
    shadowColor: '#6DECF2',
  },
  stayButtonStatic: {
    width: 100,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#03113c',
    borderWidth: 2,
  },
  stayButtonPressed: {
    width: 100,
    height: 45,
    backgroundColor: '#03113c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 20,
    shadowColor: '#6DECF2',
  },
  textButtonPressed: {
    color: 'white',
  },
  textButtonStatic: {
    color: 'black',
  },
});
