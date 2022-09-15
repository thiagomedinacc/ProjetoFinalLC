import React from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      {/* <Text> Tela inicial</Text> */}
    </SafeAreaProvider>
  );
}
