import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingPage from '../screens/LandingPage/index'
import LoginPage from '../screens/LoginPage'
import RegisterPage from '../screens/RegisterPage'

{/*Debug*/}
//import { Debug } from '../screens/Debug'
//import HomePage from '../screens/HomePage'

//<AuthStack.Screen name='Debug' component={Debug} />

const AuthStack = createNativeStackNavigator()

export default function AuthRoutes (){
  return(
  <AuthStack.Navigator initialRouteName='LandingPage' screenOptions={{headerShown: false}} >
    <AuthStack.Screen name='LandingPage' component={LandingPage}/>
    <AuthStack.Screen name='LoginPage' component={LoginPage}/>
    <AuthStack.Screen name='RegisterPage' component={RegisterPage } />
  </AuthStack.Navigator>
)}
