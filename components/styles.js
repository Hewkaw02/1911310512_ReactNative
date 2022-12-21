import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    },
    warning:{
        color:'red',
        fontSize:20
    },
    normalText:{
        fontSize:15,
        color:'blue'
    },
    textTopStyle:{
        fontSize: 25,
        textAlign: "center",
        marginBottom: 16
    },
    textBottomStyle:{
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    },
});

export default styles;