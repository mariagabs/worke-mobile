import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

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
      style={[
        styles.selectionLabel,
        !selected
          ? color === COLORS.pink
            ? styles.textPink
            : color === COLORS.purple
            ? styles.textPurple
            : color === COLORS.blue
            ? styles.textBlue
            : styles.textGreen
          : color === COLORS.pink
          ? styles.backgroundPink
          : color === COLORS.purple
          ? styles.backgroundPurple
          : color === COLORS.blue
          ? styles.backgroundBlue
          : styles.backgroundGreen,
        color === COLORS.pink
          ? styles.borderPink
          : color === COLORS.purple
          ? styles.borderPurple
          : color === COLORS.blue
          ? styles.borderBlue
          : styles.borderGreen,
      ]}
      activeOpacity={1}
    >
      <Text
        style={[
          styles.textSelectionLabel,
          !selected
            ? color === COLORS.pink
              ? styles.textPink
              : color === COLORS.purple
              ? styles.textPurple
              : color === COLORS.blue
              ? styles.textBlue
              : styles.textGreen
            : styles.textWhite,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectionLabel;
