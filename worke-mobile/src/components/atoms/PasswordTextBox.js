import React, { useState } from "react";
import { COLORS } from "../../../assets/colors.js";
import { StyleSheet, View, Pressable } from "react-native";
import { useTogglePasswordVisibility } from "./useTogglePasswordVisibility";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextBox from "./TextBox.js";

const PasswordTextBox = () => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  // const [password, setPassword] = useState("");

  return (
    <View style={styles.input}>
      <TextBox
        inputPlaceHolder="Senha"
        secureTextEntry={passwordVisibility}
        autoCorrect={false}
        // onChangeText={(text) => setPassword(text)}
      />
      <Pressable onPress={handlePasswordVisibility} style={styles.eyeIcon}>
        <MaterialCommunityIcons
          name={rightIcon}
          size={22}
          color={COLORS.lightGray}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    justifyContent: "center",
  },
  eyeIcon: {
    alignSelf: "flex-end",
    position: "absolute",
    paddingRight: 18,
    paddingTop: 20,
  },
});

export default PasswordTextBox;
