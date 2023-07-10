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
          paddingHorizontal: 16,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 34,
        },
      }}>
      <Stack.Screen
        name="Init"
        component={Init}
        options={{title: 'Repositórios'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Routers;
