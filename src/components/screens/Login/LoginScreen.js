import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Avatar.Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
          }}
          size={55}
        />
      </TouchableOpacity>

      <Text>primeira página</Text>
    </View>
  );
};

export default LoginScreen;
