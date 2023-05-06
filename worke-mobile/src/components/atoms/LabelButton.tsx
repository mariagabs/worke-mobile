import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import styles from "../../styles";
import { LabelButtonImages } from "../../LabelButtonImages";
import { COLORS } from "../../../assets/colors";

interface Props {
  text: string;
  color: string;
  onPress?: () => void;
  imageColor: string;
  hideImage?: boolean;
}

const LabelButton: React.FC<Props> = ({
  text,
  color,
  onPress,
  imageColor,
  hideImage,
}) => {
  const image = LabelButtonImages.GetImageColor(imageColor);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.labelButton}
      activeOpacity={1}
    >
      <Text
        style={
          (styles.textLabelButton,
          color === COLORS.pink
            ? styles.textPink
            : color === COLORS.purple
            ? styles.textPurple
            : color === COLORS.blue
            ? styles.textBlue
            : styles.textGreen)
        }
      >
        {text}
      </Text>
      {!hideImage ? <Image source={image} /> : ""}
    </TouchableOpacity>
  );
};

export default LabelButton;
