import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet  } from 'react-native';

import { OfferCards } from '../components/UI/Cards';

import { Text, View } from '../components/Themed';
import { DEMO_ITEMS } from "../constants/dummyData";

import { RootTabScreenProps } from '../types';




export default function OfferItemScreen({ navigation }: RootTabScreenProps<'Offer'>) {
  return (
    <View style={styles.container}>
     <Text  style={{
        fontSize: 30 ,
        fontWeight: "bold" ,
        margin: 20 ,
     }}> Offer Items From you listing </Text>

          {
        DEMO_ITEMS.map( item => (
              <OfferCards itemName={item.name!} itemImage={item.image!} itemId={item.id} 
              navigation={navigation}                 
                />
          
        ))
       } 
     
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'flex-start',
    flexDirection: "column",
    justifyContent: 'center', 
  },
  text : {
 
  }, 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
