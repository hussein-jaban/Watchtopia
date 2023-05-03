import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SearchProps, SearchStackParamList} from '../../types/nav.types';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BottomSheetWrapper from '../../components/BottomSheetWrapper';
import {useQuery} from '@tanstack/react-query';
import {getPopularTv} from '../../services/api';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator<SearchStackParamList>();

function All() {
  const {data} = useQuery({
    queryKey: ['repoData'],
    queryFn: getPopularTv,
  });
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: '#000', flex: 1}}>
      <Text>all Screen</Text>
      <Button title="Open" onPress={() => setIsOpen(!isOpen)} />
      <BottomSheetWrapper visible={isOpen} onClose={onClose} />
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
