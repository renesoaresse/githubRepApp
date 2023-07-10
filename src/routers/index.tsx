import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Init, Details} from '../screens';

const Stack = createNativeStackNavigator();

const Routers = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="InitScreen" component={Init} />
      <Stack.Screen name="DetailsScreen" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Routers;
