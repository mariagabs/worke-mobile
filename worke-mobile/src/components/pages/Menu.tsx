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

  const getShowModal = async (visible) => {
    setShowModal(visible);
    setExercise(JSON.parse(await AsyncStorage.getItem("chosenExercise")));
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
        <Profile user={user} />
      ) : (
        ""
      )}
      {showModal ? (
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
      <View style={styles.navigationArea}>
        <NavigationBar onPress={(tab) => getSelectedTab(tab)}></NavigationBar>
      </View>
    </View>
  );
};

export default Menu;
