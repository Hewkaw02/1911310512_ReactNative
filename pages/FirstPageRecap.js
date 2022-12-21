import { View, Text, TextInput, Button, StyleSheet , SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from '../components/styles'

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is First Page</Text>
        <Button title='Go To Second' style={styles.textBottomStyle} onPress={() => navigation.navigate('SP')} />
        <Button title='Go To Third' style={styles.textBottomStyle} onPress={() => navigation.navigate('TP')} />
      </View>
      <View style={{ justifyContent: 'flex-end' }}>
        <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
      </View>
    </SafeAreaView>
  )
}

export default FirstPage