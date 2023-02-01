import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import ExerciseCard from "../atoms/ExerciseCard";
import { COLORS } from "../../../assets/colors";

interface Props {
  list: { description: string; exercise: string }[];
}

const Favorites: React.FC<Props> = ({ list }) => {
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  var favoritesList = [];

  for (let i = 0; i < list.length; i++) {
    favoritesList.push(
      <ExerciseCard
        key={i}
        color={colors[i]}
        description={list[i].description}
        exercise={list[i].exercise}
        list={false}
      ></ExerciseCard>,
    );
  }

  return (
    <View>
      <Text style={styles.subtitleHome}>FAVORITOS</Text>
      <View style={styles.favorites}>{favoritesList}</View>
    </View>
  );
};

export default Favorites;
