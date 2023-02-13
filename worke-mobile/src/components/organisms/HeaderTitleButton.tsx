import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import BackButton from "../atoms/BackButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";

interface Props {
  title: string;
  onPress: () => void;
  search: boolean;
}

const HeaderTitleButton: React.FC<Props> = ({ title, onPress, search }) => {
  return (
    <View style={styles.headerTitle}>
      <BackButton signUpPage={false} onPress={onPress}></BackButton>
      <Text style={styles.pageTitle}>{title}</Text>
      {search ? (
        <View style={styles.searchHeaderTitle}>
          <FontAwesome5 name="search" size={24} color={COLORS.lighterGray} />
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default HeaderTitleButton;
