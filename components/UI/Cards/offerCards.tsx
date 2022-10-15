import {  Text   , Image, TouchableOpacity ,View  } from "react-native";
import { Center,  Flex  } from "native-base";


const OfferCards = (props: IOfferCards) => {
    const { itemImage , itemName} = props;   
    return( 
  <TouchableOpacity>
    <Flex
       style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center", 
       backgroundColor: "#fafffc",
       borderBottomColor : "#636363",
       borderBottomWidth: 1,
       borderRadius: 10,
    }}
       key={itemName}
       >
        <View
         style={{height : 100 , width : 100 , backgroundColor: "#fff"}}
        >

       
        <Image
          source={{ uri: itemImage }}
          style={{height : 100 , width : 100}}

         
        />
         </View>
        <Center>
             <Text> 
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
    itemId : number
}