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

const SignUpStep6: React.FC<Props> = ({
  onPressText,
  invalidInput,
  onSubmitEdit,
}) => {
  const [weight, setWeight] = useState("");

  const onChangeWeightHandler = (weight) => {
    setWeight(weight);
  };

  const saveWeight = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    userCreate.weight = weight;

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getWeight = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);

      setWeight(userCreate.weight);
    };

    getWeight().catch(console.error);
  }, []);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={styles.title(250)}>
          Qual o seu <Text style={styles.titleBold}>peso?</Text>
        </Text>
        <BlankTextBox
          color={COLORS.purple}
          onTouchStart={() => onPressText(true)}
          onBlur={saveWeight}
          type="weight"
          complementaryText="kg"
          onChangeText={onChangeWeightHandler}
          text={weight}
          submitEdit={onSubmitEdit}
        ></BlankTextBox>
      </View>
      {invalidInput ? (
        <ErrorLabel
          errorText="Ops, informe um peso válido!"
          bottom={-150}
        ></ErrorLabel>
      ) : (
        ""
      )}
    </View>
  );
};

export default SignUpStep6;
