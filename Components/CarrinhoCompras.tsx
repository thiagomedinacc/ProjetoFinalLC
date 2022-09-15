import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CarrinhodeComprasProps {
  quantidade: number;
}

export default function CarrinhoDeCompras(props: CarrinhodeComprasProps) {
  return (
    <View>
      <TouchableOpacity>
        <View style={{}}>
          <Text style={styles.quantidade}> {props.quantidade}</Text>
          <Icon size={25} color="#222" name="shopping-cart" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  quantidade: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: 'red',
    margin: -5,
  },
});
