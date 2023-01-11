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

import FirstPageRecap from './pages/FirstPageRecap'
import SecondPageRecap from './pages/SecondPageRecap'
import ThirdPageRecap from './pages/ThirdPageRecap'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="FP"
        component={FirstPageRecap}
      />
    </Stack.Navigator>
  );
}

const SecondScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="SP"
        component={SecondPageRecap} />
      <Stack.Screen
        name="TP"
        component={ThirdPageRecap} />
    </Stack.Navigator>
  );
}



function CustomDrawerContent(props) {
  const { navigation } = props
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}




 function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator 
        drawerContent={CustomDrawerContent} >
        <Drawer.Screen
          name="FP"
          options={{
            drawerLabel: 'First page Option',
            title: 'First Stack'
          }}
          component={FirstScreenStack} 
        />
        <Drawer.Screen
          name="TP"
          options={{
            drawerLabel: 'Second page Option',
            title: 'Second Stack'
          }}
          component={SecondScreenStack} 
        />
        

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App
