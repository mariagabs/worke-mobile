import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../assets/colors.js";

const Button = ({ buttonText }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}> {buttonText} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    fontFamily: "Nunito-Black",
  },
  button: {
    backgroundColor: COLORS.black,
    width: "100%",
    borderRadius: 7,
    height: 48,
    paddingVertical: 15,
  },
});
export default Button;
