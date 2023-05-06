import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles";

interface Props {
  navigation?: any;
}

const SignUpStep9: React.FC<Props> = ({ navigation }) => {
  const next = () => navigation.navigate("SignUpStep6");
  const [invalidInput, setInvalidInput] = useState(false);
  const [selected, setSelected] = useState("");

  const select = (value) => {
    setInvalidInput(false);
    if (selected === "" || selected.indexOf(value) === -1) {
      setSelected(selected + value);
      setInvalidInput(false);
    } else if (selected.indexOf(value) !== -1) {
      setSelected(selected.replace(value, ""));
    }
  };

  const validateSelection = () => {
    if (selected === "") setInvalidInput(true);
    else {
      setInvalidInput(false);
      next();
    }
  };

  return (
    <View>
      <View style={styles.centerView}>
        <Image source={require("../../../assets/happy-green.png")}></Image>
        <Text
          style={
            (styles.defaultText,
            styles.fontBlack,
            styles.fullWidth,
            styles.font32,
            styles.marginTop20,
            styles.letterSpacing2)
          }
        >
          EBA!
        </Text>
        <Text
          style={
            (styles.defaultText,
            styles.font20,
            styles.fontDefault,
            styles.width70)
          }
        >
          Seu cadastro está pronto! {"\n"}Inicie para sua vida ficar ainda mais
          saudável!
        </Text>
      </View>
    </View>
  );
};

export default SignUpStep9;
