import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";

interface Props {
  edit: boolean;
  text: string;
}

const ListButton: React.FC<Props> = ({ edit, text }) => {
  return (
    <TouchableOpacity
      style={styles.listButton(edit ? COLORS.darkWhite : COLORS.green)}
    >
      <Text style={styles.listButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ListButton;
