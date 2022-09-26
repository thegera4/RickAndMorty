import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Information from '../Information/Information';
import Episodes from '../Episodes/Episodes';
import axios from 'axios';

const Tab = createBottomTabNavigator();
const BASE_URL = "https://rickandmortyapi.com/api";

export default function Detail({route}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/character/${route.params.id}`)
      .then(response => setData(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Information"
      screenOptions={{
        tabBarActiveTintColor: 'darkblue',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null
        ]
      }}
    >
      <Tab.Screen 
        name="Information" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
            name="information-circle" 
            color={color} size={size} />
          )
        }}
      >
      {() => 
      (isLoading ? 
      <ActivityIndicator size="large" color="#00ff00" /> :
      <Information 
        name={data.name} 
        image={data.image}
        status={data.status}
        species={data.species}
        gender={data.gender}
      />
      )}
      </Tab.Screen>
      <Tab.Screen 
        name="Episodes" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
            name="book" color={color} 
            size={size} />
          )
        }}
      >
      {() => 
      (isLoading ? 
      <ActivityIndicator size="large" color="#00ff00" /> :
      <Episodes 
        episodes={data.episode} 
      />
      )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}