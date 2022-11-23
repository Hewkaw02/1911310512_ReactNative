import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props)=>{

    // const {name} = props;

    return(
        <View style={{alignItems:'center'}}>

            <text> Hello : {props.name}</text>
            {/* <text> Hello : {props.name}</text>  */}
        </View>
    )

}

const LotsOfGreeting = () => {
  return (
    <View style={{flex:1, alignItems:'center',top:50 }}>
    
    <Greeting name="Marry Christmas"/>
    <Greeting name="Happy New Year"/>
    <Greeting name="Songkran Fev"/>
    </View>
  )
}

export default LotsOfGreeting