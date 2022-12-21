import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Footer from '../Footer';

const SecondPage = ({route}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text>Values passed fome First First Page : {route.params?.name}</Text>

      <Footer>www.tni.ac.th</Footer>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
});

export default SecondPage