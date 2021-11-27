import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native';
import { theme } from '../global/theme';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

import HomeIcon from '../assets/home.svg';
import ProfileIcon from '../assets/profile.svg';
import SearchIcon from '../assets/search.svg';

const Tab = createBottomTabNavigator();

const TabItem = styled.TouchableOpacity`
  height: 25px;
  width: 25px;
  align-items: center;
  justify-content: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  height: 75px;
  width: 75px;
  border-radius: 40px;
  background-color: ${theme.colors.secondary};
  border: 3px solid ${theme.colors.primary};
  margin-top: -50px;
  justify-content: center;
  align-items: center;
`;

export default function Tabs() {
  const navigation = useNavigation();

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 35,
          left: 50,
          right: 50,
          elevation: 0,
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
          height: 74,
          border: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem onPress={() => goTo('Home')}>
              <HomeIcon
                style={{ opacity: focused ? 1 : 0.5 }}
                height="25"
                width="23"
              />
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <TabItemCenter activeOpacity={0.5} onPress={() => goTo('Search')}>
              <SearchIcon height="25" width="25" />
            </TabItemCenter>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem onPress={() => goTo('Profile')}>
              <ProfileIcon
                style={{ opacity: focused ? 1 : 0.5 }}
                height="23"
                width="21"
              />
            </TabItem>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
