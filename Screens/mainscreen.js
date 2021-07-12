import { StatusBar } from "expo-status-bar";
import React from "react";
import styles from "../style";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { width: 400, height: 800 }]}>
        <Text style={styles.title}>Buzz App</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Fb");
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("In");
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}
