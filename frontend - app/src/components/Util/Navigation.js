import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import SignIn from '../../screens/SignIn';
import OTPScreen from '../../screens/OTPScreen';
import Reports from './Reports';
import ReportItem from './ReportItem';
import RequestsScreen from './RequestsScreen';
import RequestsItem from './RequestsItem';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
            <Stack.Screen name="OTPScreen" component={OTPScreen}></Stack.Screen>
            <Stack.Screen name="Reports" component={Reports}></Stack.Screen>
            <Stack.Screen name="ReportItem" component={ReportItem}></Stack.Screen>
            <Stack.Screen name="RequestsScreen" component={RequestsScreen}></Stack.Screen>
            <Stack.Screen name="RequestsItem" component={RequestsItem}></Stack.Screen>


        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;