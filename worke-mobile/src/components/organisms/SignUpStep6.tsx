import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import styles from "../../styles";
import Steps from "../atoms/Steps";
import BackButton from "../atoms/BackButton";
import StepsCount from "../molecules/StepsCount";
import { COLORS } from "../../../assets/colors";
import BlankTextBox from "../atoms/BlankTextBox";
import LabelButton from "../atoms/LabelButton";
import ErrorLabel from "../atoms/ErrorLabel";

interface Props {
  navigation?: any;
}

const SignUpStep4: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("SignUpStep3");
  const next = () => navigation.navigate("SignUpStep5");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [date, setDate] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const onChangeDateHandler = (date) => {
    setDate(date);

    if (date !== "") setInvalidInput(false);
  };

  const validateDate = () => {
    let regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    if (regex.test(date)) {
      var parts = date.split("/");
      var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
      var dtCurrent = new Date();

      if (dtCurrent.getFullYear() < dtDOB.getFullYear()) {
        setInvalidInput(true);
        return;
      }

      if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 13) {
        setInvalidInput(true);
        return;
      }

      setInvalidInput(false);
      next();
    } else {
      setInvalidInput(true);
    }
  };

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={styles.title(200)}>
          Quando você <Text style={styles.titleBold}>nasceu?</Text>
        </Text>
        <BlankTextBox
          color={COLORS.pink}
          onTouchStart={() => setKeyboardVisible(true)}
          type="date"
          onChangeText={onChangeDateHandler}
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
