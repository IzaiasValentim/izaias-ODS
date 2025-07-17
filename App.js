// App.js (apenas a parte relevante do Stack.Navigator)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen'; // Importe a ChatScreen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Adicione esta tela
          name="Chat"
          component={ChatScreen}
          options={{ title: 'Conversa ODS', headerTitleAlign: 'center' }} // Título do cabeçalho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}