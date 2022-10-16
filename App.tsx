import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, Box } from "native-base";
import { RootSiblingParent } from 'react-native-root-siblings';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <RootSiblingParent >
      <NativeBaseProvider>
         <SafeAreaProvider>
           <Navigation colorScheme={colorScheme} />
           <StatusBar />
         </SafeAreaProvider>
      </NativeBaseProvider>
      </RootSiblingParent>
    );
  }
}
