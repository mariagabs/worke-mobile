import React from "react";
import { View } from "react-native";
import StepsAtom from "../atoms/Steps";
import StepsCount from "./StepsCount";

interface Props {
  qtySteps: number;
  currentStep: number;
}

const Steps: React.FC<Props> = ({ qtySteps, currentStep }) => {
  return (
    <View>
      {currentStep > 0 ? <StepsAtom qtd={qtySteps} step={currentStep} /> : ""}
      <StepsCount steps={qtySteps} currentStep={currentStep} />
    </View>
  );
};

export default Steps;
