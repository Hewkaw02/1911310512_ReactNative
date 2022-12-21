import { View, Text, Button } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={Ionicons} iconSize={30} color='white' {...props} />
);

const HomeScreen = ({ navigation }) => {

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>

                    <Item
                        title="ลงทะเบียน"
                        iconName="person-add-outline"
                        onPress={() => alert('ลงทะเบียน')}
                    />

                </HeaderButtons>
            ),

            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>

                    <Item
                        title="menu"
                        iconName="menu"
                        onPress={() => alert('เมนูคำสั่ง')}
                    />

                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

            {/* ใช้งานไม่ได้ เป็นรูปแบบอื่น */}
            {/* <MaterialCommunityIcons name="home-circle" size={24} color="black" /> */}

            <Ionicons name='home' size={40} color="#00bbff" />
            <Text style={{ textAligns: 'center' }}>
                Home Screen
            </Text>
            <Button
                title='เกี่ยวกับเรา'
                onPress={() => navigation.navigate('About', {
                    email: 'rererere@tni.ac.th'
                })}
            />
        </View>
    );
}

export default HomeScreen