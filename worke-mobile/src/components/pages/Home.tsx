import React, { useEffect, useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import HomeHeader from "../organisms/HomeHeader";
import MyExercises from "../atoms/MyExercises";
import Favorites from "../organisms/Favorites";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DefaultModal from "../molecules/DefaultModal";
import ModelSingleton from "../../modelSingleton";
import * as tf from "@tensorflow/tfjs";
import { bundleResourceIO } from "@tensorflow/tfjs-react-native";

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  let favorites = [
    { exercise: "alongamento", description: "tronco" },
    { exercise: "alongamento", description: "pescoço" },
    { exercise: "alongamento", description: "quadríceps" },
    { exercise: "yoga", description: "árvore" },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();
    });
  }, [navigation]);

  //Carregar a Rede Neural
  useEffect(() => {
    getModel();
  }, []);

  const getModel = async () => {
    console.log("Começa a carregar o tensorflow");

    try {
      await tf.ready();
      console.log("ready is on");

      await tf.setBackend("rn-webgl");
      console.log("backend is on");

      const modelJson = require("../../../assets/workemodel/model.json");
      const modelWeights = require("../../../assets/workemodel/weights.bin");

      const net = await tf.loadLayersModel(
        bundleResourceIO(modelJson, modelWeights),
      );
      console.log("modelo is on");

      let modelo = ModelSingleton.getInstance();
      modelo.setModelo(net);
    } catch (err) {
      console.log("erro no tensorflow");
      console.log(err);
    }
  };

  const getModal = async (visible) => {
    setModalVisible(visible);
    setExercise(JSON.parse(await AsyncStorage.getItem("chosenExercise")));
  };
  const closeModal = (visible) => {
    setModalVisible(visible);
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.home}>
        <View style={styles.homeHeader}>
          <HomeHeader color={COLORS.blue}></HomeHeader>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 30,
            marginTop: 10,
            width: Dimensions.get("window").width,
            alignSelf: "center",
            height: Dimensions.get("window").height,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              height: Dimensions.get("window").height - 155,
            }}
          >
            <MyExercises navigation={navigation}></MyExercises>
            <Favorites onPress={(visible) => getModal(visible)}></Favorites>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
