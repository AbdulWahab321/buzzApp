import { StatusBar } from "expo-status-bar";
import React from "react";
import styles from "../style";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class FbScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { width: 500 }]}>
        <Text style={styles.title}>Facebook</Text>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("M");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
