import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import HomeScreen from '../screens/home/HomeScreen.tsx';
import ProductsScreen from '../screens/products/ProductsScreen.tsx';
import NotificationScreen from '../screens/notification/NotificationScreen.tsx';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#090808',
        // headerShown: false,
      }}
        initialRouteName="Home"
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen}/>
    </Tab.Navigator>
  );
};

export default BottomTab;
