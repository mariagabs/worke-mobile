import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles";

interface Props {
  errorText: string;
  bottom: number;
}

const ErrorLabel: React.FC<Props> = ({ errorText, bottom }) => {
  return (
    <View style={styles.centerView}>
      <Text style={styles.errorTextBlank(bottom)}>{errorText}</Text>
    </View>
  );
};

export default ErrorLabel;
