import React from 'react';
import {
  Alert,
  Button,
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native';

const AlertExample = () => {


  const simpleAlertHandler = () => {
    alert('Hello I am Simple Alert');
  };

  const twoOptionAlertHandler = () => {
    //function to make two option  alert
    Alert.alert(
      //title
      'Hello',
      //Body
      'I am two option alert. Do you want to cancel me ?',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Yes Pressed')
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'), style: 'cancel'
        },
      ],
      // เวลาคลิก นอก Alert ทำให้มันไม่ Cancel
      { cancelable: false },
    );
  };


  const threeOptionAlertHandler = () => {
    Alert.alert(
      'Hello',
      'I am three option alert. Do you want to cancel me ?',
      [
        {
          text: 'May be',
          onPress: () => console.log('May be Pressed')
        },
        {
          text: 'Yes', onPress: () => console.log('Yes Pressed')
        },
        {
          text: 'OK', onPress: () => console.log('OK Pressed')
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button
          title="Simple Alert"  
          onPress={simpleAlertHandler} />
        <Button
          title="Alert with Two Options"
          onPress={twoOptionAlertHandler}
        />
        <Button
          title="Alert with Three Options"
          onPress={threeOptionAlertHandler}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginTop: 40,
  },
});

export default AlertExample

