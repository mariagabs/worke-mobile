import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";
import WorkoutImage from "../atoms/WorkoutImage";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  color: string;
  workoutNumber: string;
  workoutTitle: string;
  workoutDesc: string;
  onPress?: (id) => void;
  navigation: any;
}

const WorkoutCard: React.FC<Props> = ({
  color,
  workoutNumber,
  workoutTitle,
  workoutDesc,
  onPress,
  navigation,
}) => {
  const setChosenWorkout = async (number) => {
    await AsyncStorage.setItem("chosenWorkout", number.toString());

    navigation.navigate("WorkoutExercises");
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setChosenWorkout(workoutNumber)}
    >
      <View
        style={[
          styles.workoutCard,
          color === COLORS.pink
            ? styles.borderPink
            : color === COLORS.purple
            ? styles.borderPurple
            : color === COLORS.blue
            ? styles.borderBlue
            : styles.borderGreen,
        ]}
      >
        <View>
          <WorkoutImage workout={workoutNumber} color={color}></WorkoutImage>
        </View>
        <View style={styles.infoWorkoutCard}>
          <Text
            style={[
              styles.workoutNumber,
              color === COLORS.pink
                ? styles.backgroundPink
                : color === COLORS.purple
                ? styles.backgroundPurple
                : color === COLORS.blue
                ? styles.backgroundBlue
                : styles.backgroundGreen,
            ]}
          >
            TREINO {workoutNumber}
          </Text>
          <Text style={styles.workoutTitle}>{workoutTitle}</Text>
          <View>
            <Text style={styles.workoutObj}>Objetivo</Text>
            <Text style={styles.workoutDesc}>{workoutDesc}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutCard;
