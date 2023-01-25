import { View, Text, Button } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

import HomeScreen2 from './screens/HomeScreen2'
import ProductScreen from './screens/ProductScreen'


function CustomDrawerContent(props) {
  const { navigation } = props
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label={'Close Drawer'} onPress={() => navigation.closeDrawer()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: '#fff', width: 240
      }
    }} useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Home' component={HomeScreen2} />
      <Drawer.Screen name='Product' component={ProductScreen} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}

export default App
