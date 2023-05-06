import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../../../assets/colors";

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
        <View
          style={[
            styles.barLevelProgress(progressBar),
            color === COLORS.pink
              ? styles.backgroundPink
              : color === COLORS.purple
              ? styles.backgroundPurple
              : color === COLORS.blue
              ? styles.backgroundBlue
              : styles.backgroundGreen,
          ]}
        ></View>
      </View>
      <View style={styles.levelDetails}>
        <Text
          style={[
            styles.infoColor,
            color === COLORS.pink
              ? styles.textPink
              : color === COLORS.purple
              ? styles.textPurple
              : color === COLORS.blue
              ? styles.textBlue
              : styles.textGreen,
          ]}
        >
          INICIANTE
        </Text>
        <Text style={styles.level}>NÍVEL {level}</Text>
      </View>
    </View>
  );
};

export default LevelProgress;
