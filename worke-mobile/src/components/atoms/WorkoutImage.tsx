import React from "react";
import { View, Image } from "react-native";
import { WorkoutImages } from "../../WorkoutImages";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

interface Props {
  workout: string;
  color: string;
}

const WorkoutImage: React.FC<Props> = ({ workout, color }) => {
  const image = WorkoutImages.GetImage(workout.toString());
  return (
    <View
      style={[
        styles.workoutBackgroundImage,
        color === COLORS.pink
          ? styles.backgroundLightPink
          : color === COLORS.purple
          ? styles.backgroundLightPurple
          : color === COLORS.blue
          ? styles.backgroundLightBlue
          : styles.backgroundLightGreen,
      ]}
    >
      <Image source={image}></Image>
    </View>
  );
};

export default WorkoutImage;
