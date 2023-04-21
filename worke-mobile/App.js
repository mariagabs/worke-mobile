import React, { useCallback, useEffect } from "react";
import { View, LogBox } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import styles from "./src/styles.js";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./app.navigator";
import * as tf from "@tensorflow/tfjs";

SplashScreen.preventAutoHideAsync();
LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
  });

  useEffect(() => {
    async function loadModel() {
      const tfReady = await tf.ready();
      const modelJson = await require("./assets/model/model.json");
      const modelWeights1 =
        await require("./assets/model/group1-shard1of4.bin");
      const modelWeights2 =
        await require("./assets/model/group1-shard2of4.bin");
      const modelWeights3 =
        await require("./assets/model/group1-shard3of4.bin");
      const modelWeights4 =
        await require("./assets/model/group1-shard4of4.bin");
    }

    loadModel();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar></StatusBar>
      <AppNavigator />
    </View>
  );
}
