import { useState } from "react";
import TextBox from "../atoms/TextBox";
import Button from "../atoms/Button";
import PasswordTextBox from "../molecules/PasswordTextBox/PasswordTextBox";
import styles from "../../styles.js";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  Keyboard,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({ navigation }) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const signUp = () => navigation.navigate("SignUp");
  const home = () => navigation.navigate("Group");

  const onChangePassword = (password) => {
    setPassword(password);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const saveData = async ({ token }) => {
    try {
      console.log(token);
      await AsyncStorage.setItem("token", token);
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };

  const onSubmitFormHandler = async (event) => {
    if (!email.trim() || !password.trim()) {
      setInvalidInput(true);
      return;
    }

    setInvalidInput(false);

    const configurationObject = {
      url: "http://172.20.10.4:8000/login",
      method: "POST",
      data: { password, email },
    };

    axios(configurationObject)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setPassword("");
          setEmail("");
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setKeyboardVisible(false);
        }}
      >
        <View style={styles.view}>
          <Image
            source={require("../../../assets/worke-logo.png")}
            style={styles.logo}
          />
          <View
            style={styles.fullWidth}
            onTouchStart={() => setKeyboardVisible(true)}
          >
            <TextBox
              inputPlaceHolder="E-mail"
              onChangeText={onChangeEmailHandler}
              secureTextEntry={false}
              autoCorrect={false}
              errorInput={invalidInput}
              errorText="Ops, e-mail inválido"
              keyboardType="email-address"
              top={25}
              submitEdit={() => setKeyboardVisible(false)}
            ></TextBox>
          </View>
          <View
            style={styles.loginPassword}
            onTouchStart={() => setKeyboardVisible(true)}
          >
            <PasswordTextBox
              onChangeText={onChangePassword}
              placeholder={"Senha"}
              errorInput={invalidInput}
              errorText="Ops, senha inválida"
              top={25}
              submitEdit={() => setKeyboardVisible(false)}
            ></PasswordTextBox>
          </View>
          <View style={styles.fullWidth}>
            <Text style={styles.span}>Esqueceu a senha?</Text>
          </View>
          <View style={styles.fullWidth}>
            <Button
              buttonText={"ENTRAR"}
              // onClick={onSubmitFormHandler}
              onClick={home}
            ></Button>
          </View>
          {!keyboardVisible ? (
            <View style={styles.bottomInfo}>
              <Image
                source={require("../../../assets/divider-line.png")}
                style={styles.divider}
              />
              <View style={styles.bottomInfoText}>
                <Text style={styles.createAccount}>Não possui uma conta?</Text>

                <TouchableOpacity
                  onPress={signUp}
                  activeOpacity={1}
                  style={styles.clickableSpan}
                >
                  <Text style={styles.span}> Crie aqui!</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
