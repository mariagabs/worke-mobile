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
import SelectionLabel from "../atoms/SelectionLabel";

interface Props {
  navigation: any;
}

const SignUpStep7: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("SignUpStep6");
  const next = () => navigation.navigate("SignUpStep8");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [selected, setSelected] = useState(0);

  const select = (value) => {
    if (selected !== value) {
      setSelected(value);
      setInvalidInput(false);
    } else {
      setSelected(0);
    }
  };

  const validateSelection = () => {
    if (selected === 0) setInvalidInput(true);
    else {
      setInvalidInput(false);
      next();
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
            <Steps qtd={7} step={6}></Steps>
          </View>
          <BackButton onPress={back} signUpPage={true}></BackButton>
          <StepsCount currentStep={6} steps={7}></StepsCount>
          <View style={styles.centerView}>
            <Text style={styles.title(250)}>
              Quantas vezes na semana você faz
              <Text style={styles.titleBold}> exercícios físicos</Text>?
            </Text>
            <SelectionLabel
              text="Nenhuma"
              color={COLORS.green}
              onPress={() => select(1)}
              selected={selected === 1}
            ></SelectionLabel>
            <SelectionLabel
              text="1 ou 2 vezes"
              color={COLORS.pink}
              onPress={() => select(2)}
              selected={selected === 2}
            ></SelectionLabel>
            <SelectionLabel
              text="mais de 3 vezes"
              color={COLORS.blue}
              onPress={() => select(3)}
              selected={selected === 3}
            ></SelectionLabel>
          </View>
          {invalidInput ? (
            <ErrorLabel
              errorText="Ops, selecione uma opção!"
              bottom={-90}
            ></ErrorLabel>
          ) : (
            ""
          )}
          {!keyboardVisible ? (
            <View style={styles.labelSkipButton}>
              <SkipButton onPress={next}></SkipButton>
              <LabelButton
                text="CONTINUAR"
                color={COLORS.green}
                imageColor="green"
                onPress={validateSelection}
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

export default SignUpStep7;
