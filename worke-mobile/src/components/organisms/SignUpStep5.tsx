import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles";
import BackButton from "../atoms/BackButton";
import Steps from "../atoms/Steps";
import StepsCount from "../molecules/StepsCount";
import { COLORS } from "../../../assets/colors";
import Gender from "../atoms/Gender";
import LabelButton from "../atoms/LabelButton";
import ErrorLabel from "../atoms/ErrorLabel";

interface Props {
  navigation?: any;
}

const SignUpStep3: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("SignUpStep2");
  const next = () => navigation.navigate("SignUpStep4");
  const [genderSelect, setGenderSelect] = useState("none");
  const [invalidInput, setInvalidInput] = useState(false);

  const nextStep = () => {
    if (genderSelect === "none") {
      setInvalidInput(true);
      return;
    }
    setInvalidInput(false);
    next();
  };

  return (
    <View style={styles.centerView}>
      <Text style={styles.title(250)}>
        Conte para nós mais sobre <Text style={styles.titleBold}>você!</Text>
      </Text>
      <View style={styles.displayRow}>
        <Gender
          gender="MASCULINO"
          onPress={() => {
            setGenderSelect("MASCULINO");
            setInvalidInput(false);
          }}
          selected={genderSelect}
        ></Gender>
        <Gender
          gender="FEMININO"
          onPress={() => {
            setGenderSelect("FEMININO");
            setInvalidInput(false);
          }}
          selected={genderSelect}
        ></Gender>
      </View>
      <TouchableOpacity
        onPress={() => {
          setGenderSelect("");
          setInvalidInput(false);
        }}
        activeOpacity={1}
      >
        <Text
          style={
            genderSelect.trim()
              ? styles.defaultText(
                  14,
                  "center",
                  "Nunito-ExtraBold",
                  "auto",
                  2.5,
                  50,
                )
              : styles.defaultAnswerGender
          }
        >
          PREFIRO NÃO RESPONDER
        </Text>
      </TouchableOpacity>
      {invalidInput ? (
        <ErrorLabel
          errorText="Ops, algo deu errado! Selecione uma opção."
          bottom={-90}
        ></ErrorLabel>
      ) : (
        ""
      )}
    </View>
  );
};

export default SignUpStep3;
