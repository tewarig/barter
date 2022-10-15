import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet  } from 'react-native';

import { OfferCards } from '../components/UI/Cards';

import { Text, View } from '../components/Themed';
import { DEMO_ITEMS } from "../constants/dummyData";




export default function OfferItemScreen() {
  return (
    <View style={styles.container}>
     <Text> Offer Items From you listing </Text>

          {
        DEMO_ITEMS.map( item => (
              <OfferCards itemName={item.name!} itemImage={item.image!} itemId={item.id}                
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
