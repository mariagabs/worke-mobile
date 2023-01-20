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
import LabelButton from "../atoms/LabelButton";
import ErrorLabel from "../atoms/ErrorLabel";
import SkipButton from "../atoms/SkipButton";
import SelectionLabel from "../atoms/SelectionLabel";

interface Props {
  navigation: any;
}

const SignUpStep8: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("SignUpStep7");
  const next = () => navigation.navigate("SignUpStep9");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [selected, setSelected] = useState("");

  const select = (value) => {
    setInvalidInput(false);
    if (selected === "" || selected.indexOf(value) === -1) {
      setSelected(selected + value);
      setInvalidInput(false);
    } else if (selected.indexOf(value) !== -1) {
      setSelected(selected.replace(value, ""));
    }
  };

  const validateSelection = () => {
    if (selected === "") setInvalidInput(true);
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
            <Steps qtd={7} step={7}></Steps>
          </View>
          <BackButton onPress={back}></BackButton>
          <StepsCount currentStep={7} steps={7}></StepsCount>
          <View style={styles.centerView}>
            <Text style={styles.title(250)}>
              Quais são suas
              <Text style={styles.titleBold}> expectativas</Text>?
            </Text>
            <View style={styles.expectations}>
              <View style={styles.expect}>
                <SelectionLabel
                  text="ser mais saudável"
                  color={COLORS.green}
                  onPress={() => select("1")}
                  selected={selected.indexOf("1") !== -1}
                ></SelectionLabel>
                <SelectionLabel
                  text="iniciar uma atividade física"
                  color={COLORS.blue}
                  onPress={() => select("2")}
                  selected={selected.indexOf("2") !== -1}
                ></SelectionLabel>
              </View>
              <View style={styles.expect}>
                <SelectionLabel
                  text="               criar hábitos"
                  color={COLORS.pink}
                  onPress={() => select("3")}
                  selected={selected.indexOf("3") !== -1}
                ></SelectionLabel>
                <SelectionLabel
                  text="               motivação"
                  color={COLORS.purple}
                  onPress={() => select("4")}
                  selected={selected.indexOf("4") !== -1}
                ></SelectionLabel>
              </View>
            </View>
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
                text="FINALIZAR"
                color={COLORS.pink}
                imageColor="pink"
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

export default SignUpStep8;
