// base de react navigation à voir si elle doit rester ici ou être intégré dans app.tsx

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import des composants/screens
import LoginScreen from './src/screens/login'; // ne semble pas reconnaître le fichier.tsx, à priori pas normal à voir avec une encadrante
import SpotScreen from './src/screen/spots.tsx';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Login" component={LoginScreen}/>
        <Screen name="Welcome" component={SpotScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})