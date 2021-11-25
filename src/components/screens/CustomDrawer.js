import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#C3F0C8" }}
      >
        <ImageBackground
          source={require("../assets/Images/CaribbeanWaters.png")}
          style={{ padding: 30 }}
        >
          <Image
            source={require("../assets/Icons/CatProfile.png")}
            style={{
              height: 60,
              width: 60,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#ffffff",
              fontSize: 18,
              fontWeight:'bold'
            }}
          >
            Serena{" "}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name="angle-double-up" size={18} color="#FDD835" />
            <Text
              style={{
                color: "#ffffff",
                fontSize: 10,
                marginLeft: 5,
              }}
            >
              Nível: 80
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex:1, backgroundColor:'white', paddingTop:10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{flexDirection:'row', marginLeft:15, paddingVertical:20}}>
      <Ionicons name="exit-outline" size={26} color="black" />
        <Text style={{marginLeft:8}} onPress={()=>{}}>Sair</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
