import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import styles from "../../styles";
import Steps from "../atoms/Steps";
import BackButton from "../atoms/BackButton";
import StepsCount from "../atoms/StepsCount";
import { COLORS } from "../../../assets/colors";
import BlankTextBox from "../atoms/BlankTextBox";
import ErrorLabel from "../atoms/ErrorLabel";
import LabelButton from "../atoms/LabelButton";
import SkipButton from "../atoms/SkipButton";

interface Props {
  navigation: any;
}

const SignUpStep5: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("SignUpStep4");
  const next = () => navigation.navigate("SignUpStep6");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [height, setHeight] = useState("");

  const onChangeHeightHandler = (height) => {
    setHeight(height);

    if (height !== "" && height !== "0") setInvalidInput(false);
  };

  const validateHeight = () => {
    if (height !== "" && height !== "0") {
      setInvalidInput(false);
      next();
    } else {
      setInvalidInput(true);
    }
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
            <Steps qtd={7} step={4}></Steps>
          </View>
          <BackButton onPress={back}></BackButton>
          <StepsCount currentStep={4} steps={7}></StepsCount>
          <View style={styles.centerView}>
            <Text style={styles.title(250)}>
              Qual a sua <Text style={styles.titleBold}>altura?</Text>
            </Text>
            <BlankTextBox
              color={COLORS.blue}
              onTouchStart={() => setKeyboardVisible(true)}
              type="height"
              complementaryText="cm"
              onChangeText={onChangeHeightHandler}
            ></BlankTextBox>
          </View>
          {invalidInput ? (
            <ErrorLabel
              errorText="Ops, informe uma altura válida!"
              bottom={-150}
            ></ErrorLabel>
          ) : (
            ""
          )}
          {!keyboardVisible ? (
            <View style={styles.labelSkipButton}>
              <SkipButton onPress={next}></SkipButton>
              <LabelButton
                text="CONTINUAR"
                color={COLORS.blue}
                imageColor="blue"
                onPress={validateHeight}
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

export default SignUpStep5;
