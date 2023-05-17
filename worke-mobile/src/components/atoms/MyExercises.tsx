import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: any;
}

const MyExercises: React.FC<Props> = ({ navigation }) => {
  const myExercises = async (type) => {
    await AsyncStorage.setItem("currentExercisePage", "exercícios");
    await AsyncStorage.setItem("isCategoryPage", "0");
    navigation.navigate("MyExercises", {
      title: type,
      getCategoryExercise: false,
    });
  };

  return (
    <View style={styles.myExercises}>
      <TouchableOpacity
        onPress={() => myExercises("exercícios")}
        activeOpacity={1}
        style={styles.headerMyExercises}
      >
        <Text style={styles.subtitleHome}>EXERCÍCIOS DE ALONGAMENTOS</Text>
        <Image
          source={require("../../../assets/angle-right-black.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => myExercises("categorias")}
        activeOpacity={1}
      >
        <View style={styles.cardMyExercises}>
          <View style={styles.descriptionMyExercises}>
            <Text style={styles.levelDescription}>CATEGORIAS</Text>
            <View style={styles.startMyExercises}>
              <Text style={[styles.descriptionExerciseTitle, styles.textGreen]}>
                COMEÇAR
              </Text>
              <Image
                style={styles.arrowSize}
                source={require("../../../assets/angle-right-green.png")}
              ></Image>
            </View>
          </View>
          <Image
            style={styles.exercisesImage}
            source={require("../../../assets/rope-jumping-green-background.png")}
          ></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyExercises;
