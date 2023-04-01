import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";

interface Props {
  level: string;
  color: string;
}

const LevelProgress: React.FC<Props> = ({ level, color }) => {
  return (
    <View style={styles.levelProgress}>
      <View style={styles.barLevel}>
        <View style={styles.barLevelProgress("20%", color)}></View>
      </View>
      <View style={styles.levelDetails}>
        <Text style={styles.infoColor(color)}>INICIANTE</Text>
        <Text style={styles.level}>NÍVEL {level === null ? 1 : level}</Text>
      </View>
    </View>
  );
};

export default LevelProgress;
