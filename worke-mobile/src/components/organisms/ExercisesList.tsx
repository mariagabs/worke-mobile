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
}

const ExercisesList: React.FC<Props> = ({
  onPress,
  type,
  navigation,
  route,
}) => {
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState([]);
  const { getCategoryExercise, title } = route.params;
  if (title !== "") type = title;
  var exercisesList = [];
  var aux = 0;

  const api = type === "exercícios" ? "exercicio" : "categorias";

  const myCategoryExercises = (category) => {
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
  };

  const setChosenCategory = async (id) => {
    await AsyncStorage.setItem("chosenCategory", id.substring(0, 1));

    myCategoryExercises(id);
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
      exercisesList.push(
        type === "categorias" ? (
          <ExerciseCard
            key={categories[i]}
            idExercise={categories[i]}
            color={chosenColor}
            exercise={categories[i]}
            list={true}
            onPress={(id) => {
              setChosenCategory(id);
            }}
          ></ExerciseCard>
        ) : (
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
        url: "http://192.168.15.12:8000/" + api,
        method: "GET",
      };
      axios(configurationObject)
        .then((response) => {
          if (response.status === 200) {
            if (type === "categorias") setCategories(response.data);
            else setExercises(response.data);
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
      url: "http://192.168.15.12:8000/exercicioCategoria/" + category,
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

    setList();
  };

  if (getCategoryExercise) getExerciseCategory();
  else getExercises();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.exercisesList}>{setList()}</View>
    </ScrollView>
  );
};

export default ExercisesList;
