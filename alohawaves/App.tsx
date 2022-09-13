// Porte d'entrée de l'App
import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, ImageBackground} from "react-native";

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation/mainnav';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

