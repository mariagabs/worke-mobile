import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";

interface Props {
  color: string;
  rank: string;
}

const RankingIndicator: React.FC<Props> = ({ color, rank }) => {
  const lightColor = color
    .replace("#3F2180", "#DAD0F0")
    .replace("#EA3A86", "#FFDAEC")
    .replace("#49B7D6", "#D6F0F8")
    .replace("#A8CD5A", "#E2F3BF");

  return (
    <View style={styles.rankTextBackground(lightColor)}>
      <Text style={styles.rankText(color)}>{rank}</Text>
    </View>
  );
};

export default RankingIndicator;
