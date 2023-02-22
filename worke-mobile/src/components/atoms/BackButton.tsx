import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "../../styles";

interface Props {
  onPress?: () => void;
}

const BackButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.arrowBack} onPress={onPress}>
      <Image source={require("../../../assets/arrow-back.png")} />
    </TouchableOpacity>
  );
};

export default BackButton;
