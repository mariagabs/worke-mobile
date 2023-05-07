import React, { useEffect, useState } from "react";
import { ImageSourcePropType, View, ScrollView, ActivityIndicator } from "react-native";
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
  const [loading, setLoading] = useState(true);
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];

  useEffect(() => {
    getList();
  }, [user]);

  const getList = () => {
    console.log('getList');
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
            buildList();
            setLoading(false);
          } else {
            throw new Error("An error has occurred");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  const buildList = () => {

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

    console.log('buildList');
    return list;
  };

  if (loading) {
    return (
      <View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
          <ActivityIndicator size="large" color={COLORS.green}/>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.rankingList}>
      <ScrollView>{list.length === 0 ? buildList() : ""}</ScrollView>
    </View>
  );
};

export default RankingList;
