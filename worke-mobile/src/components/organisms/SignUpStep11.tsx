import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image,
} from "react-native";
import styles from "../../styles";
import Steps from "../atoms/Steps";
import BackButton from "../atoms/BackButton";
import StepsCount from "../atoms/StepsCount";
import { COLORS } from "../../../assets/colors";
import LabelButton from "../atoms/LabelButton";

interface Props {
  navigation: any;
}

const SignUpStep9: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("SignUpStep6");
  const next = () => navigation.navigate("SignUpStep6");
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
            <Steps qtd={9} step={8}></Steps>
          </View>
          <View style={styles.centerView}>
            <Image source={require("../../../assets/happy-green.png")}></Image>
            <Text
              style={styles.defaultText(
                32,
                "center",
                "Nunito-Black",
                "100%",
                2,
                20,
              )}
            >
              EBA!
            </Text>
            <Text
              style={styles.defaultText(20, "center", "Nunito", "70%", 0, 0)}
            >
              Seu cadastro está pronto! {"\n"}Inicie para sua vida ficar ainda
              mais saudável!
            </Text>
          </View>

          <View style={styles.labelSkipButton}>
            <LabelButton
              text="INICIAR"
              color={COLORS.purple}
              imageColor="purple"
              onPress={validateSelection}
              hideImage={true}
            ></LabelButton>
          </View>
          <Image
            style={styles.lines}
            source={require("../../../assets/2-lines.png")}
          ></Image>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpStep9;
