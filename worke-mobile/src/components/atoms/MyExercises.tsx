import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";

interface Props {
  navigation: any;
}

const MyExercises: React.FC<Props> = ({ navigation }) => {
  const myExercises = (type) => {
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
      >
        <View style={styles.headerMyExercises}>
          <Text style={styles.subtitleHome}>EXERCÍCIOS</Text>
          <Image
            source={require("../../../assets/angle-right-black.png")}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => myExercises("categorias")}
        activeOpacity={1}
      >
        <View style={styles.cardMyExercises}>
          <View style={styles.descriptionMyExercises}>
            <Text style={styles.levelDescription}>CATEGORIAS</Text>
            <View style={styles.startMyExercises}>
              <Text style={styles.descriptionExerciseTitle(COLORS.green)}>
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
