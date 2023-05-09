import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styles from "../../styles";
import Home from "./Home";
import Ranking from "./Ranking";
import NavigationBar from "../atoms/NavigationBar";
import Profile from "./Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DefaultModal from "../molecules/DefaultModal";
import Workouts from "./Workouts";

interface Props {
  selectedTab: string;
  navigation: any;
}

const Menu: React.FC<Props> = ({ selectedTab, navigation }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [exercise, setExercise] = useState([]);

  const getSelectedTab = (tab) => {
    setActiveTab(tab);
  };

  const getShowModal = (visible) => {
    AsyncStorage.getItem("chosenExercise").then((chosenExercise) => {
      setExercise(JSON.parse(chosenExercise));
    });

    setShowModal(visible);
  };
  const closeModal = (visible) => {
    setShowModal(visible);
  };

  useEffect(() => {
    AsyncStorage.getItem("user").then((user) => {
      setUser(JSON.parse(user));
    });
  }, []);
  return (
    <View style={styles.container}>
      {activeTab === "home" ? (
        <Home
          navigation={navigation}
          showModal={(show) => getShowModal(show)}
        />
      ) : activeTab === "workouts" ? (
        <Workouts navigation={navigation} />
      ) : activeTab === "ranking" ? (
        <Ranking />
      ) : activeTab === "profile" ? (
        <Profile user={user} navigation={navigation} />
      ) : (
        ""
      )}
      {showModal ? (
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
      <View style={styles.navigationArea}>
        <NavigationBar onPress={(tab) => getSelectedTab(tab)}></NavigationBar>
      </View>
    </View>
  );
};

export default Menu;
