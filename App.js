import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={
          {
            headerTintColor: "green",
            //headerShown: false,
            headerStyle: {
              backgroundColor: "lightblue",
              alignItems: "center",
              justifyContent: "center",
            },
            title: "RickAndMorty App"
          }
        }/>
        <Stack.Screen 
        name="Detail" 
        component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}