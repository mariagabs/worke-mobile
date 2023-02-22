import React from "react";
import { View } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

interface Props {
  qtd: number;
  step: number;
  color: string;
}

const Steps: React.FC<Props> = ({ qtd, step, color }) => {
  let steps = [];
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  let chosenColor = COLORS.lighterGray;
  let aux = 0;
  step--;

  for (let i = 0; i < qtd; i++) {
    // console.log(i, qtd, step);
    // if (step >= 0 && i <= step) {
    //   if (i >= colors.length) {
    //     chosenColor = colors[aux];
    //     aux++;
    //     if (aux > colors.length) {
    //       aux = 0;
    //     }
    //   } else {
    //     chosenColor = colors[i];
    //   }
    // } else {
    //   chosenColor = COLORS.lighterGray;
    // }

    steps.push(<View key={i} style={styles.step(color, qtd)}></View>);
  }

  return <View style={styles.steps}>{steps}</View>;
};

export default Steps;
