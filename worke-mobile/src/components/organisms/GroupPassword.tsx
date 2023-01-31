import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import PasswordTextBox from "../molecules/PasswordTextBox/PasswordTextBox";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";

const GroupPassword: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
      <PasswordTextBox></PasswordTextBox>
    </View>
  );
};

export default GroupPassword;
