import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Pressable
} from "react-native";
import { COLORS } from "./assets/colors.js";
import * as SplashScreen from "expo-splash-screen";
import { useTogglePasswordVisibility } from "./src/components/molecules/useTogglePasswordVisibility";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
  });

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.view} onLayout={onLayoutRootView}>
          <Image source={require("./assets/worke-logo.png")} style={styles.logo} />
          <TextInput style={styles.input} placeholder="E-mail" />
          <View style={styles.input}>
            <TextInput 
                placeholder="Senha" 
                secureTextEntry={passwordVisibility}
                value={password}
                autoCorrect={false}
                textContentType="newPassword"
                onChangeText={text => setPassword(text)} />
            <Pressable onPress={handlePasswordVisibility} >
              <MaterialCommunityIcons name={rightIcon} size={22} color={COLORS.lightGray} />
            </Pressable>
          </View>
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
  view:{
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily: "Nunito-SemiBold"
  },
  span: {
    color: COLORS.black,
    fontWeight: "600",
    fontSize: 16,
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 30,
    fontFamily: "Nunito-Bold"
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    fontFamily: "Nunito-Black",
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
    fontFamily: "Nunito"
  },
  showPassword:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  }
});
