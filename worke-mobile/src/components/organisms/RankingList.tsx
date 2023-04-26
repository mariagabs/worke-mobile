import React, { useEffect, useState } from "react";
import { ImageSourcePropType, View, ScrollView } from "react-native";
import styles from "../../styles";
import RankingCard from "./RankingCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../../../assets/colors";

interface Props {
  user: any;
}

const RankingList: React.FC<Props> = ({ user }) => {
  let list = [];
  const [users, setUsers] = useState([]);
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];

  const getList = () => {
    if (user !== null) {
      const configurationObject = {
        url: "http://54.237.75.229:8000/grupoFuncionario/" + user.group,
        method: "GET",
      };
      axios(configurationObject)
        .then((response) => {
          if (response.status === 200) {
            const list = response.data;
            setUsers(list.usuarios);
          } else {
            throw new Error("An error has occurred");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    let aux = 0;
    for (let i = 0; i < users.length; i++) {
      if (aux >= colors.length) aux = 0;
      const color = colors[aux];
      const rank = i + 1;
      aux++;
      list.push(
        <RankingCard
          key={users[i].name}
          color={color}
          name={users[i].first_name}
          points={users[i].points}
          rank={rank.toString()}
          image={users[i].image}
          level={users[i].level}
        ></RankingCard>,
      );
    }

    return list;
  };

  return (
    <View style={styles.rankingList}>
      <ScrollView>{list.length === 0 ? getList() : ""}</ScrollView>
    </View>
  );
};

export default RankingList;
