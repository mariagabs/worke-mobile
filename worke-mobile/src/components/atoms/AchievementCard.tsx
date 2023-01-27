import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";

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
      <Text style={styles.achievementNumber(color)}>{number}</Text>
      <Text style={styles.achievementDescription(color)}>{description}</Text>
      {sub !== "" ? <Text style={styles.subAchievementCard}>{sub}</Text> : ""}
    </View>
  );
};

export default AchievementCard;
