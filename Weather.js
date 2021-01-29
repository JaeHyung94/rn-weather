import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "thunderstorm-outline",
    colors: ["#485563", "#29323c"],
    title: "Thunderstorm",
    subtitle: "Be careful!"
  },
  Drizzle: {
    iconName: "rainy-outline",
    colors: ["#43c6ac", "#191654"],
    title: "Drizzle",
    subtitle: "Take your umbrella"
  },
  Rain: {
    iconName: "rainy-outline",
    colors: ["#4b6cb7", "#182848"],
    title: "Rain",
    subtitle: "Take your umbrella"
  },
  Snow: {
    iconName: "snow-outline",
    colors: ["#d3cce3", "#e9e4f0"],
    title: "Snow",
    subtitle: "Let's make snowman!"
  },
  Mist: {
    iconName: "rainy-outline",
    colors: ["#abbaab", "#ffffff"],
    title: "Mist",
    subtitle: "Be careful!"
  },
  Smoke: {
    iconName: "cloud-sharp",
    colors: ["#000000", "#434343"],
    title: "Smoke",
    subtitle: "Put on Mask"
  },
  Haze: {
    iconName: "cloud-outline",
    colors: ["#ada996", "#f2f2f2", "#dbdbdb", "#eaeaea"],
    title: "Haze",
    subtitle: "Take your umbrella"
  },
  Dust: {
    iconName: "cloudy",
    colors: ["#ba8b02", "#181818"],
    title: "Dust",
    subtitle: "Put on mask"
  },
  Fog: {
    iconName: "cloudy-outline",
    colors: ["#8e9eab", "#eef2f3"],
    title: "Fog",
    subtitle: "Be careful!"
  },
  Sand: {
    iconName: "cloudy-sharp",
    colors: ["#6d6027", "#d3cbb8"],
    title: "Sand",
    subtitle: "Put on mask"
  },
  Ash: {
    iconName: "cloudy-sharp",
    colors: ["#1e130c", "#9a8478"],
    title: "Ash",
    subtitle: "Put on mask"
  },
  Squall: {
    iconName: "rainy-sharp",
    colors: ["#948e99", "#2e1437"],
    title: "Squall",
    subtitle: "Take your umbrella"
  },
  Tornado: {
    iconName: "thunderstorm-outline",
    colors: ["#485563", "#29323c"],
    title: "Tornado",
    subtitle: "Be careful!"
  },
  Clear: {
    iconName: "sunny-outline",
    colors: ["#83a4d4", "#b6fbff"],
    title: "Clear",
    subtitle: "Weather is so Clear"
  },
  Clouds: {
    iconName: "cloud-outline",
    colors: ["#606c88", "#3f4c6b"],
    title: "Clouds",
    subtitle: "Weather is cloudy"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].colors}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Ionicons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 36,
    marginTop: 15,
    color: "white"
  },
  title: {
    color: "gray",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subTitle: {
    color: "gray",
    fontWeight: "600",
    fontSize: 24
  }
});
