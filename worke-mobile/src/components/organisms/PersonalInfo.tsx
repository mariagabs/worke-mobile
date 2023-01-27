import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import styles from "../../styles";
import TextBox from "../atoms/TextBox";
import Button from "../atoms/Button";

interface Props {
  userInfo: { name: string; dateBirth: string; email: string };
}

const PersonalInfo: React.FC<Props> = ({ userInfo }) => {
  userInfo = {
    name: "Karina Oliveira",
    dateBirth: "10/05/1966",
    email: "karina.oliveira@gmail.com",
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.backgroundWhite}>
        <ScrollView automaticallyAdjustKeyboardInsets={true} bounces={false}>
          <View>
            <View style={styles.personalInfo}>
              <View style={styles.personalInfoField}>
                <Text style={styles.fieldTitle}>nome completo</Text>
                <TextBox text={userInfo.name}></TextBox>
              </View>
              <View style={styles.personalInfoField}>
                <Text style={styles.fieldTitle}>data de nascimento</Text>
                <TextBox text={userInfo.dateBirth}></TextBox>
              </View>
              <View style={styles.personalInfoField}>
                <Text style={styles.fieldTitle}>e-mail</Text>
                <TextBox text={userInfo.email}></TextBox>
              </View>
            </View>
            <View style={styles.buttonBottomBar}>
              <Button buttonText="salvar alterações"></Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PersonalInfo;
