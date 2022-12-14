import { Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const CreatePost = ({navigation}) => {

    const [postText, setPostText] = useState('');

    return (
        <>
            <TextInput
                multiline
                placeholder='Please Text here!!!!'
                style={{
                    height: 200,
                    borderColor: 'white',
                    padding: 10
                    
                }}
                value = {postText}
                onChangeText={setPostText}
            />

            <Button title='Done' onPress={()=>{
                navigation.navigate('Home',{
                    post:postText
                })
            }}/>
        </>
    )
}

export default CreatePost