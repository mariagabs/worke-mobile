import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image,
} from "react-native";
import styles from "../../styles";
import GroupCode from "../organisms/GroupCode";
import CreateGroupLabel from "../atoms/CreateGroupLabel";

interface Props {
  navigation: any;
}

const Group: React.FC<Props> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.view}>
          <Image
            style={styles.linesOnTop}
            source={require("../../../assets/4-lines.png")}
          ></Image>
          <GroupCode navigation={navigation}></GroupCode>
          <CreateGroupLabel navigation={navigation}></CreateGroupLabel>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Group;
