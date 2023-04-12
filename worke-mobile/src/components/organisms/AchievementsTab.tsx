import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import Divider from "../atoms/Divider";
import RankingTopIcon from "./RankingTopIcon";
import AchievementsList from "./AchievementsList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AchievementsTab: React.FC = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    if (user === null) {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      setUser(user);
    }
  };

  getUser();

  return (
    <View style={styles.container}>
      <View style={styles.achievements}>
        <View>
          <RankingTopIcon
            color={COLORS.green}
            userInfo={{
              level: user.level,
              name: user.first_name,
              points: user.points,
              description: "Iniciante",
              rank: "1",
              image: user.image,
            }}
            horizontal={true}
          ></RankingTopIcon>
          <Divider></Divider>
        </View>
        <AchievementsList />
      </View>
    </View>
  );
};

export default AchievementsTab;
