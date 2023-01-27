import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import Divider from "../atoms/Divider";
import RankingTopIcon from "./RankingTopIcon";
import AchievementsList from "./AchievementsList";

const AchievementsTab: React.FC = () => {
  let image =
    "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";
  return (
    <View style={styles.container}>
      <View style={styles.achievements}>
        <View>
          <RankingTopIcon
            color={COLORS.green}
            userInfo={{
              level: "10",
              name: "Karina",
              points: "500",
              description: "Iniciante",
              rank: "1",
              image: image,
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
