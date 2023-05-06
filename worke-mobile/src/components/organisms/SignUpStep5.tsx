import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles";
import Gender from "../atoms/Gender";
import ErrorLabel from "../atoms/ErrorLabel";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  invalidInput: boolean;
}

const SignUpStep3: React.FC<Props> = ({ invalidInput }) => {
  const [genderSelect, setGenderSelect] = useState("NONE");

  const saveGender = async (gender) => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    setGenderSelect(gender);
    userCreate.gender = gender;

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getGender = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);

      setGenderSelect(userCreate.gender);
    };

    getGender().catch(console.error);
  }, []);

  return (
    <View style={styles.centerView}>
      <Text style={(styles.title, styles.width250)}>
        Conte para nós mais sobre <Text style={styles.titleBold}>você!</Text>
      </Text>
      <View style={styles.displayRow}>
        <Gender
          gender="M"
          onPress={() => {
            saveGender("M");
          }}
          selected={genderSelect}
        ></Gender>
        <Gender
          gender="F"
          onPress={() => {
            saveGender("F");
          }}
          selected={genderSelect}
        ></Gender>
      </View>
      <TouchableOpacity
        onPress={() => {
          saveGender("O");
        }}
        activeOpacity={1}
      >
        <Text
          style={
            genderSelect.trim() === "O"
              ? styles.defaultAnswerGender
              : (styles.defaultText,
                styles.marginTop50,
                styles.fontExtraBold,
                styles.letterSpacing25,
                styles.font14)
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
