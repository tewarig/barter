import React, { useState, useEffect } from 'react';
import {   View, Platform, KeyboardAvoidingView  , Image , Text, TouchableOpacity} from 'react-native';
import { Center, Input, TextArea  , Button } from 'native-base';
import * as ImagePicker from 'expo-image-picker';

export default function ListAnother({ navigation }: RootTabScreenProps<'List'>) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const onSubmit = ()=> {
    navigation.goBack();
  }

  return (
 
    
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  
  >
    
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{
            marginTop: 10
        }}>
        <TouchableOpacity onPress={pickImage}  >
        <Text>
            Select an Image
        </Text>
        </TouchableOpacity>     
        </View>
     
      
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} 
      <View 
      style={{
        margin: 10
      }}
      >
      <Input  placeholder="Name"  colorScheme={"muted.900"}  width="75%"/>
      </View>
      <View 
      style={{
        margin: 10
      }}
      >

      <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" style={{
        marginTop: 10,
      }} />
      </View>
       <Button  color={"muted.900"}  onPress={onSubmit}>
        <Text>
            Submit
        </Text>
       </Button>
       
    </View>
    </KeyboardAvoidingView>
   
  
  );
}