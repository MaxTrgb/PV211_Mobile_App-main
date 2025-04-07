import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import HomeScreen from '../screens/home/HomeScreen.tsx';
import ProductsScreen from '../screens/products/ProductsScreen.tsx';
import SPScreen from '../screens/products/SingleProductScreen.tsx';
import NotificationScreen from '../screens/notification/NotificationScreen.tsx';

// tabs
import BottomTab from './TabNavigation.tsx';

export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Notification: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    //     @ts-ignore
    <Stack.Navigator initialRouteName="BottomTab">
      {/* tabs */}
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      {/* static screens */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
              headerShown: true,
          }}
      />
        {/* dynamic screens */}
      <Stack.Screen name="SingleProduct" component={SPScreen} />
    </Stack.Navigator>
  );
}
