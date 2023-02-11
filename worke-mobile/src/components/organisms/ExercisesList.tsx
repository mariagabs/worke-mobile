import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import ExerciseCard from "../atoms/ExerciseCard";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import ExerciseCardEdit from "../atoms/ExerciseCardEdit";

interface Props {
  edit: boolean;
}

const ExercisesList: React.FC<Props> = ({ edit }) => {
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  let userExercises = [
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
  let exercises = [
    { exercise: "ALONGAMENTO", description: "OMBROS", selected: true },
    { exercise: "ALONGAMENTO", description: "PESCOÇO", selected: true },
    { exercise: "ALONGAMENTO", description: "QUADRÍCEPS", selected: true },
    { exercise: "ALONGAMENTO", description: "TRONCO", selected: true },
    { exercise: "ALONGAMENTO", description: "COSTAS", selected: true },
    {
      exercise: "ALONGAMENTO",
      description: "MEMBROS INFERIORES",
      selected: true,
    },
    {
      exercise: "ALONGAMENTO",
      description: "MEMBROS SUPERIORES",
      selected: false,
    },
    { exercise: "YOGA", description: "ÁRVORE", selected: true },
    { exercise: "YOGA", description: "MONTANHA", selected: true },
    { exercise: "YOGA", description: "GUERREIRO", selected: true },
    { exercise: "YOGA", description: "TRIÂNGULO", selected: true },
    { exercise: "YOGA", description: "CADEIRA", selected: false },
    { exercise: "YOGA", description: "MEIA LUA", selected: false },
  ];
  var exercisesList = [];
  var aux = 0;

  for (var i = 0; i < (edit ? exercises.length : userExercises.length); i++) {
    var chosenColor = "";

    if (aux < 4) {
      chosenColor = colors[aux];
      aux++;
    } else {
      aux = 0;
      chosenColor = colors[aux];
      aux++;
    }

    if (edit) {
      exercisesList.push(
        <ExerciseCardEdit
          key={i}
          exercise={exercises[i].exercise}
          description={exercises[i].description}
          selected={exercises[i].selected}
        ></ExerciseCardEdit>,
      );
    } else {
      exercisesList.push(
        <ExerciseCard
          key={i}
          color={chosenColor}
          exercise={userExercises[i].exercise}
          description={userExercises[i].description}
          list={true}
        ></ExerciseCard>,
      );
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.exercisesList(edit)}>{exercisesList}</View>
    </ScrollView>
  );
};

export default ExercisesList;
