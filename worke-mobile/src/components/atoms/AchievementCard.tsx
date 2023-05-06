import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

interface Props {
  number: string;
  description: string;
  sub?: string;
  color: string;
}

const AchievementCard: React.FC<Props> = ({
  number,
  description,
  sub,
  color,
}) => {
  return (
    <View style={styles.achievementCard}>
      <Text
        style={[
          styles.achievementNumber,
          color === COLORS.pink
            ? styles.textPink
            : color === COLORS.purple
            ? styles.textPurple
            : color === COLORS.blue
            ? styles.textBlue
            : styles.textGreen,
        ]}
      >
        {number}
      </Text>
      <Text
        style={[
          styles.achievementDescription,
          color === COLORS.pink
            ? styles.textPink
            : color === COLORS.purple
            ? styles.textPurple
            : color === COLORS.blue
            ? styles.textBlue
            : styles.textGreen,
        ]}
      >
        {description}
      </Text>
      {sub !== "" ? <Text style={styles.subAchievementCard}>{sub}</Text> : ""}
    </View>
  );
};

export default AchievementCard;
