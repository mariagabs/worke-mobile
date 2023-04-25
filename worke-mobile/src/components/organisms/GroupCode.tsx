import React from "react";
import { View, Text } from "react-native";
import InputCode from "../atoms/InputCode";
import styles from "../../styles";
import Button from "../atoms/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
  navigation: any;
}
const GroupCode: React.FC<Props> = ({ navigation }) => {
  const teste = (text) => {
    console.log(text);
  };
  return (
    <View style={styles.codeGroup}>
      <View style={styles.groupTitleGroup}>
        <Text style={styles.groupTitle}>Código do</Text>
        <Text style={styles.groupTitleBold}>grupo</Text>
      </View>
      <InputCode navigation={navigation}></InputCode>
    </View>
  );
};

export default GroupCode;
