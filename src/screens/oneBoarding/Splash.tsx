import React from "react";
import { StatusBar, Text, View } from "react-native";

export default function Splash() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Splash</Text>
      <StatusBar />
    </View>
  );
}
