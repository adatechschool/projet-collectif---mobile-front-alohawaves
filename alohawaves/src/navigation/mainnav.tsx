// base de react navigation à voir si elle doit rester ici ou être intégré dans app.tsx

import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

//import des composants/screens
import SpotsListScreen from '../screens/spotslist';
import LoginScreen from '../screens/login';
import SpotScreen from '../screens/spot';
import SpotFormScreen from '../screens/spotform';

import MainStackNavigator from './appstack';

// ce code rentre en conflit avec la tab navigation et faisait qu'elle ne s'affichait pas 
const Tab = createBottomTabNavigator();

/*
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Spots" component={SpotsListScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={SpotScreen} />
        <Stack.Screen name='Form' component={SpotFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
*/

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator initialRouteName='SpotsListScreen'>
        <Tab.Screen name='Spots' component={MainStackNavigator}
          options={({ navigation }) => ({
            title: 'Spots',
            tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
            /*headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
              </Pressable>
            ),*/
          })}
        />
        <Tab.Screen name="Form" component={SpotFormScreen}
          options={{
            title: 'Add a new spot',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}


export default BottomTabNavigator;