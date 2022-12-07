import { StyleSheet, Text, View, SafeAreaView, Touchable, TouchableHighlight , Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Separator = () => (<View style={styles.buttonIconSeparatorStyle} />)

const TouchablePractice = () => {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}>

                    <Image
                        source={require('../assets/facebook.png')}
                        style={styles.buttonImageIconStyle}
                    />
                    <Separator />
                    <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonGPlusStyle}>

                    <Image
                        source={require('../assets/google-plus.png')}
                        style={styles.buttonImageIconStyle}
                    />
                    <Separator />
                    <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>

                </TouchableOpacity>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});

export default TouchablePractice