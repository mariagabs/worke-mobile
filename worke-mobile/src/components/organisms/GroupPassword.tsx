import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  UIManager,
  Platform,
  LayoutAnimation,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import PasswordTextBox from "../molecules/PasswordTextBox/PasswordTextBox";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GroupPassword: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [password, setPassword] = useState("");
  const toggleSwitch = () => {
    LayoutAnimation.easeInEaseOut();

    setIsEnabled((previousState) => !previousState);
  };

  const onChangePasswordHandler = (value) => {
    setPassword(value);
  };

  const setPasswordStorage = async () => {
    let group = await AsyncStorage.getItem("userGroup");
    let userGroup = JSON.parse(group);

    userGroup.password = password;

    await AsyncStorage.setItem("userGroup", JSON.stringify(userGroup));
  };

  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
    <View style={styles.groupPassword}>
      <View style={styles.hasPassword}>
        <View style={styles.headerGroupPassword}>
          <FontAwesome5 name="lock" size={24} color={COLORS.green} />
          <Text style={styles.titleGroupPassword}>senha?</Text>
        </View>
        <Switch
          trackColor={{ true: COLORS.green }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        ></Switch>
      </View>
      {isEnabled ? (
        <View style={styles.passwordGroup}>
          <PasswordTextBox
            placeholder="Senha"
            onChangeText={onChangePasswordHandler}
            onBlur={setPasswordStorage}
          ></PasswordTextBox>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default GroupPassword;
