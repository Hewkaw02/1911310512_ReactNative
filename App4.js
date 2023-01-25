import { View, Text, Button } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text >Feed Screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
      <Button title='Toggle Drawer' onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text >Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  const { navigation } = props
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={'Notification'}
        onPress={() => alert('Link to help')} />
      <DrawerItem label={'Close Drawer'} onPress={() => navigation.closeDrawer()} />
      <DrawerItem label={'Toggle Drawer'} onPress={() => navigation.toggleDrawer()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: '#b3aa2f', width: 240
      }
    }} useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Feed' component={Feed} />
      <Drawer.Screen name='Article' component={Article} />
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
