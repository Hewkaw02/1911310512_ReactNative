import { View, Text , StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React,{useState}from 'react'

const UserNamePassword = () => {


    const [textName , setName] = useState("");
    const [textEmail , setEmail] = useState("");
    const checkTextInput = () => {

        //Check for the Name TextInput
        if (!textName.trim()) {
            alert('Please Enter Name');
            return;

        }else if(!textEmail.trim()){
            alert('Please Enter Email');

            return;
        }else{
            alert('Success');
        }
    //Check for the Email TextInput
    //Checked Successfully
    //Do whatever you want

        };

    
  return (
    <SafeAreaView>
        <View style={{padding:20}}>
            <TextInput 
            value={textName}
            placeholder='Enter Name'
            onChangeText={textName => {setName(textName)}}
            style={styles.textInputStyle}/>
            <TextInput 
            value={textEmail}
            onChangeText={textEmail => {setEmail(textEmail)}}
            placeholder='Enter Emails'
            style={styles.textInputStyle }/>
            <Button   
                title='Submit' 
                onPress={()=> checkTextInput()}
                />

                {/* <Text>{textEmail}</Text> */}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 35,
    },
    textInputStyle:{
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth:0.5,
        marginTop:15,
    },
});

export default UserNamePassword