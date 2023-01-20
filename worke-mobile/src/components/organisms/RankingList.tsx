import React from "react";
import { ImageSourcePropType, View, ScrollView } from "react-native";
import styles from "../../styles";
import RankingCard from "./RankingCard";

interface Props {
  users: {
    color: string;
    name: string;
    points: string;
    rank: string;
    image: ImageSourcePropType;
    level: string;
  }[];
}

const RankingList: React.FC<Props> = ({ users }) => {
  var usersList = [];
  for (let i = 0; i < users.length; i++) {
    usersList.push(
      <RankingCard
        key={users[i].name}
        color={users[i].color}
        name={users[i].name}
        points={users[i].points}
        rank={users[i].rank}
        image={users[i].image}
        level={users[i].level}
      ></RankingCard>,
    );
  }
  return (
    <View style={styles.rankingList}>
      <ScrollView>{usersList}</ScrollView>
    </View>
  );
};

export default RankingList;
