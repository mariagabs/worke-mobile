import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";

const CapacityAd: React.FC = () => {
  return (
    <View style={styles.capacityAd}>
      <FontAwesome5 name="info-circle" size={24} color={COLORS.purple} />
      <Text style={styles.infoCapacityAd}>
        Gostaria de ter um número maior de pessoas no seu grupo?
        <Text style={styles.infoCapacityAdSpan}> Clique aqui!</Text>
      </Text>
    </View>
  );
};

export default CapacityAd;
