import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import TelaCarrinho from '../Screens/TelaCarrinho';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigate() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#DBE8D9'},
        headerTintColor: '#0B2545',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="TelaCarrinho"
        component={TelaCarrinho}
        options={{title: 'TelaCarrinho'}}
      />
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
    </Stack.Navigator>
  );
}
