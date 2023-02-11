import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";

interface Props {
  exercise: string;
  description: string;
  selected: boolean;
}

const ExerciseCardEdit: React.FC<Props> = ({
  exercise,
  description,
  selected,
}) => {
  return (
    <View style={styles.cardExerciseEdit}>
      <View style={styles.exerciseEditInfo}>
        <Text style={styles.exerciseEditTitle}>{exercise}</Text>
        <Text style={styles.exerciseEditDesc}>{description}</Text>
      </View>
      {selected ? (
        <FontAwesome name="check-circle" size={24} color={COLORS.green} />
      ) : (
        ""
      )}
    </View>
  );
};

export default ExerciseCardEdit;
