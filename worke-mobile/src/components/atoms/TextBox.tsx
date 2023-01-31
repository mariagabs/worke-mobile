import React from "react";
import { TextInput, Text, View, KeyboardTypeOptions } from "react-native";
import styles from "../../styles.js";

interface Props {
  inputPlaceHolder?: string;
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
  onChangeText?: (text: any) => void;
  errorInput?: boolean;
  errorText?: string;
  keyboardType?: KeyboardTypeOptions;
  top?: number;
  submitEdit?: () => void;
  text?: string;
  onTouchStart?: () => void;
}

const TextBox: React.FC<Props> = ({
  inputPlaceHolder,
  secureTextEntry,
  autoCorrect,
  onChangeText,
  errorInput,
  errorText,
  keyboardType,
  top,
  submitEdit,
  text,
  onTouchStart,
}) => {
  return (
    <View>
      <TextInput
        style={errorInput ? styles.errorInput : styles.input}
        placeholder={inputPlaceHolder}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onSubmitEditing={submitEdit}
        onTouchStart={onTouchStart}
      >
        {text}
      </TextInput>
      {errorInput ? <Text style={styles.errorText}>{errorText}</Text> : null}
    </View>
  );
};

export default TextBox;
