import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Init, Details} from '../screens';

type StackParamList = {
  Init: undefined;
  Details: {title: string};
};

const Stack = createNativeStackNavigator<StackParamList>();

const Routers = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Init" component={Init} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Routers;
