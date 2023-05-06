import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";
import { LabelButtonImages } from "../../LabelButtonImages";

interface Props {
  color: string;
  exercise: string;
  description?: string;
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
      style={[
        styles.exerciseCard,
        color === COLORS.pink
          ? styles.borderPink
          : color === COLORS.purple
          ? styles.borderPurple
          : color === COLORS.blue
          ? styles.borderBlue
          : styles.borderGreen,
        list ? styles.exerciseCardSmall : styles.exerciseCardBig,
      ]}
      onPress={(id) => {
        onPress(idExercise);
      }}
    >
      <Text
        style={[
          styles.exerciseCardTitle,
          color === COLORS.pink
            ? styles.textPink
            : color === COLORS.purple
            ? styles.textPurple
            : color === COLORS.blue
            ? styles.textBlue
            : styles.textGreen,
        ]}
      >
        {exercise}
      </Text>
      <Text style={styles.exerciseCardDesc}>{description}</Text>
      <Image source={image} style={styles.exerciseCardImage}></Image>
    </TouchableOpacity>
  );
};

export default ExerciseCard;
