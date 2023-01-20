import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";

interface Props {
  userLevel: string;
}

const MyExercises: React.FC<Props> = ({ userLevel }) => {
  return (
    <View style={styles.myExercises}>
      <View style={styles.headerMyExercises}>
        <Text style={styles.subtitleHome}>MEUS EXERCÍCIOS</Text>
        <Image
          source={require("../../../assets/angle-right-black.png")}
        ></Image>
      </View>
      <View style={styles.cardMyExercises}>
        <View style={styles.descriptionMyExercises}>
          <Text style={styles.levelDescription}>NÍVEL {userLevel}</Text>
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
    </View>
  );
};

export default MyExercises;
