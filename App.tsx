import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/Register';
import ForgotPasswordScreen from './src/components/ForgotPassword';
import HomeScreen from './src/components/Home';
import CarsScreen from './src/components/Cars';
import CarDetailsScreen from './src/components/CarDetails';
import RentalScreen from './src/components/Rental';
import RentalsScreen from './src/components/Rentals';
import ProfileScreen from './src/components/Profil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0f172a',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Тіркелу' }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: 'Құпия сөзді қалпына келтіру' }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cars"
          component={CarsScreen}
          options={{ title: 'Көліктер' }}
        />

        <Stack.Screen
          name="CarDetails"
          component={CarDetailsScreen}
          options={{ title: 'Көлік туралы' }}
        />

        <Stack.Screen
          name="Rental"
          component={RentalScreen}
          options={{ title: 'Көлікті жалға алу' }}
        />

        <Stack.Screen
          name="Rentals"
          component={RentalsScreen}
          options={{ title: 'Менің броньдарым' }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Профиль' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}