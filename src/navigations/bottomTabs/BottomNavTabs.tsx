import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Close1 from '../../../assests/icons/closeIcon.svg';
import HomeStack from '../stacks/HomeStack';
import SearchStack from '../stacks/SearchStack';

const Tab = createBottomTabNavigator();

const BottomNavTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarBadge: 1,
          title: 'Home',
          tabBarIcon: () => <Close1 width={30} height={30} fill={'red'} />,
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: () => <Close1 width={30} height={30} fill={'red'} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavTabs;
