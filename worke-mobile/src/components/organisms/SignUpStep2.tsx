import React, { useState } from "react";
import { View, Text } from "react-native";
import TextBox from "../atoms/TextBox";
import styles from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation?: any;
  onPressText: (keyboardVisible) => void;
  invalidInput?: boolean;
}

const SignUpStep2: React.FC<Props> = ({ onPressText, invalidInput }) => {
  const [name, setName] = useState("");

  const getName = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    setName(userCreate.name);
  };

  const onChangeNameHandler = async (name) => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    setName(name);

    userCreate.name = name;
    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  getName();

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
            text={name}
          ></TextBox>
        </View>
      </View>
    </View>
  );
};

export default SignUpStep2;
