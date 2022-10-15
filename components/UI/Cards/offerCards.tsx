import React  from "react";
import {  Text   , Image, TouchableOpacity ,View  } from "react-native";
import { Center,  Flex  } from "native-base";

import useColorModes from "../../../hooks/useColorModes";


const OfferCards = (props: IOfferCards) => {
    const { itemImage , itemName  , navigation } = props;   
     
    const { backgroundColor , textColor } = useColorModes();
    return( 
  <TouchableOpacity 
  onPress={()=>{
    navigation.navigate("Chat" ,  { itemImage , itemName  }  );
  }}
  
  >
    <Flex
       style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center", 
       backgroundColor: backgroundColor ,
       borderBottomColor : textColor,
       borderBottomWidth: 1,
       borderRadius: 10,
    }}
       key={itemName}
       >
        <View
         style={{height : 100 , width : 100 , backgroundColor: backgroundColor}}
        >

       
        <Image
          source={{ uri: itemImage }}
          style={{height : 100 , width : 100}}

         
        />
         </View>
        <Center>
             <Text style={{
                color: textColor,
             }}> 
         {itemName}
        </Text>
      </Center>
     </Flex>
  </ TouchableOpacity>
   ) ;   
}

export default OfferCards;

interface IOfferCards {
    itemName: string ;
    itemImage:  string;
    itemId : number ;
    navigation: any;
}