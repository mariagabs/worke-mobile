import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import Star from "../atoms/Star";
import RankingIndicator from "../atoms/RankingIndicator";
import styles from "../../styles";

interface Props {
  color: string;
  name: string;
  points: string;
  rank: string;
  image: ImageSourcePropType;
  level: string;
}

const RankingCard: React.FC<Props> = ({
  color,
  name,
  points,
  rank,
  image,
  level,
}) => {
  return (
    <View style={styles.rankingCard(color)}>
      <RankingIndicator color={color} rank={rank}></RankingIndicator>
      <View>
        <Image source={image} style={styles.imageRankList}></Image>
        <View style={styles.starRankList}>
          <Star color={color} level={level} />
        </View>
      </View>
      <Text style={styles.nameRankList}>{name}</Text>
      <Text style={styles.pointsRankList(color)}>{points} pontos</Text>
    </View>
  );
};

export default RankingCard;
