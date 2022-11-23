import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const CustomText = (props)=>{


    return(
        <View style={{alignItems:'center'}}>

                <text> Your First Name is {props.fname} and Last Name is {props.lname}</text>

        </View>
    )
}


const MyCustomTextWith = () => {
  return (

    <SafeAreaView style={{flex:1 , alignItems:'center'}}>

        <CustomText fname="Phitchaya" lname="Chatachot"/>
        <CustomText fname="asdfasdf" lname="qwerqwerq"/> 


    </SafeAreaView>
  )
}

export default MyCustomTextWith