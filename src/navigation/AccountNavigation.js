import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import NewEventScreen from '../screens/NewEventScreen';

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Iniciar Sesión', headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Registrarse', headerShown: false}}
      />
      <Stack.Screen
        name="NewEvent"
        component={NewEventScreen}
        options={{title: 'Nuevo Evento', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
