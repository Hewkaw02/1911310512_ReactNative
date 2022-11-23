import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import styles from "./components/styles";
import Welcome from "./components/Welcome";
import TxtInput from "./components/Txtinput";
import Practive1 from "./components/Practice1";
import CustomComponent from "./components/CustomComponent";
import Logo from "./components/Logo";
import LotsOfGreeting from "./components/LotsOfGreeting";
import MyCustomTextWith from "./components/MyCustomTextWith";

const App = () => {
  return (
    <View >
      {/* <Logo/> */}
      {/* <Practive1/> */}
      {/* <Information /> */}
      {/* <Welcome/>       */}
      {/* <TxtInput/> */}
      {/* <CustomComponent/> */}
      {/* <LotsOfGreeting/> */}
      <MyCustomTextWith/>
    </View>
  );
};



export default App;
