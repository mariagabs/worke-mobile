import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, SafeAreaView, Text } from "react-native";
import styles from "../../styles.js";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../atoms/Button.tsx";
import axios from "axios";
import PasswordTextBox from "../molecules/PasswordTextBox/PasswordTextBox.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CELL_COUNT = 4;

interface Props {
  navigation: any;
}

const InputCode: React.FC<Props> = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [group, setGroup] = useState([]);
  const [hasPassword, setHasPassword] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [password, setPassword] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const menu = () => navigation.navigate("Menu");
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onChangePassword = (password) => {
    setPassword(password);
  };

  const checkGroup = (text) => {
    setValue(text);
    console.log(text.toUpperCase());
    if (text.length === 4) {
      const configurationObject = {
        url: "http://54.237.75.229:8000/grupoCodigo/" + text.toUpperCase(),
        method: "GET",
      };

      axios(configurationObject)
        .then((response) => {
          if (response.status === 200) {
            setGroup(response.data);
            setHasPassword(group.senha !== "");
          } else {
            throw new Error("An error has occurred");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const checkPassword = () => {
    console.log(password);
    console.log(group.senha);
    if (password !== group.senha) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
      addToGroup();
    }
  };

  const addToGroup = async () => {
    let user = JSON.parse(await AsyncStorage.getItem("user"));
    user.group_code = group.codigo;
    user.group = group.id;
    await AsyncStorage.setItem("user", JSON.stringify(user));
    console.log("user: ", user);
    const configurationObject = {
      url: "http://54.237.75.229:8000/funcionario/" + user.id,
      method: "POST",
      data: user,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(configurationObject)
      .then((response) => {
        if (response.status === 200) {
          menu();
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkCode = async () => {
    const configurationObject = {
      url: "http://54.237.75.229:8000/funcionario/" + user,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(configurationObject)
      .then((response) => {
        if (response.status === 200) {
          if (!response.data) {
            let group = {
              codigo: code,
              qtd_participantes: 5,
            };
            AsyncStorage.setItem("userGroup", JSON.stringify(group));
            setCode(code);
          } else {
            checkCode();
          }
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.fullWidth}>
      <CodeField
        // onChange={() => checkGroup(value)}
        ref={ref}
        {...props}
        value={value}
        onChangeText={checkGroup}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="default"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[
              styles.inputCode,
              styles.margin10,
              index === 1
                ? styles.purple
                : index === 2
                ? styles.pink
                : index === 3
                ? styles.green
                : styles.blue,
              isFocused && styles.focusCell,
            ]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {hasPassword ? (
        <View style={styles.groupPassword}>
          <PasswordTextBox
            placeholder="Senha"
            onChangeText={onChangePassword}
            errorInput={invalidInput}
            errorText="Ops, senha inválida"
          ></PasswordTextBox>
        </View>
      ) : (
        ""
      )}
      <Button buttonText="ENTRAR" onPress={checkPassword}></Button>
    </View>
  );
};

export default InputCode;
