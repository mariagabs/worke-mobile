import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import Divider from "../atoms/Divider";
import RankingTopIcon from "./RankingTopIcon";
import AchievementsList from "./AchievementsList";
interface Props {
  user: any;
}
const AchievementsTab: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.achievements}>
        <View>
          <RankingTopIcon
            color={COLORS.green}
            horizontal={true}
            user={user}
          ></RankingTopIcon>
          <Divider></Divider>
        </View>
        <AchievementsList user={user} />
      </View>
    </View>
  );
};

export default AchievementsTab;
