import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import styles from "./components/styles";
import Welcome from "./components/Welcome";
import TxtInput from "./components/Txtinput";
import Practive1 from "./components/Practice1";
import CustomComponent from "./components/CustomComponent";

const App = () => {
  return (
    <View>

      <Practive1/>
      {/* <Information /> */}
      {/* <Welcome/>       */}
      {/* <TxtInput/> */}
      {/* <CustomComponent/> */}
    </View>
  );
};



export default App;
