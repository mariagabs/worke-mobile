import * as Font from "expo-font";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "./assets/colors.js";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image source={require("./assets/worke-logo.png")} style={styles.logo} />
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Senha" />
      <Text style={styles.span}>Esqueceu a senha?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <Image
        source={require("./assets/divider-line.png")}
        style={styles.divider}
      />
      <Text style={styles.createAccount}>
        Não possui uma conta? <Text style={styles.span}>Crie aqui!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  logo: {
    marginBottom: 60,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.lightGray,
    borderRadius: 7,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 18,
    textAlign: "left",
    fontSize: 16,
    marginTop: 20,
  },
  span: {
    color: COLORS.black,
    fontWeight: "600",
    fontSize: 16,
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    fontFamily: "Nunito-Bold",
  },
  button: {
    backgroundColor: COLORS.black,
    width: "100%",
    borderRadius: 7,
    height: 48,
    paddingVertical: 15,
  },
  divider: {
    width: "100%",
    position: "absolute",
    bottom: 80,
  },
  createAccount: {
    fontSize: 16,
    color: COLORS.black,
    position: "absolute",
    bottom: 50,
  },
});
