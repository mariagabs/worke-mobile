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

const SignUpStep8: React.FC<Props> = ({ invalidInput }) => {
  const [selected, setSelected] = useState([""]);

  const setSelect = (value) => {
    let list = selected;

    if (selected.includes(value)) {
      list = list.filter((item) => item !== value);
      setSelected(list);
    } else {
      setSelected((old) => [...old, value]);
    }
  };

  const select = async (value) => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    let list = selected;

    if (selected.length === 0 || !selected.includes(value.toString())) {
      list.push(value);
      // setSelected((old) => [...old, value]);
      console.log("selected", list);
      userCreate.expectations = JSON.stringify(list);
    } else if (selected.includes(value.toString())) {
      list = list.filter((item) => item !== value.toString());
      // setSelected((old) => [...old, value]);
      console.log("deselect", list);
      userCreate.expectations = JSON.stringify(list);
    }

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getExpectations = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);
      setSelected(JSON.parse(userCreate.expectations));
    };

    getExpectations().catch(console.error);

    console.log("load", selected);
  }, []);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={styles.title(250)}>
          Quais são suas
          <Text style={styles.titleBold}> expectativas</Text>?
        </Text>
        <View style={styles.expectations}>
          <View style={styles.expect}>
            <SelectionLabel
              text="ser mais saudável"
              color={COLORS.green}
              onPress={() => {
                setSelect("1");
                select("1");
              }}
              selected={selected.includes("1")}
            ></SelectionLabel>
            <SelectionLabel
              text="iniciar uma atividade física"
              color={COLORS.blue}
              onPress={() => {
                setSelect("2");
                select("2");
              }}
              selected={selected.includes("2")}
            ></SelectionLabel>
          </View>
          <View style={styles.expect}>
            <SelectionLabel
              text="               criar hábitos"
              color={COLORS.pink}
              onPress={() => {
                setSelect("3");
                select("3");
              }}
              selected={selected.includes("3")}
            ></SelectionLabel>
            <SelectionLabel
              text="               motivação"
              color={COLORS.purple}
              onPress={() => {
                setSelect("4");
                select("4");
              }}
              selected={selected.includes("4")}
            ></SelectionLabel>
          </View>
        </View>
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

export default SignUpStep8;
