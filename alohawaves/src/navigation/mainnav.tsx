// base de react navigation à voir si elle doit rester ici ou être intégré dans app.tsx

import React from 'react';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

//import des composants/screens
import SpotsListScreen from '../screens/spotslist';
import LoginScreen from '../screens/login'; 
import SpotScreen from '../screens/spot';
import SpotFormScreen from '../screens/spotform';

// ce code rentre en conflit avec la tab navigation et faisait qu'elle ne s'affichait pas 
// const { Navigator, Screen } = createNativeStackNavigator();

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Navigator initialRouteName='SpotsListScreen'>
//         <Screen name="Spots" component={SpotsListScreen}/>
//         <Screen name="Login" component={LoginScreen}/>
//         <Screen name="Welcome" component={SpotScreen} />
//         <Screen name='Form' component={SpotFormScreen}/>
//       </Navigator>
//     </NavigationContainer>
//   );
// };

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='SpotsListScreen'>
        <BottomTab.Screen name='SpotsListScreen' component={SpotsListScreen}
          options={({navigation}) => ({
            title: 'Spot List',
            tabBarIcon: ({ color }) => <TabBarIcon name="list-ul" color={color} />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
              </Pressable>
           ),
          })}
        />
        <BottomTab.Screen name="SpotFormScreen" component={SpotFormScreen}
          options={{
            title: 'Add a new spot',
            tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}


export default BottomTabNavigator ;