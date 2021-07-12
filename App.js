import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FbScreen from "./Screens/fb";
import InstaScreen from "./Screens/in"
import MainScreen from "./Screens/mainscreen";
import {createSwitchNavigator,createAppContainer} from 'react-navigation'

var Screens = createSwitchNavigator({
  M:MainScreen,
  Fb:FbScreen,
  In:InstaScreen
})
var AppContainer = createAppContainer(Screens)

export default class App extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      <AppContainer/>
      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
