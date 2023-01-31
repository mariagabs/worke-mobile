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
        <View style={styles.view}>
          <Image
            style={styles.linesOnTop}
            source={require("../../../assets/4-lines.png")}
          ></Image>
          <GroupCode></GroupCode>
          <CreateGroupLabel></CreateGroupLabel>
        </View>
    </KeyboardAvoidingView>
  );
};

export default Group;
