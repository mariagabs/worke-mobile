import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import BackButton from "../atoms/BackButton";

interface Props {
  title: string;
}

const HeaderTitleButton: React.FC<Props> = ({ title }) => {
  return (
    <View>
      <BackButton signUpPage={false}></BackButton>
      <Text style={styles.pageTitle}>{title}</Text>
    </View>
  );
};

export default HeaderTitleButton;
