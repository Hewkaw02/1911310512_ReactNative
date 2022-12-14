import { View, Text , Button } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons , Ionicons} from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            
            {/* ใช้งานไม่ได้ เป็นรูปแบบอื่น */}
            {/* <MaterialCommunityIcons name="home-circle" size={24} color="black" /> */}
            
            <Ionicons name='home' size={40} color="#00bbff"/>
            <Text style={{ textAligns: 'center' }}>
                Home Screen
            </Text>
            <Button
                title='เกี่ยวกับเรา'
                onPress={() => navigation.navigate('About',{
                    email:'rererere@tni.ac.th'
                })}
            />
        </View>
    );
}

export default HomeScreen