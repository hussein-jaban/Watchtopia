import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import {HomeStackParamList} from '../../types/nav.types';
import Details from '../../screens/Details';
import MovieGenre from '../../screens/MovieGenre';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="MovieGenre" component={MovieGenre} />
    </Stack.Navigator>
  );
};

export default HomeStack;
