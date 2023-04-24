import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  level: string;
  color: string;
  progress: string;
}

const LevelProgress: React.FC<Props> = ({ level, color, progress }) => {
  let progressBar = !progress ? "0%" : progress + "%";
  return (
    <View style={styles.levelProgress}>
      <View style={styles.barLevel}>
        <View style={styles.barLevelProgress(progressBar, color)}></View>
      </View>
      <View style={styles.levelDetails}>
        <Text style={styles.infoColor(color)}>INICIANTE</Text>
        <Text style={styles.level}>NÍVEL {level}</Text>
      </View>
    </View>
  );
};

export default LevelProgress;
