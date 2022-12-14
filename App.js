import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import HomePost from './screens/HomePost'
import CreatePost from './screens/CreatePost'
import SecondPage from './screens/SecondPage'
import FirstPage from './screens/FirstPage'


// function HomeScreen({navigation}){
//   return(
//       <View style={{flex:1 , alignItem: "center" , justifyContent:"center"}}>
//         <Text style={{textAlign:'center'}}>
//         Home Screen
//         </Text>
//         <Button
//         title='เกี่ยวกับเรา'
//         onPress={()=>navigation.navigate('About')}
//         />     
//       </View>
//   );
// }

// function AboutScreen(navigation){
//   return(
//       <View style={{flex:1 , alignItem: "center" , justifyContent:"center"}}>
//         <Text style={{textAlign:'center'}}>
//         เกี่ยวกับเรา
//         </Text>
//       </View> 
//   );
// }

const Stack = createNativeStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle:{
            backgroundColor:'#00bbff'
          },
          headerTintColor:'#ffff',
          headerTitleStyle:{
            fontWeight:'bold'
          },headerTitleAlign:'center'
        }}
      >

        {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
        {/* <Stack.Screen name='About' component={AboutScreen} /> */}

        {/* <Stack.Screen name='Home' component={HomePost} />
        <Stack.Screen name='Creates' component={CreatePost} /> */}
        
        <Stack.Screen name='First' component={FirstPage} />
        <Stack.Screen name='Second' component={SecondPage} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App