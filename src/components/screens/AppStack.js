import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigation} from '@react-navigation/native-stack';

import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from '@expo/vector-icons';

import LoginScreen from '../screens/Login/LoginScreen';
import Checklists from './Checklists';
import Profile from './Profile';
import FavoriteGames from './FavoriteGames';
import Wishlist from './WishList';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();


const AuthStack = () => { 
    return(

        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
        screenOptions={{
            headerShown: false,
            drawerActiveTintColor:'#ffffff',
            drawerInactiveTintColor:'#333333',
            }}>
            <Drawer.Screen name="Home" component={LoginScreen} options={{
                drawerIcon:({color})=>
                (
                <Ionicons  name="home-outline" size={24} color={color}/>
                ),
                drawerActiveBackgroundColor:'#509BF590'}}/>
            <Drawer.Screen name="Profile" component={Profile}options={{
                drawerIcon:({color})=>
                (
                <Ionicons name="person-outline" size={24} color={color}/>
                ),
                drawerActiveBackgroundColor:'#E6127C90'}}/>
            <Drawer.Screen name="Favorite Games" component={FavoriteGames}options={{
                drawerIcon:({color})=>
                (
                <Ionicons name="star-outline" size={24} color={color}/>
                ),
                drawerActiveBackgroundColor:'#DFB40060'}}/>
            <Drawer.Screen name="Checklists" component={Checklists}options={{
                drawerIcon:({color})=>
                (
                <Ionicons name="checkmark-outline" size={24} color={color}/>
                ),
                drawerActiveBackgroundColor:'#00D68E90'}}/>
            <Drawer.Screen name="Wishlist" component={Wishlist}options={{
                drawerIcon:({color})=>
                (
                    <Ionicons name="cloudy-night-outline" size={24} color={color} />
                ),
                drawerActiveBackgroundColor:'#45119F90'}}/> 
        </Drawer.Navigator>


    );

};

export default AuthStack;