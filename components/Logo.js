import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web';
import Users from './Users';


const Logo = () => {

    const textLogo = "React Native by Phitchaya";
    const isTH = false;

    const showData = ()=> {
        alert("Hello button");
    }


  return (
    <View style={{flex:1 ,justifyContent:'center'}}>
      <Text>{textLogo}</Text>
        {
        //  isTH && <Text> ภาษาไทย </Text>   
            isTH ? <Text> wow wow </Text> : <Text> wew wew </Text>

        }
        <Button title = "Click ME"  onPress= {showData}/>

        <Users/>
    </View>

    
  )
}

export default Logo