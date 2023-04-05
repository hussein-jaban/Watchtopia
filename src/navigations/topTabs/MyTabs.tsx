import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

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

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="all" component={All} />
      <Tab.Screen name="more" component={More} />
    </Tab.Navigator>
  );
};

export default MyTabs;
