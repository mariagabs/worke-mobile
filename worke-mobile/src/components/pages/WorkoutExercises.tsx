import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import DefaultModal from "../molecules/DefaultModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderTitleButton from "../organisms/HeaderTitleButton";
import styles from "../../styles";
import ExercisesList from "../organisms/ExercisesList";
import axios from "axios";
import { COLORS } from "../../../assets/colors";
import ExerciseCard from "../atoms/ExerciseCard";

interface Props {
  navigation: any;
}

const WorkoutExercises: React.FC<Props> = ({ navigation }) => {
  const [chosenWorkout, setWorkout] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState({});
  let colors = [COLORS.blue, COLORS.green, COLORS.purple, COLORS.pink];
  const backWorkouts = () => navigation.navigate("Workouts");
  let list = [];
  useEffect(() => {
    const getChosenWorkout = async () => {
      const workout = await AsyncStorage.getItem("chosenWorkout");
      setWorkout(workout);

      const configurationObject = {
        url: "http://54.237.75.229:8000/treino/" + workout,
        method: "GET",
      };

      axios(configurationObject)
        .then((response) => {
          if (response.status === 200) {
            setExercises(response.data.exercicios);
          } else {
            throw new Error("An error has occurred");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getChosenWorkout();
  }, []);

  const setChosenExercise = async (id) => {
    await AsyncStorage.setItem(
      "chosenExercise",
      JSON.stringify(exercises.find((x) => x.id === id)),
    );
    await AsyncStorage.setItem("choseCategory", "0");
  };

  const closeModal = (visible) => {
    setShowModal(visible);
  };

  const setList = () => {
    let aux = 0;
    for (let i = 0; i < exercises.length; i++) {
      var chosenColor = "";

      if (aux < 4) {
        chosenColor = colors[aux];
        aux++;
      } else {
        aux = 0;
        chosenColor = colors[aux];
        aux++;
      }
      list.push(
        <ExerciseCard
          key={exercises[i].id}
          idExercise={exercises[i].id}
          color={chosenColor}
          exercise={exercises[i].nome}
          list={true}
          onPress={(id) => {
            setChosenExercise(id);
            setExercise(exercises[i]);
            setShowModal(true);
          }}
        ></ExerciseCard>,
      );
    }

    return list;
  };
  return (
    <View>
      {showModal ? (
        <DefaultModal
          buttonText="INICIAR"
          text={
            "VOCÊ SELECIONOU O EXERCÍCIO " +
            exercise.nome +
            " DO TREINO " +
            chosenWorkout +
            "!"
          }
          title="VAMOS?"
          type="exercise"
          onPressClose={(visible) => closeModal(visible)}
          navigation={navigation}
        ></DefaultModal>
      ) : (
        ""
      )}
      <HeaderTitleButton
        title={"TREINO " + chosenWorkout}
        onPress={backWorkouts}
      />
      <View style={styles.viewList}>
        <View style={styles.exercisesList}>{setList()}</View>
      </View>
    </View>
  );
};

export default WorkoutExercises;
