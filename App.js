import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AccountNavigation from './src/navigation/AccountNavigation';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AccountNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
