import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../styles";
import { TextInputMask } from "react-native-masked-text";

interface Props {
  color: string;
  complementaryText?: string;
  onTouchStart: () => void;
  type: string;
  onChangeText: (text: any) => void;
  onBlur?: () => void;
  text?: string;
  submitEdit: () => void;
}

const BlankTextBox: React.FC<Props> = ({
  color,
  complementaryText,
  onTouchStart,
  type,
  onChangeText,
  onBlur,
  text,
  submitEdit,
}) => {
  const [date, setDate] = useState("");

  return (
    <View style={styles.centerView}>
      {type === "date" ? (
        <View>
          <TextInputMask
            type={"datetime"}
            options={{ format: "DD/MM/YYYY" }}
            style={styles.blankTextBox(color)}
            onChangeText={(text) => {
              setDate(text);
              onChangeText(text);
            }}
            onTouchStart={onTouchStart}
            placeholder="dd/mm/aaaa"
            onBlur={onBlur}
            onSubmitEditing={submitEdit}
            value={text !== null ? text.toString() : ""}
          ></TextInputMask>
        </View>
      ) : (
        <View style={styles.blankTextBoxComp}>
          <TextInput
            style={styles.blankTextBox(color)}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={(text) => {
              onChangeText(text);
            }}
            onTouchStart={onTouchStart}
            onBlur={onBlur}
            onSubmitEditing={submitEdit}
            value={text !== null ? text.toString() : ""}
          ></TextInput>
          <Text style={styles.complementaryText}> {complementaryText}</Text>
        </View>
      )}
    </View>
  );
};

export default BlankTextBox;
