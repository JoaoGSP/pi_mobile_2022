import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from '../screens/HomePage'
import Market from '../screens/Market'
import EditProfile from '../screens/EditProfile'

const AppStack = createNativeStackNavigator()

export default function AppRoutes (){
  return(
  <AppStack.Navigator>
    <AppStack.Screen name='HomePage' component={HomePage}/>
    <AppStack.Screen name='Market' component={Market}/>
    <AppStack.Screen name='EditProfile' component={EditProfile}/>
  </AppStack.Navigator>
)}