import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";

interface Props {
  userID?: number;
  color: string;
}

const LevelProgress: React.FC<Props> = ({ userID, color }) => {
  return (
    <View style={styles.levelProgress}>
      <View style={styles.barLevel}>
        <View style={styles.barLevelProgress("20%", color)}></View>
      </View>
      <View style={styles.levelDetails}>
        <Text style={styles.infoColor(color)}>INICIANTE</Text>
        <Text style={styles.level}>NÍVEL 10</Text>
      </View>
    </View>
  );
};

export default LevelProgress;
