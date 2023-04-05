import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchProps, SearchStackParamList} from '../../types/nav.types';
// import MyTabs from '../topTabs/MyTabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator<SearchStackParamList>();

function All() {
  return (
    <View>
      <Text>all Screen</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
}
function More() {
  return (
    <View>
      <Text>more Screen</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Search({navigation}: SearchProps) {
  return (
    // <View style={{marginTop: 50}}>
    //   <Text>Seach page</Text>
    <Tab.Navigator>
      <Tab.Screen name="all" component={All} />
      <Tab.Screen name="more" component={More} />
    </Tab.Navigator>
    // </View>
  );
}

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Search} />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  );
};

export default SearchStack;
