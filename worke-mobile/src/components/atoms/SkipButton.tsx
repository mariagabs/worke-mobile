import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../../styles";

interface Props {
  onPress: () => void;
}

const SkipButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <Text style={styles.skipButton}>PULAR</Text>
    </TouchableOpacity>
  );
};

export default SkipButton;
