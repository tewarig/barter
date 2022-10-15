import { useState , Dispatch } from "react";
import { Animated  ,
 Dimensions , 
 Text ,
 Image ,
 PanResponder, 
 StyleSheet  ,
 View
} from "react-native";

import { Item } from "../../../types"; 


const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipeableCard = (props: ISwipeableCardProps ) => {
    const { item, removeCard , swipedDirection } = props;
    const [xPosition, setXPosition] = useState(new Animated.Value(0));
    const [showRightAnimation , setShowRightAnimation] = useState<boolean>(false);
    const [showLeftAnimation ,setShowLeftAnimation] = useState<boolean>(false);
  let swipeDirection = '';
  let cardOpacity = new Animated.Value(1);
  let rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
  });

  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      xPosition.setValue(gestureState.dx);
      if (gestureState.dx > SCREEN_WIDTH - 250) {
        swipeDirection = 'Right';
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        swipeDirection = 'Left';
      }
      if(gestureState.dx > 0){
        setShowRightAnimation(true);
        setShowLeftAnimation(false);
      }else if( gestureState.dx < 0){
        setShowLeftAnimation(true);
        setShowRightAnimation(false);
      }
    
    },
    onPanResponderRelease: (evt, gestureState) => {
      setShowLeftAnimation(false);
      setShowRightAnimation(false);
      if (
        gestureState.dx < SCREEN_WIDTH - 150 &&
        gestureState.dx > -SCREEN_WIDTH + 150
      ) {
        swipedDirection('--');
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
        });
      }
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[ styles.cardStyle , 
        {
          backgroundColor: '#fff',
          opacity: cardOpacity,
          transform: [{ translateX: xPosition }, { rotate: rotateCard }],
        },
      ]}>
        <View>    
          { !showLeftAnimation && !showRightAnimation && 
           <Image
             source={{uri: item.image }}
             style={{width: 400, height: 400 }}
             /> 
       }     
       {
          showLeftAnimation &&
          <View>

          <Image
          source={{ uri: item.image }}
          style={{ tintColor: '#f5b7b5',  width: 400, height: 400  }}
        />
        <Image
          source={{ uri: item.image }}
          style={{ position: 'absolute', opacity: 0.3, height: 400, width: 400 }}
        />
        <View style={styles.makeAOffer}>

           <Text style={styles.imageText}>
             AHHH! NOOO
           </Text>
           </View>
          </View>
       } 
         {
          showRightAnimation &&
          <View>

          <Image
          source={{ uri: item.image }}
          style={{ tintColor: '#c1f7dc',  width: 400, height: 400  }}
        />
        <Image
          source={{ uri: item.image }}
          style={{ position: 'absolute', opacity: 0.3, height: 400, width: 400 }}
        /> 
        <View style={styles.makeAOffer}>

            <Text style={styles.imageText}>
              MAKE A OFFER
            </Text>
        </View>
          </View>
       }
    
      </View>
   
    <View style={styles.mainHeadingContainer}>
      <Text style={styles.name}>
      🐱 {item.name}
      </Text>
     </View>
     <View style={styles.desContainer}>
        <Text> 
         🖊️ {item.desc}
        </Text>
        <View style={styles.textContainer}>
    
    <Text>
    📍 {item.location}
    </Text>
 </View>
    </View>
   
    
    </Animated.View>
  );;
}

export default SwipeableCard ;

const styles = StyleSheet.create({
  cardStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 7,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  textContainer : {
    marginTop: 5,
  }
  , 
  desContainer: {
    margin: 20 ,
    marginTop: 5,
  } ,
  mainHeadingContainer: {
    margin: 10
  }, 
  makeAOffer: {
    position: 'absolute',
    marginTop: "50%",
    marginLeft: "25%" ,
   
  }, 
   imageText:{
    fontWeight: "bold",
    fontSize: 30,
  
    color: "#fff", 
   } ,
   reject : {
    position: 'absolute',
    marginTop: "50%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
   
  },
})

interface ISwipeableCardProps{
    item : Item, 
    removeCard : any , 
    swipedDirection :  Dispatch<string> 

}
