import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";
import BlankTextBox from "../atoms/BlankTextBox";
import ErrorLabel from "../atoms/ErrorLabel";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  onPressText: (keyboardVisible) => void;
  invalidInput?: boolean;
  onSubmitEdit: () => void;
}

const SignUpStep5: React.FC<Props> = ({
  onPressText,
  invalidInput,
  onSubmitEdit,
}) => {
  const [height, setHeight] = useState("");

  const onChangeHeightHandler = (height) => {
    setHeight(height);
  };

  const saveHeight = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    userCreate.height = height;

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getHeight = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);

      setHeight(userCreate.height);
    };

    getHeight().catch(console.error);
  }, []);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={[styles.title, styles.width250]}>
          Qual a sua <Text style={styles.titleBold}>altura?</Text>
        </Text>
        <BlankTextBox
          color={COLORS.blue}
          onTouchStart={() => onPressText(true)}
          onBlur={saveHeight}
          type="height"
          complementaryText="cm"
          onChangeText={onChangeHeightHandler}
          text={height}
          submitEdit={onSubmitEdit}
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
    </View>
  );
};

export default SignUpStep5;
