import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Information = () => {
  return (
    <View style={styles.container}>
      <Text>React Native with Thai-Nichi</Text>
      <Text>By.... Phitchaya Chatachot</Text>
      <Text>Student Id: 1911310512</Text>
      <Text>Major: Computer Engineer</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#add8e6",
      alignItems:"center",
      justifyContent:'center'
    }
  })