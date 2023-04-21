import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  text: string;
  onPress: () => void;
}

const ButtonExercise: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.buttonExercise}
      onPress={onPress}
    >
      <Text style={styles.buttonExerciseText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonExercise;
