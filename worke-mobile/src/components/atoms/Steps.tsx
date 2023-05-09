import React from "react";
import { View } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

interface Props {
  qtd: number;
  step: number;
}

const Steps: React.FC<Props> = ({ qtd, step }) => {
  let steps = [];
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  let chosenColor = COLORS.lighterGray;
  let aux = 0;
  step--;

  const list = () => {
    for (let i = 0; i < qtd; i++) {
      if (step >= 0 && i <= step) {
        if (i >= colors.length) {
          chosenColor = colors[aux];
          aux++;
          if (aux >= colors.length) {
            aux = 0;
          }
        } else {
          chosenColor = colors[i];
        }
      } else {
        chosenColor = COLORS.lighterGray;
      }
      steps.push(
        <View
          style={[
            styles.step(qtd),
            chosenColor === COLORS.pink
              ? styles.backgroundPink
              : chosenColor === COLORS.purple
              ? styles.backgroundPurple
              : chosenColor === COLORS.blue
              ? styles.backgroundBlue
              : chosenColor === COLORS.green
              ? styles.backgroundGreen
              : styles.backgroundLighterGray,
          ]}
          key={i}
        ></View>,
      );
    }

    return steps;
  };

  return <View style={styles.steps}>{list()}</View>;
};

export default Steps;
