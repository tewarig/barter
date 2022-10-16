import { KeyboardAvoidingView, Platform  } from "react-native";
import { Center, Box, Heading, VStack, HStack, FormControl, Link, Input, Button, Text, Spinner } from "native-base";
import  React , { useState } from "react";
import { signInUser } from "../actions/authActions";
import { useContext } from "react";
import { User } from "../context";

const SignIn = ({ navigation }: any) => {

  const { setUserData } = useContext(User);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading ] = useState<boolean>();

  const submit = async () => {

    if(email.length === 0 || password.length === 0) {
      alert("Fields cannot be empty");
    } else {
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },1000);
      await signInUser(email, password, navigation , setUserData) ;
    }
   
  }

  const navigateToSignUp = () => navigation.navigate("SignUp");

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  
  >
    <Center w="100%" h="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChangeText={(text: string) => setEmail(text)} placeholder="Email" value={email} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input onChangeText={(text: string) => setPassword(text)} type="password" placeholder="Password" value={password} />
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "muted.900"
            }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" 
           background={"muted.900"}
            onPress={submit}
            opacity={loading ? 0.5 : 1}
            >
            {loading ?  <Spinner color="white" />  : <Text color={"white"}>Sign In</Text>}
           
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
              I'm a new user.{" "}
            </Text>
            <Text
              background={"muted.900"}
              fontWeight="medium"
              fontSize="sm"
              onPress={navigateToSignUp}
            >
              Sign Up
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Center>
    </KeyboardAvoidingView>
  );
};

export default SignIn;