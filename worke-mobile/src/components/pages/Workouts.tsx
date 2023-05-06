import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import WorkoutImage from "../atoms/WorkoutImage";
import WorkoutCard from "../molecules/WorkoutCard";
import styles from "../../styles";
import axios from "axios";
import { COLORS } from "../../../assets/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: any;
}
const Workouts: React.FC<Props> = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);
  let colors = [COLORS.blue, COLORS.green, COLORS.purple, COLORS.pink];
  let workoutsList = [];
  // const list = navigation.navigate("WorkoutExercises");

  const setChosenWorkout = async (id) => {
    await AsyncStorage.setItem("chosenWorkout", id.toString());
  };

  const setList = () => {
    let aux = 0;
    for (let i = 0; i < workouts.length; i++) {
      var chosenColor = "";

      if (aux < 4) {
        chosenColor = colors[aux];
        aux++;
      } else {
        aux = 0;
        chosenColor = colors[aux];
        aux++;
      }

      workoutsList.push(
        <WorkoutCard
          key={workouts[i].numero_treino}
          color={chosenColor}
          workoutDesc={workouts[i].objetivo}
          workoutNumber={workouts[i].numero_treino}
          workoutTitle={workouts[i].descricao}
          navigation={navigation}
        ></WorkoutCard>,
      );
    }

    return workoutsList;
  };
  const loadWorkouts = async () => {
    const configurationObject = {
      url: "http://54.237.75.229:8000/treinos",
      method: "GET",
    };

    axios(configurationObject)
      .then((response) => {
        if (response.status === 200) {
          setWorkouts(response.data);
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setList();
  };
  if (workouts.length === 0) loadWorkouts();

  return (
    <View>
      <Text style={styles.workouts}>TREINOS</Text>
      <View style={styles.workoutListHeight}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.workoutsList}>{setList()}</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Workouts;