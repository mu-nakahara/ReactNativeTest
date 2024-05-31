import React from "react";
import { Button, Text, View } from "react-native";

export const DetailScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Text>Hello</Text>
    </View>
  );
};