import React from "react";
import { StatusBar, Text, View } from "react-native";

export default function Welcome() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome</Text>
      <StatusBar />
    </View>
  );
}
