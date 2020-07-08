import React, { useEffect, useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/home';

enableScreens();
const Stack = createNativeStackNavigator();

const StackHome = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="Home"
      component={HomeScreen}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  const [splashActive, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 4000);
  });
  return (
    <NavigationContainer>
      {splashActive ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Splash"
            component={SplashScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={StackHome}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
