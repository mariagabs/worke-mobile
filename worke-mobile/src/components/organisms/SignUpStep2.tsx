import React, { useState, useEffect } from "react";
import { View, Text, Keyboard } from "react-native";
import TextBox from "../atoms/TextBox";
import styles from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  onPressText: (keyboardVisible) => void;
  invalidInput?: boolean;
  onSubmitEdit: () => void;
}

const SignUpStep2: React.FC<Props> = ({
  onPressText,
  invalidInput,
  onSubmitEdit,
}) => {
  const [name, setName] = useState("");
  const onChangeNameHandler = (name) => {
    setName(name);
  };
  const saveName = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    userCreate.name = name;
    userCreate.first_name =
      name.indexOf(" ") !== -1 ? name.split(" ")[0] : name;

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getName = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);

      setName(userCreate.name);
    };

    getName().catch(console.error);
  }, []);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={[styles.title, styles.width250]}>
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
            onBlur={saveName}
            onTouchStart={() => {
              onPressText(true);
            }}
            text={name}
            submitEdit={onSubmitEdit}
          ></TextBox>
        </View>
      </View>
    </View>
  );
};

export default SignUpStep2;
