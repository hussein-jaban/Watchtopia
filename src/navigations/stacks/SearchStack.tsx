import React, {useState} from 'react';
import {
  Button,
  // Image,
  // StyleSheet,
  Text,
  // TouchableOpacity,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Trend from '../../../assests/icons/trend.svg';

import {SearchProps, SearchStackParamList} from '../../types/nav.types';
// import MyTabs from '../topTabs/MyTabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import BottomComponent from '../../components/BottomComponent';
import BottomSheetWrapper from '../../components/BottomSheetWrapper';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator<SearchStackParamList>();

function All() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
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

// const styles = StyleSheet.create({
//   main: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//     marginRight: 10,
//   },
//   lineStyle: {
//     borderWidth: 0.5,
//     borderColor: 'grey',
//     marginTop: 12,
//     marginBottom: 5,
//   },
//   icon: {justifyContent: 'center', alignItems: 'center'},
//   icons: {flexDirection: 'row', justifyContent: 'space-around', marginTop: 20},
//   min: {color: 'grey'},
//   min2: {color: 'grey', marginTop: 7, fontSize: 12},
//   des: {color: 'white'},
//   des2: {color: 'white', marginLeft: 7, fontSize: 15, fontWeight: '500'},
//   title: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: '700',
//     lineHeight: 27,
//     flex: 8,
//   },
//   right: {flex: 3, color: 'white'},
//   iconDiv: {backgroundColor: 'white', borderRadius: 50, height: 30, flex: 1},
//   iconDivCo: {
//     backgroundColor: 'white',
//     borderRadius: 50,
//     height: 35,
//     width: 35,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconDivCo2: {
//     backgroundColor: 'white',
//     borderRadius: 50,
//     height: 36,
//     width: 36,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageSize: {
//     width: 150,
//     height: 150,
//     borderRadius: 10,
//     resizeMode: 'contain',
//     flex: 1,
//     marginHorizontal: 7,
//     marginRight: 10,
//   },
// });

export default SearchStack;
