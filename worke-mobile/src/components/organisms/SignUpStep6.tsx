import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";
import BlankTextBox from "../atoms/BlankTextBox";
import ErrorLabel from "../atoms/ErrorLabel";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  onPressText: (keyboardVisible) => void;
  invalidInput: boolean;
  onSubmitEdit: () => void;
}

const SignUpStep4: React.FC<Props> = ({
  invalidInput,
  onPressText,
  onSubmitEdit,
}) => {
  const [date, setDate] = useState("");

  const onChangeDateHandler = (date) => {
    setDate(date);
  };

  const convertDate = (date, backendDate) => {
    if (date !== "") {
      let month = "";
      let day = "";
      let year = "";

      if (backendDate) {
        day = date.split("/")[2];
        year = date.split("/")[0];
        month = date.split("/")[1];
      } else {
        day = date.split("-")[0];
        year = date.split("-")[2];
        month = date.split("-")[1];
      }
      return backendDate
        ? day + "-" + month + "-" + year
        : year + "/" + month + "/" + day;
    }
    return null;
  };

  const saveDate = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);
    userCreate.birth_date = convertDate(date, true);

    await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate)).catch(
      (error) => console.log(error),
    );
  };

  useEffect(() => {
    const getDate = async () => {
      let user = await AsyncStorage.getItem("userCreate");
      let userCreate = JSON.parse(user);
      setDate(convertDate(userCreate.birth_date, false));
    };

    getDate().catch(console.error);
  }, []);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={(styles.title, styles.width200)}>
          Quando você <Text style={styles.titleBold}>nasceu?</Text>
        </Text>
        <BlankTextBox
          color={COLORS.pink}
          onTouchStart={() => onPressText(true)}
          type="date"
          onChangeText={onChangeDateHandler}
          onBlur={saveDate}
          text={date}
          submitEdit={onSubmitEdit}
        ></BlankTextBox>
      </View>
      {invalidInput ? (
        <ErrorLabel
          errorText="Ops, informe uma data válida!"
          bottom={-150}
        ></ErrorLabel>
      ) : (
        ""
      )}
    </View>
  );
};

export default SignUpStep4;
