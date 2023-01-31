import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "../../styles";

interface Props {
  onPress: () => void;
  signUpPage: boolean;
}

const BackButton: React.FC<Props> = ({ onPress, signUpPage }) => {
  return (
    <TouchableOpacity style={styles.arrowBack(signUpPage)} onPress={onPress}>
      <Image source={require("../../../assets/arrow-back.png")} />
    </TouchableOpacity>
  );
};

export default BackButton;
