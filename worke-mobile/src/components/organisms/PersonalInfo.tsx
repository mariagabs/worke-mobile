import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInputMask } from "react-native-masked-text";
import { COLORS } from "../../../assets/colors";

const PersonalInfo: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => {
    const getData = async () => {
      let user = JSON.parse(await AsyncStorage.getItem("user"));
      setName(user.name);
      setEmail(user.email);

      let day = user.birth_date.split("-")[2];
      let month = user.birth_date.split("-")[1];
      let year = user.birth_date.split("-")[0];
      setBirthDate(day + "/" + month + "/" + year);
    };

    getData();
  }, []);

  const onChangeDateHandler = (date) => {
    setBirthDate(date);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.backgroundWhite}>
        <View>
          <ScrollView automaticallyAdjustKeyboardInsets={true} bounces={false}>
            <View>
              <View style={styles.personalInfo}>
                <View style={styles.personalInfoField}>
                  <Text style={styles.fieldTitle}>nome completo</Text>
                  <TextBox text={name}></TextBox>
                </View>
                <View style={styles.personalInfoField}>
                  <Text style={styles.fieldTitle}>data de nascimento</Text>
                  <TextInputMask
                    type={"datetime"}
                    options={{ format: "DD/MM/YYYY" }}
                    placeholder="dd/mm/aaaa"
                    style={styles.input}
                    value={birthDate}
                    onChangeText={onChangeDateHandler}
                    placeholderTextColor={COLORS.lightGray}
                  ></TextInputMask>
                </View>
                <View style={styles.personalInfoField}>
                  <Text style={styles.fieldTitle}>e-mail</Text>
                  <TextBox text={email}></TextBox>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonBottomBar}>
            <Button buttonText="salvar alterações"></Button>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PersonalInfo;
