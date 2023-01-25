import { View, Text, Button } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import HomeScreen2 from './screens/HomeScreen2';
import SettingScreen from './screens/SettingScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function HomePage(){
  return(
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home Screen" component={HomeScreen2} />
    </Stack.Navigator>
  )
}

function SettingPage(){
  <Stack.Navigator
  initialRouteName="Home"
  screenOptions={{
    headerShown: false,
  }}
>
  <Stack.Screen name="Setting Screen" component={SettingScreen} />
</Stack.Navigator>
}


function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused
              ? "ios-home"
              : "ios-home-outline";
          } else if (route.name === "Settings") {
            iconName = focused 
            ? "ios-list" 
            : "ios-list-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "blue",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen2} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return(
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 240,
        },drawerActiveTintColor:"red"
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={MyTab} />
      <Drawer.Screen name="Setting" component={SettingScreen} />

    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}


export default App

