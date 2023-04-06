import React, { useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import ExerciseCard from "../atoms/ExerciseCard";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import ExerciseCardEdit from "../atoms/ExerciseCardEdit";
import axios from "axios";
import DefaultModal from "../molecules/DefaultModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  onPress: (visible) => void;
}

const ExercisesList: React.FC<Props> = ({ onPress }) => {
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  const [exercises, setExercises] = useState([]);
  var exercisesList = [];
  var aux = 0;

  const setChosenExercise = async (id) => {
    await AsyncStorage.setItem(
      "chosenExercise",
      JSON.stringify(exercises.find((x) => x.id === id)),
    );
  };

  const setList = () => {
    for (var i = 0; i < exercises.length; i++) {
      var chosenColor = "";

      if (aux < 4) {
        chosenColor = colors[aux];
        aux++;
      } else {
        aux = 0;
        chosenColor = colors[aux];
        aux++;
      }

      exercisesList.push(
        <ExerciseCard
          key={exercises[i].id}
          idExercise={exercises[i].id}
          color={chosenColor}
          exercise={exercises[i].categoria}
          description={exercises[i].nome}
          list={true}
          onPress={(id) => {
            setChosenExercise(id);
            onPress(true);
          }}
        ></ExerciseCard>,
      );
    }

    return exercisesList;
  };

  const getExercises = async () => {
    if (exercises.length === 0) {
      const configurationObject = {
        url: "http://192.168.15.6:8000/exercicio",
        method: "GET",
      };
      axios(configurationObject)
        .then((response) => {
          if (response.status === 200) {
            setExercises(response.data);
          } else {
            throw new Error("An error has occurred");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  getExercises();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.exercisesList}>{setList()}</View>
    </ScrollView>
  );
};

export default ExercisesList;
