import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";

interface Props {
  steps: number;
  currentStep: number;
}

const StepsCount: React.FC<Props> = ({ steps, currentStep }) => {
  return (
    <View style={styles.stepsCount}>
      <Text style={styles.stepsCountText}>
        {currentStep}/{steps}
      </Text>
    </View>
  );
};

export default StepsCount;
