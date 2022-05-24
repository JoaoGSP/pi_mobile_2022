import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';


import LandingPage from '../src/screens/LandingPage';
import Market from '../src/screens/Market';
import LoginPage from '../src/screens/LoginPage';
import RegisterPage from '../src/screens/RegisterPage';
import EditProfile from '../src/screens/EditProfile';

import Routes from '../src/routes/index';

import { AuthProvider } from '../src/contexts/auth';
import { MarketProvider } from './contexts/marketContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
        <MarketProvider>
          <Routes />
        </MarketProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'collumn',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
});
