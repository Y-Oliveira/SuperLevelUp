import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/components/screens/HomeScreen';

import AuthStack from './src/components/routes/AuthStack';
import AppStack from './src/components/screens/AppStack';

 function App() {
    return (

        <NavigationContainer>
          <AppStack/>
          {/* <AuthStack /> */}
        </NavigationContainer>

    );


}

export default App;

