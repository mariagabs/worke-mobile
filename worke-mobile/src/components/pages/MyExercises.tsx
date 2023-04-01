import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import HeaderTitleButton from "../organisms/HeaderTitleButton";
import styles from "../../styles";
import ExercisesList from "../organisms/ExercisesList";
import ListButton from "../atoms/ListButton";
import axios from "axios";
import DefaultModal from "../molecules/DefaultModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: any;
}

const MyExercises: React.FC<Props> = ({ navigation }) => {
  const home = () => navigation.navigate("Menu");
  const [modalVisible, setModalVisible] = useState(false);
  const [exercise, setExercise] = useState([]);
  const getModal = async (visible) => {
    setModalVisible(visible);
    setExercise(JSON.parse(await AsyncStorage.getItem("chosenExercise")));
  };
  const closeModal = (visible) => {
    setModalVisible(visible);
  };

  return (
    <View>
      {modalVisible ? (
        <DefaultModal
          buttonText="INICIAR"
          text={
            "VOCÊ SELECIONOU O EXERCÍCIO " +
            exercise.nome +
            " DA CATEGORIA " +
            exercise.categoria +
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
        onPress={home}
        title="exercícios"
        search={true}
      ></HeaderTitleButton>
      <View style={styles.view}>
        <View style={styles.myExercisesList}>
          <ExercisesList
            onPress={(visible) => getModal(visible)}
          ></ExercisesList>
        </View>
      </View>
    </View>
  );
};

export default MyExercises;
