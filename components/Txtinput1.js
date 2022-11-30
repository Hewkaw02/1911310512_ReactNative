import { 
    View, 
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    TextInput 
} from 'react-native'
import React , {useState} from 'react'

const txtinput1 = () => {

    const [userName , setUserName] = useState('');
    // const []

  return (
    <SafeAreaView style={{flex:1 , }}>
        <View style={styles.container}>
            <Text>insert any text in below input</Text>
            <TextInput 
                value={userName}
                onChangeText = {(userName)=> {
                    setUserName(userName)

                }}
                placeholder = {"Plese Input UserName"}
                style={styles.input}
            />

            
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
        },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#38e8e8'
        },
    });

export default txtinput1

