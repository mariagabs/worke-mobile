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

const SignUpStep2: React.FC<Props> = ({ navigation }) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [name, setName] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const back = () => navigation.navigate("SignUp");
  const next = () => navigation.navigate("SignUpStep3");

  const onChangeNameHandler = (name) => {
    setName(name);
  };

  const nextStep = () => {
    if (!name.trim()) {
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
            <Steps qtd={9} step={1}></Steps>
          </View>
          <BackButton onPress={back} signUpPage={true}></BackButton>
          <StepsCount steps={9} currentStep={1}></StepsCount>
          <View style={styles.centerView}>
            <Text style={styles.title(200)}>
              Qual o seu <Text style={styles.titleBold}>nome completo?</Text>
            </Text>
            <View
              style={styles.fullWidth}
              onTouchStart={() => setKeyboardVisible(true)}
            >
              <TextBox
                inputPlaceHolder="Nome"
                autoCorrect={false}
                secureTextEntry={false}
                top={25}
                errorText="Ops, nome inválido"
                errorInput={invalidInput}
                onChangeText={onChangeNameHandler}
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

export default SignUpStep2;
