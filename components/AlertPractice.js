import React from 'react';
import {
    Alert,
    Button,
    View,
    SafeAreaView,
    StyleSheet
} from 'react-native';

const AlertPractice = () => {

    const twoOptionAlert = () => {
        Alert.alert(
            "Alert Title",
            "My alert Msg",
            [
                {
                    text: 'OK',
                    // onPress: () => console.log()
                }, {
                    text: "no"
                },
            ], { cancelavle: false },
        );
    };

    const threeOptionAlert = () => {
        Alert.alert(
            'Alert Title',
            'My alert Msg',
            [
                {
                    text: 'Ask me later'
                },
                {
                    text: 'Yes'
                },
                {
                    text: 'No'
                }
            ],
            { cancelable: true }
        );
    };

    return (
        <View>
            <Button title='Button 1' onPress={twoOptionAlert} />
            <Button title='Button 2' onPress={threeOptionAlert} />
        </View>
    )
}

export default AlertPractice