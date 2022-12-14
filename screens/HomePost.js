import { View, Text, Button } from 'react-native'
import React from 'react'

const HomePost = ({ navigation, route }) => {

    // const {postText} = route.params.post;
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>HomePost</Text>

            <Button
                title='Create Post'
                onPress={() => navigation.navigate('Creates')}
            />


            <Text style={{margin:10}}> Post : {route.params?.post}</Text>
        </View>
    )
}

export default HomePost