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
  idExercise: string;
  onPress: (id) => void;
}

const ExerciseCard: React.FC<Props> = ({
  idExercise,
  color,
  exercise,
  description,
  list,
  onPress,
}) => {
  const image = LabelButtonImages.GetImageDesc(color);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.exerciseCard(color, list)}
      onPress={(id) => {
        onPress(idExercise);
      }}
    >
      <Text style={styles.exerciseCardTitle(color)}>{exercise}</Text>
      <Text style={styles.exerciseCardDesc}>{description}</Text>
      <Image source={image} style={styles.exerciseCardImage}></Image>
    </TouchableOpacity>
  );
};

export default ExerciseCard;
