import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import React from 'react'


const Separator = () => (<View style={styles.separator} />)



const ButtonExample = () => {
    return (

        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.</Text>
                <Button
                    title='Press me'
                    onPress={() => alert('Simple Button pressed')} />

            </View>

            <Separator />

            <View>
                <Text style={styles.title}>Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button. All interaction for the component are disabled.
                    This layout strategy lets the title define the width of the button.</Text>
                <Button
                    title='Press me'
                    color='#f195ff'
                    onPress={() => alert('Button with adjusted color pressed')} />
            </View>

            <Separator />

            <View>

                <Text style={styles.title}>This layout strategy lets the title define the width of the button.</Text>

                <Button
                    title='Press me'
                    disabled // Button can't be press
                />

            </View>

            <Separator />

            <View>
                <Text style={styles.title}></Text>
                <View style={styles.fixToText}>
                    <Button 
                    title='left button'
                    onPress={()=> alert('left button pressed')}/>
                    <Button 
                    title='right button'
                    onPress={()=> alert('right button pressed')}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default ButtonExample