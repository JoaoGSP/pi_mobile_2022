import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//Dev components and providers
import Routes from '../src/routes/index';
import {AuthProvider} from '../src/contexts/auth';
import {MarketProvider} from './contexts/marketContext';
import SplashScreen from './pages/SplashScreen/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 3000);
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <MarketProvider>
            {showSplash ? <SplashScreen /> : <Routes />}
          </MarketProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
