import React from "react";
import { COLORS } from "../../../assets/colors.js";
import { TextInput, StyleSheet } from "react-native";

const TextBox = ({ inputPlaceHolder, secureTextEntry, autoCorrect }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={inputPlaceHolder}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.lightGray,
    borderRadius: 7,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 18,
    textAlign: "left",
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Nunito-SemiBold",
    justifyContent: "center",
  },
});

export default TextBox;
