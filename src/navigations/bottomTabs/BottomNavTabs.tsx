import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Trend from '../../../assests/icons/trend.svg';
import Home from '../../../assests/icons/home-full.svg';
import HomeStack from '../stacks/HomeStack';
import SearchStack from '../stacks/SearchStack';

const Tab = createBottomTabNavigator();

const BottomNavTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#505051',
        headerShown: false,
        tabBarStyle: {backgroundColor: '#151515', borderTopWidth: 0},
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          // tabBarBadge: 1,
          title: 'Home',
          tabBarIcon: ({color}) => <Home width={30} height={30} fill={color} />,
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStack}
        options={{
          title: 'Trending',
          tabBarIcon: ({color}) => (
            <Trend width={30} height={30} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavTabs;
