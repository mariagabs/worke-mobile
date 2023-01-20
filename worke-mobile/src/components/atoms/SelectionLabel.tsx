import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles";

interface Props {
  text: string;
  color: string;
  onPress: () => void;
  selected: boolean;
}

const SelectionLabel: React.FC<Props> = ({
  text,
  color,
  onPress,
  selected,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.selectionLabel(color, selected)}
      activeOpacity={1}
    >
      <Text style={styles.textSelectionLabel(color, selected)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SelectionLabel;
