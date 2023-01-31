import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";

const MaxCapacityGroup: React.FC = () => {
  return (
    <View style={styles.maxCapacityGroup}>
      <View style={styles.infoMaxCapacity}>
        <MaterialCommunityIcons
          name="account-group"
          size={24}
          color={COLORS.purple}
        />
        <Text style={styles.titleMaxCapacity}>capacidade máxima</Text>
      </View>
      <Text style={styles.maxCapacity}>5</Text>
    </View>
  );
};

export default MaxCapacityGroup;
