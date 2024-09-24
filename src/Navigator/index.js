import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Module/SplashScreen';
import Login from '../Module/Login';
import OTPverification from '../Module/OTP';
import ForgotPassword from '../Module/ForgotPassword';
import ResetPassword from '../Module/ResetPassword';
import TutorialScreen from '../Module/TutorialScreen';
import AddPhoneNumber from '../Module/PhoneNumber'
import MyTab from '../Navigator/BottomTab'
const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
         <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="TutorialScreen"
          component={TutorialScreen}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Login"
         component={Login}
           options={{ headerShown: false }}
        />  
       <Stack.Screen
          name="OTPVerification"
          component={OTPverification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="AddPhoneNumber"
          component={AddPhoneNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={MyTab} 
          options={{ headerShown: false }}
        /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
