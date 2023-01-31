import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles.js";

interface Props {
  buttonText: string;
  onClick?: (event: any) => Promise<void>;
}

const Button: React.FC<Props> = ({ buttonText, onClick }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}> {buttonText} </Text>
    </TouchableOpacity>
  );
};

export default Button;
