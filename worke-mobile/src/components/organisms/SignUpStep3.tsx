import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import TextBox from "../atoms/TextBox";
import styles from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  onPressText: (keyboardVisible) => void;
  invalidInput?: boolean;
  onSubmitEdit: () => void;
}

const SignUpStep3: React.FC<Props> = ({
  onPressText,
  invalidInput,
  onSubmitEdit,
}) => {
  const [email, setEmail] = useState("");

  const onChangeEmailHandler = (name) => {
    setEmail(name);
  };

  const saveEmail = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    userCreate.email = email;

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getEmail = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);

      setEmail(userCreate.email);
    };

    getEmail().catch(console.error);
  }, []);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={[styles.title, styles.width300]}>
          Qual o seu <Text style={styles.titleBold}>e-mail?</Text>
        </Text>
        <View style={styles.fullWidth}>
          <TextBox
            inputPlaceHolder="E-mail"
            autoCorrect={false}
            secureTextEntry={false}
            top={25}
            keyboardType={"email-address"}
            errorText="Ops, e-mail inválido"
            errorInput={invalidInput}
            onChangeText={onChangeEmailHandler}
            onBlur={saveEmail}
            text={email}
            onTouchStart={() => {
              onPressText(true);
            }}
            submitEdit={onSubmitEdit}
          ></TextBox>
        </View>
      </View>
    </View>
  );
};

export default SignUpStep3;
