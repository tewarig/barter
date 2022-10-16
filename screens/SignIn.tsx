import { Center, Box, Heading, VStack, HStack, FormControl, Link, Input, Button, Text, } from "native-base";
import { useState } from "react";
import { signInUser } from "../actions/authActions";

const SignIn = ({ navigation }: any) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {

    if(email.length === 0 || password.length === 0) {
      alert("Fields cannot be empty");
    } else {
      await signInUser(email, password, navigation);
    }
   
  }

  const navigateToSignUp = () => navigation.navigate("SignUp");

  return (
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
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={submit}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
              I'm a new user.{" "}
            </Text>
            <Text
              color="indigo.500"
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
  );
};

export default SignIn;