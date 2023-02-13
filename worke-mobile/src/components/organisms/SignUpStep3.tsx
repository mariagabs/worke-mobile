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

interface Props {
  navigation: any;
}

const SignUpStep3: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("SignUpStep2");
  const next = () => navigation.navigate("SignUpStep4");

  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const onChangeEmailHandler = (name) => {
    setEmail(name);
  };

  const nextStep = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.trim().match(validRegex)) {
      setInvalidInput(true);
      return;
    }
    setInvalidInput(false);
    next();
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
            <Steps qtd={9} step={2}></Steps>
          </View>
          <BackButton onPress={back} signUpPage={true}></BackButton>
          <StepsCount steps={9} currentStep={2}></StepsCount>
          <View style={styles.centerView}>
            <Text style={styles.title(300)}>
              Qual o seu <Text style={styles.titleBold}>e-mail?</Text>
            </Text>
            <View
              style={styles.fullWidth}
              onTouchStart={() => setKeyboardVisible(true)}
            >
              <TextBox
                inputPlaceHolder="E-mail"
                autoCorrect={false}
                secureTextEntry={false}
                top={25}
                keyboardType={"email-address"}
                errorText="Ops, e-mail inválido"
                errorInput={invalidInput}
                onChangeText={onChangeEmailHandler}
                submitEdit={() => setKeyboardVisible(false)}
              ></TextBox>
            </View>
          </View>
          {!keyboardVisible ? (
            <View style={styles.labelSkipButton}>
              <LabelButton
                text="CONTINUAR"
                color={COLORS.purple}
                imageColor="purple"
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

export default SignUpStep3;
