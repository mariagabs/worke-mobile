import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";
import { LabelButtonImages } from "../../LabelButtonImages";

interface Props {
  color: string;
  exercise: string;
  description: string;
  list: boolean;
}

const ExerciseCard: React.FC<Props> = ({
  color,
  exercise,
  description,
  list,
}) => {
  const image = LabelButtonImages.GetImageDesc(color);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.exerciseCard(color, list)}
    >
      <Text style={styles.exerciseCardTitle(color)}>{exercise}</Text>
      <Text style={styles.exerciseCardDesc}>{description}</Text>
      <Image source={image} style={styles.exerciseCardImage}></Image>
    </TouchableOpacity>
  );
};

export default ExerciseCard;
