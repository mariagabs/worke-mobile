import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import PasswordTextBox from "../molecules/PasswordTextBox/PasswordTextBox";

interface Props {
  onPressText: (keyboardVisible) => void;
  invalidInput?: boolean;
  onSubmitEdit: () => void;
}

const SignUpStep4: React.FC<Props> = ({
  onPressText,
  invalidInput,
  onSubmitEdit,
}) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onChangePassword = (pass) => {
    setPassword(pass);
  };

  const onChangePasswordConfirm = (passwordConfirm) => {
    setPasswordConfirm(passwordConfirm);
  };

  const savePassword = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);

    if (password === passwordConfirm) {
      userCreate.password = password;
    } else {
      userCreate.password = "";
      invalidInput = true;
    }

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getPassword = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);

      setPassword(userCreate.password);
      setPasswordConfirm(userCreate.password);
    };

    getPassword().catch(console.error);
  }, []);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={[styles.title, styles.width300]}>
          Crie sua<Text style={styles.titleBold}> senha</Text>
        </Text>
        <View style={styles.fullWidth}>
          <PasswordTextBox
            onChangeText={onChangePassword}
            top={25}
            placeholder={"Senha"}
            onBlur={savePassword}
            text={password}
            onTouchStart={() => {
              onPressText(true);
            }}
            submitEdit={onSubmitEdit}
          ></PasswordTextBox>
          <View style={styles.secondTextBox}>
            <PasswordTextBox
              onChangeText={onChangePasswordConfirm}
              errorInput={invalidInput}
              errorText="Ops, as senhas não coincidem"
              top={25}
              placeholder={"Confirmar senha"}
              onBlur={savePassword}
              onTouchStart={() => {
                onPressText(true);
              }}
              text={passwordConfirm}
              submitEdit={onSubmitEdit}
            ></PasswordTextBox>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpStep4;
