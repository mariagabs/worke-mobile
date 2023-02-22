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
import StepsCount from "../molecules/StepsCount";
import LabelButton from "../atoms/LabelButton";

interface Props {
  navigation?: any;
  onPressText: (keyboardVisible) => void;
}

const SignUpStep2: React.FC<Props> = ({ navigation, onPressText }) => {
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
    <View>
      <View style={styles.centerView}>
        <Text style={styles.title(200)}>
          Qual o seu <Text style={styles.titleBold}>nome completo?</Text>
        </Text>
        <View style={styles.fullWidth}>
          <TextBox
            inputPlaceHolder="Nome"
            autoCorrect={false}
            secureTextEntry={false}
            top={25}
            errorText="Ops, nome inválido"
            errorInput={invalidInput}
            onChangeText={onChangeNameHandler}
            onTouchStart={() => {
              onPressText(true);
            }}
          ></TextBox>
        </View>
      </View>
    </View>
  );
};

export default SignUpStep2;
