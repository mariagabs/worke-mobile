import React, { useEffect, useState } from "react";
import AchievementCard from "../atoms/AchievementCard";
import { View } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  user: any;
}
const AchievementsList: React.FC<Props> = ({ user }) => {
  let colors = [COLORS.green, COLORS.blue, COLORS.pink, COLORS.purple];
  let list = [
    { number: "", description: "minutos", sub: "" },
    { number: "", description: "exercícios", sub: "" },
    { number: "", description: "dias", sub: "consecutivos" },
  ];
  const cardsList = [];

  const listAchievements = () => {
    list[0].number = user.total_minutes === null ? "0" : user.total_minutes;
    list[1].number = user.qty_exercises === null ? "0" : user.qty_exercises;
    list[2].number =
      user.consecutive_days === null ? "0" : user.consecutive_days;

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

    return cardsList;
  };

  return <View style={styles.achievementsList}>{listAchievements()}</View>;
};
export default AchievementsList;
