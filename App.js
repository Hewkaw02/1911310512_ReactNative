import { StyleSheet, Text, TextInput, View } from "react-native";
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
import Count from "./components/Count";
import Txtinput1 from "./components/Txtinput1";
import UserNamePassword from "./components/UserNamePassword";

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
      {/* <MyCustomTextWith/> */}
      {/* <Count num={2} title="Click"/> */}
      {/* <Txtinput1/> */}
      <UserNamePassword/>
    </View>
  );
};



export default App;
