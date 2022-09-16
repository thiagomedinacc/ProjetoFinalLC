/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useState, type PropsWithChildren} from 'react';
 import {
   Dimensions,
   FlatList,
   Image,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 import DropDownPicker from 'react-native-dropdown-picker';
 
 import {SafeAreaProvider} from 'react-native-safe-area-context';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import CarrinhoDeCompras from '../Components/CarrinhoCompras';
 import ClothingAd, {IClothingAd} from '../Components/ClothingAd';
import Navigation from '../navigation';
import { RootStackScreenProps } from '../types';
 
 const item1: IClothingAd = {
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
 
 const item2: IClothingAd = {
   title: 'Calça jeans',
   type: 'Calça',
   color: 'brown',
   originalValue: 150,
   currentValue: 125,
   isDiscounted: true,
   isInStock: true,
   image: require('../resources/calca_jeans_marrom.jpg'),
   isFavorite: false,
 };
 
 const item3: IClothingAd = {
   title: 'All-star cano longo',
   type: 'Calçado',
   color: 'purple',
   originalValue: 200,
   currentValue: 190,
   isDiscounted: true,
   isInStock: false,
   image: require('../resources/all_start_cano_longo.jpg'),
   isFavorite: false,
 };
 
 
 const item4: IClothingAd = {
   title: 'Jaqueta Masculina Denim ',
   type: 'Jaqueta',
   color: 'blue',
   originalValue: 300,
   currentValue: 300,
   isDiscounted: false,
   isInStock: true,
   image: require('../resources/jaqueta_denim_blue.jpg'),
   isFavorite: false,
 };
 
 const items: IClothingAd[] = [item1, item2, item4, item3];
 
 const Home = ( {navigation, route} : RootStackScreenProps<'Home'>) => {
   const [list, setList] = useState(items);
   const [filteredList, setfilteredList] = useState(list);
 
   const [numberCols, setNumberCols] = useState(1);
   console.log(Dimensions.get('window').height);
   function handleNumberCols() {
     if (numberCols === 1) {
       setNumberCols(2);
     } else {
       setNumberCols(1);
     }
   }
 
   function changeBookmark(index: number) {
     let current = filteredList;
     current[index].isFavorite = !current[index].isFavorite;
     setfilteredList(_prev => [...current]);
   }
 
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState<string[]>([]);
   const [itemsSelect, setItemsSelect] = useState([
     {label: 'Camisa', value: 'Camisa'},
     {label: 'Calça', value: 'Calça'},
     {label: 'Jaqueta', value: 'Jaqueta'},
     {label: 'Calçado', value: 'Calçado'},
   ]);
   const [quantidadeCompras, setQuantidadeCompras] = useState(0);
 
   function handleSelect() {
     let filter = list.filter(item => value.includes(item.type));
     console.log(filter.length);
     setfilteredList(_prev => filter);
   }
 
   return (
     <SafeAreaView style={{paddingBottom: 199.8}}>
       <View
         style={{
           flexDirection: 'row',
           borderWidth: 0,
           alignContent: 'center',
           justifyContent: 'space-around',
           paddingTop: 15,
         }}>
         <View
           style={{
             width: '25%',
             height: '100%',
             flexDirection: 'row',
             paddingTop: 5,
           }}>
           <Text style={{color: '#333'}}>{'Swap '}</Text>
           <Text style={{color: '#13b6a0'}}>Vest</Text>
         </View>
 
         <TouchableOpacity>
           <View style={[styles.buttonView, {width: 100, margin: 0}]}>
             <Text style={[styles.text, {fontSize: 15}]}>Fazer Loginaaaa</Text>
           </View>
         </TouchableOpacity>
         <CarrinhoDeCompras 
         quantidade={quantidadeCompras} 
        onPress = { () => navigation.navigate('TelaCarrinho')}
         />
       </View>
       <View
         style={{
           elevation: 100,
           width: '60%',
           alignSelf: 'center',
           minHeight: 100,
         }}>
         <DropDownPicker
           multiple
           placeholder="Selecione uma categoria"
           open={open}
           value={value}
           items={itemsSelect}
           setOpen={setOpen}
           setValue={setValue}
           onChangeValue={handleSelect}
           setItems={setItemsSelect}
           containerStyle={{elevation: 150}}
           zIndex={1000}
         />
       </View>
       {open || (
         <>
           <TouchableOpacity onPress={handleNumberCols}>
             <View style={styles.buttonView}>
               <Text style={styles.text}>Change Number of Columns</Text>
             </View>
           </TouchableOpacity>
           <View style={{borderColor: 'black', borderWidth: 0}}>
             <FlatList
               contentContainerStyle={{
                 alignSelf: 'center',
                 alignItems: 'center',
                 width: '90%',
                 // borderColor: 'pink',
                 // borderWidth: 3,
               }}
               data={filteredList}
               numColumns={numberCols}
               key={numberCols}
               renderItem={({item, index}) => (
                 <ClothingAd
                   numberCols={numberCols}
                   {...item}
                   setList={setList}
                   changeBookmark={() => changeBookmark(index)}
                   onPress = {() => navigation.navigate('TelaDetalheProdutos')} // Falta mandar com a roupa específica em si
                 />
               )}
             />
           </View>
         </>
       )}
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   text: {
     color: '#F0F5F9',
     fontFamily: 'sans-serif-condensed',
     textAlign: 'center',
     fontSize: 22,
   },
   buttonView: {
     margin: 5,
     alignSelf: 'center',
     width: '72%',
     borderWidth: 4,
     backgroundColor: 'black',
     borderColor: '#C9D6DF',
     borderRadius: 50,
     padding: 1,
   },
 });
 
 export default Home;
 