import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { Octicons } from "@expo/vector-icons";

interface Props {
  color: string;
  level: string;
}

const Star: React.FC<Props> = ({ color, level }) => {
  return (
    <View>
      <Octicons name="star-fill" size={30} color={color} />
      <Text style={styles.starText}>{level}</Text>
    </View>
  );
};

export default Star;
