import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { COLORS } from "./assets/colors.js";
import * as SplashScreen from "expo-splash-screen";
import TextBox from "./src/components/molecules/TextBox.js";
import Button from "./src/components/molecules/Button.js";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
  });

  const [keyboardVisible, setKeyboardVisible] = useState(true);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setKeyboardVisible(true);
        }}
      >
        <View style={styles.view} onLayout={onLayoutRootView}>
          <Image
            source={require("./assets/worke-logo.png")}
            style={styles.logo}
          />
          <View
            style={styles.input}
            onTouchStart={() => setKeyboardVisible(false)}
          >
            <TextBox inputPlaceHolder="E-mail" passwordInput={false}></TextBox>
            <TextBox inputPlaceHolder="Senha" passwordInput={true}></TextBox>
          </View>
          <Text style={styles.span}>Esqueceu a senha?</Text>
          <Button buttonText={"ENTRAR"}></Button>
          {keyboardVisible ? (
            <View style={styles.bottomInfo}>
              <Image
                source={require("./assets/divider-line.png")}
                style={styles.divider}
              />
              <Text style={styles.createAccount}>
                Não possui uma conta?{" "}
                <Text style={styles.span}>Crie aqui!</Text>
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  view: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
  },
  logo: {
    marginBottom: 60,
  },
  span: {
    color: COLORS.black,
    fontWeight: "600",
    fontSize: 16,
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 30,
    fontFamily: "Nunito-Bold",
  },

  divider: {
    width: "100%",
  },
  createAccount: {
    fontSize: 16,
    color: COLORS.black,
    marginTop: 14,
    fontFamily: "Nunito",
  },
  bottomInfo: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    bottom: 40,
  },
});
