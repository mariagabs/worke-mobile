import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import BackButton from "../atoms/BackButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";

interface Props {
  title: string;
  onPress: () => void;
}

const HeaderTitleButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <View style={styles.headerTitle}>
      <BackButton onPress={onPress}></BackButton>
      <Text style={styles.pageTitle}>{title}</Text>
    </View>
  );
};

export default HeaderTitleButton;
