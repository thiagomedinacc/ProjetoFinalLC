import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  TelaCarrinho: undefined;
  Home: undefined;
  Root: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
