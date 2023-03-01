import React from "react";
import { View } from "react-native";
import StepsAtom from "../atoms/Steps";
import StepsCount from "./StepsCount";

interface Props {
  qtySteps: number;
  currentStep: number;
  onPress: (step) => void;
}

const Steps: React.FC<Props> = ({ qtySteps, currentStep, onPress }) => {
  return (
    <View>
      {currentStep > 0 ? <StepsAtom qtd={qtySteps} step={currentStep} /> : ""}
      <StepsCount
        steps={qtySteps}
        currentStep={currentStep}
        onPress={(step) => {
          onPress(step);
        }}
      />
    </View>
  );
};

export default Steps;
