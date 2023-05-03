import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SearchStackParamList} from '../../types/nav.types';
import Search from '../../screens/Search';

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Search} />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  );
};

export default SearchStack;
