import React from "react";
import { View, Text } from "react-native";
import InputCode from "../atoms/InputCode";
import styles from "../../styles";
import Button from "../atoms/Button";

const GroupCode: React.FC = () => {

  return (
    <View style={styles.codeGroup}>
        <View style={styles.groupTitleGroup}>
            <Text style={styles.groupTitle}>Código do</Text>
            <Text style={styles.groupTitleBold}>grupo</Text>
        </View>
        <InputCode></InputCode>
        <Button buttonText="ENTRAR"></Button>
    </View>
  );
};

export default GroupCode;
