import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";
import ErrorLabel from "../atoms/ErrorLabel";
import SelectionLabel from "../atoms/SelectionLabel";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  invalidInput?: boolean;
}

const SignUpStep7: React.FC<Props> = ({ invalidInput }) => {
  const [selected, setSelected] = useState("0");

  const setSelect = (value) => {
    if (selected !== value) setSelected(value);
    else setSelected("0");
  };
  const select = async (value) => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    if (selected !== value) {
      userCreate.frequency = value.toString();
    } else {
      userCreate.frequency = "0";
    }

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getFrequency = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);

      setSelected(userCreate.frequency);
    };

    getFrequency().catch(console.error);
  }, []);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={[styles.title, styles.width250]}>
          Quantas vezes na semana você faz
          <Text style={styles.titleBold}> exercícios físicos</Text>?
        </Text>
        <SelectionLabel
          text="Nenhuma"
          color={COLORS.green}
          onPress={() => {
            select("1");
            setSelect("1");
          }}
          selected={selected === "1"}
        ></SelectionLabel>
        <SelectionLabel
          text="1 ou 2 vezes"
          color={COLORS.pink}
          onPress={() => {
            select("2");
            setSelect("2");
          }}
          selected={selected === "2"}
        ></SelectionLabel>
        <SelectionLabel
          text="mais de 3 vezes"
          color={COLORS.blue}
          onPress={() => {
            select("3");
            setSelect("3");
          }}
          selected={selected === "3"}
        ></SelectionLabel>
      </View>
      {invalidInput ? (
        <ErrorLabel
          errorText="Ops, selecione uma opção!"
          bottom={-90}
        ></ErrorLabel>
      ) : (
        ""
      )}
    </View>
  );
};

export default SignUpStep7;
