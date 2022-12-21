import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import styles from '../components/styles'

const SecondPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTopStyle}>This is Second Page</Text>
      <Button title='Go To First' style={styles.textBottomStyle} onPress={() => navigation.navigate('FP')} />
      <Button title='Go To Third' style={styles.textBottomStyle} onPress={() => navigation.navigate('TP')} />
    </View>
  )
}

export default SecondPage