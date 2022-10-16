import { KeyboardAvoidingView, Platform  } from "react-native";
import { Center, Box, Heading, VStack, HStack, FormControl, Link, Input, Button, Text, ArrowForwardIcon, } from "native-base";
import React,  { useState , useEffect } from "react";
import { signUpUser } from "../actions/authActions";
import * as Location from 'expo-location';


const SignUp = ({navigation}: any) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userSubmitted, setUserSubmitted] = useState(false);
    const [location, setLocation] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState(null);
  

    

    const submit = async () => {
        if(name.length !== 0 && email.length !== 0 && password.length !==0 && confirmPassword.length !== 0 && location)  {
            if(password === confirmPassword) {
                await signUpUser(name, email, password, navigation, `${location.coords.latitude}` , `${location.coords.longitude}`);
                setUserSubmitted(true);
            } else {
                alert("Passwords do not match");
            }
        } else {
            alert("Fields cannot be empty");
        }
    }
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

    console.log("location",location);

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
       >
        <Center w="100%" h="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }} fontWeight="semibold">
                    Welcome
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="medium" size="xs">
                    Sign up to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input onChangeText={(text: string) => setName(text)} placeholder="Name" value={name} colorScheme="black" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input onChangeText={(text: string) => setEmail(text)} placeholder="Email" value={email} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input onChangeText={(text: string) => setPassword(text)} type="password" placeholder="Password" value={password} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input onChangeText={(text: string) => setConfirmPassword(text)} type="password" placeholder="Confirm Password" value={confirmPassword} />
                    </FormControl>
                    <Button mt="2" backgroundColor={"muted.900"} onPress={submit}>
                        <HStack>

                       
                     <Text color={"secondary.50"}>Continue </Text>
                        <ArrowForwardIcon color="secondary.50"/>
                      </HStack>
                    </Button>
                </VStack>
            </Box>
        </Center>
        </KeyboardAvoidingView>
    );
};

export default SignUp;