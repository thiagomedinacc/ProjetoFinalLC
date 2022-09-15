/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer} from '@react-navigation/native';
// import {RootStackParamList} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';

// import {RootStackParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Navigate from './Navigate';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
// const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return <Navigate />;
  // return <Text> gfdfgfdg fgdgfdg</Text>;
}
