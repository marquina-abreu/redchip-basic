import React, { useEffect, useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { screensName } from '../utils/constants';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/detail';

enableScreens();
const Stack = createNativeStackNavigator(); // stack navite!

const StackHome = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={screensName.HOME}
      component={HomeScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={screensName.DETAIL}
      component={DetailScreen}
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
            name={screensName.SPLASH}
            component={SplashScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={screensName.HOME}
            component={StackHome}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
