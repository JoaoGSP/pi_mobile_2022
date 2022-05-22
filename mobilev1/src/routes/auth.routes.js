import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingPage from '../screens/LandingPage'
import LoginPage from '../screens/LoginPage'
import RegisterPage from '../screens/RegisterPage'

{/*Debug*/}
import HomePage from '../screens/HomePage'

const AuthStack = createNativeStackNavigator()

export default function AuthRoutes (){
  return(
  <AuthStack.Navigator>
    <AuthStack.Screen name='LandingPage' component={LandingPage}/>
    <AuthStack.Screen name='LoginPage' component={LoginPage}/>
    <AuthStack.Screen name='RegisterPage' component={RegisterPage}/>
  </AuthStack.Navigator>
)}