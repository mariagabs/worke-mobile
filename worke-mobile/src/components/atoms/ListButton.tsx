import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles";

interface Props {
  edit: boolean;
  text: string;
  onPress: (edit) => void;
}

const ListButton: React.FC<Props> = ({ edit, text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={(type) => {
        onPress(!edit);
      }}
      style={styles.listButton(edit)}
    >
      <Text style={styles.listButtonText(edit)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ListButton;
