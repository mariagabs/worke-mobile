import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles";
import Star from "../atoms/Star";
import RankingIndicator from "../atoms/RankingIndicator";

interface Props {
  userInfo: {
    level: string;
    image: string;
    rank: string;
    name: string;
    points: string;
    description: string;
  };

  color: string;
  horizontal?: boolean;
}

const RankingTopIcon: React.FC<Props> = ({ userInfo, color, horizontal }) => {
  let image = "data:image/png;base64," + userInfo.image;
  return (
    <View>
      <View>
        <Image style={styles.topRankPhoto} source={{ uri: image }}></Image>
        <View style={styles.starTopRank}>
          <Star color={color} level={userInfo.level}></Star>
        </View>
        <View style={styles.rank}>
          <RankingIndicator color={color} rank={userInfo.rank} />
        </View>
      </View>
      <View style={styles.rankTopInfo(horizontal)}>
        <Text style={styles.nameRankTop}>{userInfo.name}</Text>
        <Text style={styles.pointsRankTop(color)}>
          {userInfo.points} pontos
        </Text>
        <Text style={styles.descRankTop}>{userInfo.description}</Text>
      </View>
    </View>
  );
};

export default RankingTopIcon;
