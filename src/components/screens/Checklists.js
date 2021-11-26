import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-paper";

const Checklists = ({ navigation }) => {
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
      <Text>Listas</Text>
    </View>
  );
};

export default Checklists;
