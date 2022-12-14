import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Information = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>React Native with Thai-Nichi</Text>
        <Text
          style={{
            color: "blue",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
        By.... Phitchaya Chatachot
        </Text>
        <Text style={[styles.textStyle,styles.warning]}>
          Student Id: 1911310512
          </Text>
      <Text>Major: Computer Engineer</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
  },
  warning: {
    fontWeight: "bold",
    color: "red",
  },
});