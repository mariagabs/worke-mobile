import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import HeaderTitleButton from "../organisms/HeaderTitleButton";
import styles from "../../styles";
import ExercisesList from "../organisms/ExercisesList";
import DefaultModal from "../molecules/DefaultModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: any;
  route: any;
}

const MyExercises: React.FC<Props> = ({ navigation, route }) => {
  const home = () => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      navigation.dispatch(e.data.action);
    });

    if (title === "exercícios") navigation.navigate("Menu");
    else if (title === "categorias") navigation.navigate("Menu");
    else
      navigation.navigate("MyExercises", {
        title: "categorias",
        getCategoryExercise: false,
      });
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [exercise, setExercise] = useState([]);
  const { title, getCategoryExercise } = route.params;
  let start = true;
  const getModal = async (visible) => {
    setModalVisible(visible);
    await AsyncStorage.setItem("fromFavorites", "0");
    setExercise(JSON.parse(await AsyncStorage.getItem("chosenExercise")));
    console.log(exercise);
  };
  const closeModal = (visible) => {
    setModalVisible(visible);
  };

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, [navigation, start]);
  return (
    <View>
      {modalVisible ? (
        <DefaultModal
          buttonText="CONTINUAR"
          text={
            "VOCÊ SELECIONOU O EXERCÍCIO " +
            exercise.nome +
            "! CONTINUE PARA VISUALIZÁ-LO."
          }
          title="VAMOS?"
          type="exercise"
          onPressClose={(visible) => closeModal(visible)}
          navigation={navigation}
          exerciseId={exercise.id}
        ></DefaultModal>
      ) : (
        ""
      )}
      <HeaderTitleButton onPress={home} title={title}></HeaderTitleButton>
      <View style={styles.view}>
        <View style={styles.myExercisesList}>
          <ExercisesList
            onPress={(visible) => getModal(visible)}
            type={title}
            navigation={navigation}
            route={route}
            getCategoryExercise={getCategoryExercise}
          ></ExercisesList>
        </View>
      </View>
    </View>
  );
};

export default MyExercises;
