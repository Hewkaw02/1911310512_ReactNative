import { View, Text, TextInput, Button, StyleSheet ,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from '../components/styles'

const ThirdPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Text style={styles.textTopStyle}>This is Third Page</Text>
      <Button title='Go To First' style={styles.textBottomStyle} onPress={() => navigation.navigate('FP')} />
      <Button title='Go To Second' style={styles.textBottomStyle} onPress={() => navigation.navigate('SP')} />
    </View>
      <View style={{ justifyContent: 'flex-end' }}>
        <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
      </View>
    </SafeAreaView>
  )
}

export default ThirdPage