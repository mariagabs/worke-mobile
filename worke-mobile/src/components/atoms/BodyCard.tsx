import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";

interface Props {
  weight?: string;
  height?: string;
}

const BodyCard: React.FC<Props> = ({ weight, height }) => {
  return (
    <View style={styles.bodyCard(weight !== "" ? COLORS.blue : COLORS.purple)}>
      <Text
        style={styles.bodyCardTitle(
          weight !== "" ? COLORS.blue : COLORS.purple,
        )}
      >
        {weight !== "" ? "peso atual" : "altura"}
      </Text>
      <Text style={styles.bodyCardDescription}>
        {weight !== "" ? weight + " kg" : height + " cm"}
      </Text>
    </View>
  );
};

export default BodyCard;
