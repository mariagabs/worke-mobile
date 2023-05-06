import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

interface Props {
  color: string;
  rank: string;
}

const RankingIndicator: React.FC<Props> = ({ color, rank }) => {
  return (
    <View
      style={[
        styles.rankTextBackground,
        color === COLORS.pink
          ? styles.backgroundLightPink
          : color === COLORS.purple
          ? styles.backgroundLightPurple
          : color === COLORS.blue
          ? styles.backgroundLightBlue
          : styles.backgroundLightGreen,
      ]}
    >
      <Text
        style={[
          styles.rankText,
          color === COLORS.pink
            ? styles.textPink
            : color === COLORS.purple
            ? styles.textPurple
            : color === COLORS.blue
            ? styles.textBlue
            : styles.textGreen,
        ]}
      >
        {rank}
      </Text>
    </View>
  );
};

export default RankingIndicator;
