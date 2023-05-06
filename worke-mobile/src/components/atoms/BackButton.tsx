import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "../../styles";

interface Props {
  onPress?: (step) => void;
  currentStep?: number;
}

const BackButton: React.FC<Props> = ({ onPress, currentStep }) => {
  return (
    <TouchableOpacity
      style={styles.arrowBack}
      onPress={(step) => {
        onPress(currentStep > 0 ? currentStep - 1 : 0);
      }}
    >
      <Image source={require("../../../assets/arrow-back.png")} />
    </TouchableOpacity>
  );
};

export default BackButton;
