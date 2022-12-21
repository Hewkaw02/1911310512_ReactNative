import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import styles from '../components/styles'

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTopStyle}>This is First Page</Text>
      <Button title='Go To Second' style={styles.textBottomStyle} onPress={() => navigation.navigate('SP')} />
      <Button title='Go To Third' style={styles.textBottomStyle} onPress={() => navigation.navigate('TP')} />
    </View>
  )
}

export default FirstPage