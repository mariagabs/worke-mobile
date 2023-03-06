import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";
import BlankTextBox from "../atoms/BlankTextBox";
import ErrorLabel from "../atoms/ErrorLabel";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  onPressText: (keyboardVisible) => void;
  invalidInput: boolean;
}

const SignUpStep4: React.FC<Props> = ({ invalidInput, onPressText }) => {
  const [date, setDate] = useState("");

  const onChangeDateHandler = (date) => {
    setDate(date);
  };

  const saveDate = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    userCreate.birthDate = date;

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getDate = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);

      setDate(userCreate.birthDate);
    };

    getDate().catch(console.error);
  }, []);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={styles.title(200)}>
          Quando você <Text style={styles.titleBold}>nasceu?</Text>
        </Text>
        <BlankTextBox
          color={COLORS.pink}
          onTouchStart={() => onPressText(true)}
          type="date"
          onChangeText={onChangeDateHandler}
          onBlur={saveDate}
        ></BlankTextBox>
      </View>
      {invalidInput ? (
        <ErrorLabel
          errorText="Ops, informe uma data válida!"
          bottom={-150}
        ></ErrorLabel>
      ) : (
        ""
      )}
    </View>
  );
};

export default SignUpStep4;
