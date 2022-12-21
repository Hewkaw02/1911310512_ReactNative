// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPageRecap from './pages/FirstPageRecap'
import SecondPageRecap from './pages/SecondPageRecap'
import ThirdPageRecap from './pages/ThirdPageRecap'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="FirstPage"
          component={FirstPageRecap}
        />
      </Stack.Navigator>
  );
}

const SecondScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="SecondPage"
        component={SecondPageRecap}/>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPageRecap}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      useLegacyImplementation
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{
            drawerLabel: 'First page Option',
            title: 'First Stack'
          }}
          component={FirstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{
            drawerLabel: 'Second page Option',
            title: 'Second Stack'
          }}
          component={SecondScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;