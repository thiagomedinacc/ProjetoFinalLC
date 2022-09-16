/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React, { Dispatch } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navigation from '../navigation';

export interface IClothingAd {
  title: string;
  type: string;
  color: string;
  originalValue: number;
  currentValue: number;
  isDiscounted: boolean;
  isInStock: boolean;
  image: any;
  isFavorite: boolean;
  
}

export interface ClothingAdProps extends IClothingAd {
  numberCols: number;
  setList: Dispatch<IClothingAd[]>;
  changeBookmark: () => void;
  onPress: any // Mudar tipo aqui, deixei any só pra deixar funcionando.
}

export default function ClothingAd({
  title,
  type,
  color,
  originalValue,
  currentValue,
  isDiscounted,
  isInStock,
  numberCols,
  image,
  isFavorite,
  onPress,
  setList,
  changeBookmark,
}: ClothingAdProps) {
  const { width } = Dimensions.get('window');
  // console.log(numberCols);
  return (
    <View
      style={[
        styles.container,
        {
          width: (width * 0.7) / numberCols,
          margin: 0.01 * width,
          opacity: !isInStock ? 0.5 : 1,
          backgroundColor: !isFavorite
            ? isDiscounted
              ? 'lightblue'
              : 'white'
            : '#f15bb5',
        },
      ]}>
      <TouchableOpacity style={styles.bookmark} onPress={changeBookmark}>
        <Icon size={30} color="#1c598a" name="bookmark" />
      </TouchableOpacity>
      <View
        style={{
          margin: 5,
          marginTop: 12,
          height: 150,
          width: '90%',
          backgroundColor: '#ffffff',
          elevation: isInStock ? 2 : 0,
          borderRadius: 4,
        }}>


        <TouchableWithoutFeedback
          style={{}} // Poderia ser touchableOpacity sem fazer as imagens sumirem?
          onPress={onPress}
        >
          <Image
            onError={({ nativeEvent: { error } }) => {
              console.log(error);
            }}
            style={{
              height: undefined,
              width: undefined,
              resizeMode: 'center',
              flex: 1,
              opacity: isInStock ? 1 : 0.2,
            }}
            source={image}


          />
        </TouchableWithoutFeedback>
      </View>
      <Text style={[styles.text, { textTransform: 'capitalize' }]}>{title}</Text>
      <Text style={styles.text}>{type}</Text>
      {isDiscounted ? (
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.text, { textDecorationLine: 'line-through' }]}>
            R${originalValue}
          </Text>
          <Text style={styles.text}>{' ➜ R$' + currentValue}</Text>
        </View>
      ) : (
        <>
          <Text style={styles.text}>R${originalValue}</Text>
        </>
      )}

      <Text style={styles.text}>{type}</Text>
      <Text style={styles.text}>{color}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#52006A',
    alignItems: 'center',
    padding: 0,
    margin: 50,
    borderColor: 'red',
    borderWidth: 0,
  },
  subContainer: {
    borderColor: '#507DBC',
    borderBottomWidth: 1,
    width: '100%',
    margin: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#BBD1EA',
  },
  text: {
    color: '#083D77',
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
  },
  bookmark: {
    position: 'absolute',
    zIndex: 2,
    right: 3.5,
    top: 5,
  },
});
