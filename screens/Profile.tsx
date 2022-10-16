import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Center, HStack , VStack } from 'native-base';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { DEMO_ITEMS } from '../constants/dummyData';
import { OfferCards } from '../components/UI/Cards';
import { RootTabScreenProps } from '../types';

export default function Profile({ navigation }: RootTabScreenProps<'Profile'>) {
  return (
    <View style={styles.container}>
      <VStack>
    
       <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
        uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
      }}></Avatar>
      <Center>
      <Text  style={styles.title}>Gaurav Tewari </Text>
      </Center>

       <View style={{
        marginLeft: "10%"
       }}>

     
      <Center>
      <Text  style={{
        fontSize: 30 ,
        fontWeight: "bold" ,
        marginLeft: "-10%"
       
     }}> Items From you listing </Text>
      </Center>

          {
        DEMO_ITEMS.map( item => (
              <OfferCards itemName={item.name!} itemImage={item.image!} itemId={item.id} 
              navigation={navigation}                 
                />
          
        ))
       } 
      


      </View>
          
      </VStack>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
