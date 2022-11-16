import React, { useState } from "react";
import { COLORS } from "../../../assets/colors.js";
import { TextInput, StyleSheet, View, Pressable } from "react-native";
import { useTogglePasswordVisibility } from "./useTogglePasswordVisibility";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TextBox = ({ inputPlaceHolder, passwordInput }) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState("");

  return (
    <View>
      {passwordInput ? (
        <View style={styles.input}>
          <TextInput
            placeholder={inputPlaceHolder}
            style={styles.passwordInput}
            secureTextEntry={passwordVisibility}
            value={password}
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable onPress={handlePasswordVisibility} style={styles.eyeIcon}>
            <MaterialCommunityIcons
              name={rightIcon}
              size={22}
              color={COLORS.lightGray}
            />
          </Pressable>
        </View>
      ) : (
        <TextInput style={styles.input} placeholder={inputPlaceHolder} />
      )}
    </View>
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
  passwordInput: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 16,
  },
  eyeIcon: {
    alignSelf: "flex-end",
    position: "absolute",
    paddingRight: 18,
  },
  showPassword: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default TextBox;
