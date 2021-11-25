import React from 'react';
import {View } from 'react-native';
import {Avatar, Text} from 'react-native-paper';


const FavoriteGames= () => {
    return (

    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Avatar.Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
                }}
                size={55}
              />
        <Text>Favoritos</Text>    
    </View>

 
    )
}

export default FavoriteGames;