import React from "react";
import AchievementCard from "../atoms/AchievementCard";
import { View } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

interface Props {
  userAchievements?: [];
}

const AchievementsList: React.FC<Props> = ({ userAchievements }) => {
  let colors = [COLORS.green, COLORS.blue, COLORS.pink, COLORS.purple];
  let list = [
    { number: "90", description: "minutos", sub: "" },
    { number: "70", description: "exercícios", sub: "" },
    { number: "16", description: "dias", sub: "consecutivos" },
    { number: "2", description: "semanas", sub: "na mesma posição" },
  ];

  const cardsList = [];

  for (var i = 0; i < list.length; i++) {
    cardsList.push(
      <AchievementCard
        key={i}
        number={list[i].number}
        description={list[i].description}
        sub={list[i].sub}
        color={colors[i]}
      ></AchievementCard>,
    );
  }
  return <View style={styles.achievementsList}>{cardsList}</View>;
};
export default AchievementsList;
