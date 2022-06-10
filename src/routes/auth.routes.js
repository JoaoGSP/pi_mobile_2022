import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Pages
import LandingPage from '../pages/LandingPage/Index';
import LoginPage from '../pages/LoginPage/Index';
import RegisterPage from '../pages/RegisterPage/Index';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="LandingPage" component={LandingPage} />
      <AuthStack.Screen name="RegisterPage" component={RegisterPage} />
      <AuthStack.Screen name="LoginPage" component={LoginPage} />
    </AuthStack.Navigator>
  );
}
