import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface Props extends TouchableOpacityProps {
  text: string;
}

export default function Button({text}: Props) {
  return (
    <TouchableOpacity>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
