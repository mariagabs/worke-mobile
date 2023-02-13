import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import TextBox from "../atoms/TextBox";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";
import BackButton from "../atoms/BackButton";
import Steps from "../atoms/Steps";
import StepsCount from "../atoms/StepsCount";
import LabelButton from "../atoms/LabelButton";
import PasswordTextBox from "../molecules/PasswordTextBox/PasswordTextBox";

interface Props {
  navigation: any;
}

const SignUpStep4: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("SignUpStep3");
  const next = () => navigation.navigate("SignUpStep5");

  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const onChangePassword = (password) => {
    setPassword(password);
  };

  const nextStep = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // if (!email.trim().match(validRegex)) {
    //   setInvalidInput(true);
    //   return;
    // }
    // setInvalidInput(false);
    // next();
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
          <View style={styles.stepsPosition}>
            <Steps qtd={9} step={3}></Steps>
          </View>
          <BackButton onPress={back} signUpPage={true}></BackButton>
          <StepsCount steps={9} currentStep={3}></StepsCount>
          <View style={styles.centerView}>
            <Text style={styles.title(300)}>
              Crie sua <Text style={styles.titleBold}>nova senha</Text>
            </Text>
            <View
              style={styles.fullWidth}
              onTouchStart={() => setKeyboardVisible(true)}
            >
              <PasswordTextBox
                onChangeText={onChangePassword}
                errorInput={invalidInput}
                errorText="Ops, senha inválida"
                top={25}
                submitEdit={() => setKeyboardVisible(false)}
                placeholder={"Nova senha"}
              ></PasswordTextBox>
              <View style={styles.secondTextBox}>
                <PasswordTextBox
                  onChangeText={onChangePassword}
                  errorInput={invalidInput}
                  errorText="Ops, senha inválida"
                  top={25}
                  submitEdit={() => setKeyboardVisible(false)}
                  placeholder={"Confirmar senha"}
                ></PasswordTextBox>
              </View>
            </View>
          </View>
          {!keyboardVisible ? (
            <View style={styles.labelSkipButton}>
              <LabelButton
                text="CONTINUAR"
                color={COLORS.green}
                imageColor="green"
                onPress={nextStep}
              ></LabelButton>
            </View>
          ) : (
            ""
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpStep4;
