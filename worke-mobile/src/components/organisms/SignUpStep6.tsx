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
import LabelButton from "../atoms/LabelButton";
import ErrorLabel from "../atoms/ErrorLabel";
import SkipButton from "../atoms/SkipButton";

interface Props {
  navigation: any;
}

const SignUpStep6: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("SignUpStep5");
  const next = () => navigation.navigate("SignUpStep7");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [weight, setWeight] = useState("");

  const onChangeWeightHandler = (weight) => {
    setWeight(weight);

    if (weight !== "" && weight !== "0") setInvalidInput(false);
  };

  const validateHeight = () => {
    if (weight !== "" && weight !== "0") {
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
            <Steps qtd={7} step={5}></Steps>
          </View>
          <BackButton onPress={back}></BackButton>
          <StepsCount currentStep={5} steps={7}></StepsCount>
          <View style={styles.centerView}>
            <Text style={styles.title(250)}>
              Qual o seu <Text style={styles.titleBold}>peso?</Text>
            </Text>
            <BlankTextBox
              color={COLORS.purple}
              onTouchStart={() => setKeyboardVisible(true)}
              type="weight"
              complementaryText="kg"
              onChangeText={onChangeWeightHandler}
            ></BlankTextBox>
          </View>
          {invalidInput ? (
            <ErrorLabel
              errorText="Ops, informe um peso válido!"
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
                color={COLORS.purple}
                imageColor="purple"
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

export default SignUpStep6;
