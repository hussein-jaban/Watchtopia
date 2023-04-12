import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchProps, SearchStackParamList} from '../../types/nav.types';

const Stack = createNativeStackNavigator<SearchStackParamList>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Search({navigation}: SearchProps) {
  return (
    <View>
      <Text>Seach page</Text>
    </View>
  );
}

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  );
};

export default SearchStack;
