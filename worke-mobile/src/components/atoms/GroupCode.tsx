import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

interface Props {
  code: string;
}

const GroupCode: React.FC<Props> = ({ code }) => {
  return (
    <View style={styles.cardGroupCode}>
      <Text style={styles.cardGroupCodeTitle}>grupo</Text>
      <View style={styles.infoCardGroupCode}>
        <Text style={styles.codeGroupCard}>{code}</Text>
        {/* <FontAwesome5 name="share-alt" size={20} color={COLORS.black} /> */}
      </View>
    </View>
  );
};

export default GroupCode;
