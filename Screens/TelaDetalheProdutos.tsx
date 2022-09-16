import { Text, Image, StyleSheet, View, Touchable, TouchableOpacity } from 'react-native'
import { IClothingAd } from '../Components/ClothingAd';
import Navigation from '../navigation';
import { RootStackParamList, RootStackScreenProps } from '../types';

export default function TelaDetalheProdutos( {navigation, route} : RootStackScreenProps<'TelaDetalheProdutos'>  ) {

    const produtoFake: IClothingAd = {
        title: 'Camisa social',
        type: 'Camisa',
        color: 'white',
        originalValue: 100,
        currentValue: 80,
        isDiscounted: true,
        isInStock: true,
        image: require('../resources/camisa_social_branca.jpg'),
        isFavorite: false,
    };


    return (
        <View style = {styles.container}>
            <TouchableOpacity 
            style = {styles.botaoVoltar}
            onPress = { () => navigation.navigate('Home')}
            > 
                <Text>AAAAA </Text>
            </TouchableOpacity>
            <Text> Produto escolhido: {produtoFake.title}</Text>
            <View style = {styles.containerImagem}> 
                <Image style={styles.imagem} source={produtoFake.image}  />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    imagem: {
        width: 125,
        height: 125,
        margin: 10, 
    },
    containerImagem: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    botaoVoltar: {
        backgroundColor: 'blue'
    }
})