import React, { useEffect, useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import ExerciseCard from "../atoms/ExerciseCard";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import ExerciseCardEdit from "../atoms/ExerciseCardEdit";
import axios from "axios";
import DefaultModal from "../molecules/DefaultModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface Props {
  onPress: (visible) => void;
  type?: string;
  navigation: any;
  route: any;
  getCategoryExercise: boolean;
}

const ExercisesList: React.FC<Props> = ({
  onPress,
  type,
  navigation,
  route,
  getCategoryExercise,
}) => {
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState([]);
  const { title } = route.params;
  if (title !== "") type = title;
  var exercisesList = [];
  var aux = 0;

  const api = type === "exercícios" ? "exercicio" : "categorias";

  const myCategoryExercises = async (category) => {
    await AsyncStorage.setItem("currentExercisePage", category);
    await AsyncStorage.setItem("isCategoryPage", "1");
    navigation.navigate("MyExercises", {
      getCategoryExercise: true,
      title: category,
    });
  };

  const setChosenExercise = async (id) => {
    await AsyncStorage.setItem(
      "chosenExercise",
      JSON.stringify(exercises.find((x) => x.id === id)),
    );
    // await AsyncStorage.setItem("chosenCategory", "0");
    await AsyncStorage.setItem("chosenWorkout", "");
  };

  const setChosenCategory = async (id, nome) => {
    await AsyncStorage.setItem("chosenCategory", id);

    myCategoryExercises(nome);
  };

  const setList = () => {
    const count = type === "categorias" ? categories.length : exercises.length;

    for (var i = 0; i < count; i++) {
      var chosenColor = "";

      if (aux < 4) {
        chosenColor = colors[aux];
        aux++;
      } else {
        aux = 0;
        chosenColor = colors[aux];
        aux++;
      }
      let id = "",
        nome = "";

      if (type === "categorias") {
        id = categories[i].sigla;
        nome = categories[i].descricao;
      }

      exercisesList.push(
        type === "categorias" ? (
          <ExerciseCard
            key={id}
            idExercise={id}
            color={chosenColor}
            exercise={nome}
            list={true}
            onPress={(id) => {
              setChosenCategory(id, nome);
            }}
          ></ExerciseCard>
        ) : (
          <ExerciseCard
            key={exercises[i].id}
            idExercise={exercises[i].id}
            color={chosenColor}
            exercise={exercises[i].nome}
            list={true}
            onPress={(id) => {
              setChosenExercise(id);
              onPress(true);
            }}
          ></ExerciseCard>
        ),
      );
    }

    return exercisesList;
  };

  const getExercises = async () => {
    if (
      type !== "" &&
      ((type === "exercícios" && exercises.length === 0) ||
        (type === "categorias" && categories.length === 0))
    ) {
      const configurationObject = {
        url: "http://54.237.75.229:8000/" + api,
        method: "GET",
      };
      axios(configurationObject)
        .then((response) => {
          if (response.status === 200) {
            if (type === "categorias") {
              setExercises([]);
              setCategories(response.data);
            } else {
              setCategories([]);
              setExercises(response.data);
            }
          } else {
            throw new Error("An error has occurred");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      setList();
    }
  };

  const getExerciseCategory = async () => {
    type = "exercícios";
    const category = await AsyncStorage.getItem("chosenCategory");
    const configurationObject = {
      url: "http://54.237.75.229:8000/exercicioCategoria/" + category,
      method: "GET",
    };
    axios(configurationObject)
      .then((response) => {
        if (response.status === 200) {
          setCategories([]);
          setExercises(response.data);
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setList();
  };

  if (getCategoryExercise && exercises.length === 0) getExerciseCategory();
  else getExercises();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.exercisesList}>{setList()}</View>
    </ScrollView>
  );
};

export default ExercisesList;
