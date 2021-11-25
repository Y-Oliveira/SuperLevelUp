import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight,SafeAreaView, TextInput } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


export function homeStart(props){
  return(

    <View style={{ flex: 1 }}>
      <View style={{ alignContent:'center', width:'100%', alignItems:'center' }}>
      <View style={styles.customSearchArea}>
        <Text>Teste de testes</Text>
        <TextInput style={styles.customSearchInput} placeholder='Pesquisar'></TextInput>
        <Text>Teste de testes</Text>
        </View>

        <Text>Teste de testes</Text>

      </View>

      

      
    </View>


  );

}