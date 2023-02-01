import React from "react";
import { View, ScrollView } from "react-native";
import ExerciseCard from "../atoms/ExerciseCard";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";

const ExercisesList: React.FC = () => {
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  let exercises = [
    { exercise: "ALONGAMENTO", description: "OMBROS" },
    { exercise: "ALONGAMENTO", description: "PESCOÇO" },
    { exercise: "ALONGAMENTO", description: "QUADRÍCEPS" },
    { exercise: "ALONGAMENTO", description: "TRONCO" },
    { exercise: "ALONGAMENTO", description: "COSTAS" },
    { exercise: "ALONGAMENTO", description: "MEMBROS INFERIORES" },
    { exercise: "YOGA", description: "ÁRVORE" },
    { exercise: "YOGA", description: "MONTANHA" },
    { exercise: "YOGA", description: "GUERREIRO" },
    { exercise: "YOGA", description: "TRIÂNGULO" },
  ];
  var exercisesList = [];
  var aux = 0;

  for (var i = 0; i < 10; i++) {
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
      <ExerciseCard
        key={i}
        color={chosenColor}
        exercise={exercises[i].exercise}
        description={exercises[i].description}
        list={true}
      ></ExerciseCard>,
    );
  }

  return (
    <View style={styles.view}>
      <ScrollView>
        <View style={styles.exercisesList}>{exercisesList}</View>
      </ScrollView>
    </View>
  );
};

export default ExercisesList;
