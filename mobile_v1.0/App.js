import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

//import Icon from 'react-native-vector-icons/AntDesign';
//import LogsButton from './components/Button';

import LandingPage from './src/screens/LandingPage'
import Market from './src/screens/Market'
import LoginPage from './src/screens/LoginPage'
import RegisterPage from './src/screens/RegisterPage'
import EditProfile from './src/screens/EditProfile'

import Routes from './src/routes/index'

import { AuthProvider } from './src/contexts/auth'

export default function App() {
  return (    
    <NavigationContainer> 
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'collumn',
    alignItems: 'center',
    backgroundColor: '#E5E5E5'
  }
})