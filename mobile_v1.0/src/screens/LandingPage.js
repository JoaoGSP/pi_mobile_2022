import React from 'react'
import { View, Image, Pressable, Text, StyleSheet } from 'react-native'
//import LogsButton from '../components/Button'

export default function LandingPage ({ navigation }) {
    return(
        <View>
            <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={require('../../assets/Logo.png')}/> 
            </View>
            <View style={styles.buttonWrapper}>
                <View>
                  <Pressable style={styles.logButton} 
                  onPress={()=> navigation.navigate('LoginPage')}>
                    <Text>Fazer Login</Text>
                  </Pressable>
                </View>
                <View style={{paddingTop: 40}}>
                  <Pressable style={styles.logButton} 
                  onPress={()=> navigation.navigate('RegisterPage')}>
                    <Text>Registrar-se</Text>
                  </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    logoWrapper:{
        paddingTop: 150,
        alignItems: 'center'
    },
    logo: {
        width: 210,
        height: 235,
        paddingTop: 27
    },
    buttonWrapper:{
        paddingHorizontal: 16,
        paddingTop: 176,
        alignItems: 'center'
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
})