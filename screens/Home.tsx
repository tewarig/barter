import { useEffect, useState } from 'react';
import { StyleSheet , SafeAreaView  } from 'react-native';

import { SwipeableCard  } from '../components/UI/Cards';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { RootTabScreenProps } from '../types';
import { DEMO_CONTENT , DEMO_ITEMS } from "../constants/dummyData" 

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [noMoreCard, setNoMoreCard] = useState(false);
  const [sampleCardArray, setSampleCardArray] = useState(DEMO_CONTENT);
  const [swipeDirection, setSwipeDirection] = useState('--');
   
  const removeCard = (id) => {
    // alert(id);
    sampleCardArray.splice(
      sampleCardArray.findIndex((item) => item.id == id),
      1
    );
    setSampleCardArray(sampleCardArray);
    if (sampleCardArray.length == 0) {
      setNoMoreCard(true);
    }
  };

  const lastSwipedDirection = (swipeDirection) => {
    setSwipeDirection(swipeDirection);
  };
    useEffect(()=>{
      console.log(swipeDirection);
      if(swipeDirection == 'Right'){
        setTimeout(()=>{
          navigation.navigate("Offer"); 
        } ,500);
       
      }
    },[swipeDirection]);
  return (
    <View style={styles.container} darkColor="#333" lightColor='#fff'> 
      <SafeAreaView style={{ flex: 1 , alignContent: "center" , justifyContent: "center"  }}>
     
      <View style={styles.container}>
        {sampleCardArray.map((item, key) => (
          <SwipeableCard
            key={key}
            item={item}
            removeCard={() => removeCard(item.id)}
            swipedDirection={lastSwipedDirection}
          />
        ))}
        {noMoreCard ? (
          <Text style={{ fontSize: 22 }} 
           darkColor="#fff"
           lightColor='#000'          
          >No Items Found.</Text>
        ) : null}
      </View>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    backgroundColor: "#fff",
  
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  cardTitleStyle: {
    color: '#fff',
    fontSize: 24,
  },
  swipeText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
