import React from "react";
import { View } from "react-native";
import SkipButton from "../atoms/SkipButton";
import LabelButton from "../atoms/LabelButton";
import styles from "../../styles";

interface Props {
  onPress: () => void;
  color: string;
  imageColor: string;
  text: string;
}

const LabelSkipButton: React.FC<Props> = ({
  onPress,
  color,
  imageColor,
  text,
}) => {
  return (
    <View>
      <LabelButton
        color={color}
        imageColor={imageColor}
        onPress={onPress}
        text={text}
      ></LabelButton>
    </View>
  );
};

export default LabelSkipButton;
