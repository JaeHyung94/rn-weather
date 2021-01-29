import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the Weather...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  text: {
    color: "#898989",
    fontSize: 30
  }
});

export default Loading;
