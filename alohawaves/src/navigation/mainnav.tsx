// base de react navigation à voir si elle doit rester ici ou être intégré dans app.tsx

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import des composants/screens
import SpotsListScreen from '../screens/spotslist';
import LoginScreen from '../screens/login'; 
import SpotScreen from '../screens/spot';


const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='SpotsListScreen'>
        <Screen name="Spots-List" component={SpotsListScreen}/>
        <Screen name="Login" component={LoginScreen}/>
        <Screen name="Welcome" component={SpotScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})