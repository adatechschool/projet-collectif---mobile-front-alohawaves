import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import SpotsListScreen from '../screens/spotslist';
import LoginScreen from '../screens/login';
import SpotScreen from '../screens/spot';
import SpotFormScreen from '../screens/spotform';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Spots" component={SpotsListScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={SpotScreen} options={{ headerShown: true }}/>
        <Stack.Screen name='Form' component={SpotFormScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
};

export default MainStackNavigator; 