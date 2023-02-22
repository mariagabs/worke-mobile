import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import BackButton from "../atoms/BackButton";

interface Props {
  steps: number;
  currentStep: number;
}

const StepsCount: React.FC<Props> = ({ steps, currentStep }) => {
  return (
    <View>
      <View style={currentStep > 0 ? styles.backButtonSignUp : ""}>
        <BackButton />
      </View>
      {currentStep > 0 ? (
        <View style={styles.stepsCount}>
          <Text style={styles.stepsCountText}>
            {currentStep}/{steps}
          </Text>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default StepsCount;
