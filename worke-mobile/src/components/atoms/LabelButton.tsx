import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import styles from "../../styles";
import { LabelButtonImages } from "../../LabelButtonImages";

interface Props {
  text: string;
  color: string;
  onPress: () => void;
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
  const image = LabelButtonImages.GetImage(imageColor);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.labelButton}
      activeOpacity={1}
    >
      <Text style={styles.textLabelButton(color)}>{text}</Text>
      {!hideImage ? <Image source={image} /> : ""}
    </TouchableOpacity>
  );
};

export default LabelButton;
