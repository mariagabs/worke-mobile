import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import Star from "../atoms/Star";
import RankingIndicator from "../atoms/RankingIndicator";
import styles from "../../styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";

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
  let imageUser = image !== null ? "data:image/png;base64," + image : null;
  return (
    <View style={styles.rankingCard(color)}>
      <RankingIndicator color={color} rank={rank}></RankingIndicator>
      <View>
        {imageUser !== null && imageUser !== "" ? (
          <Image
            style={styles.imageRankList}
            source={{ uri: imageUser }}
          ></Image>
        ) : (
          <View style={styles.imageRankListNoPhoto}>
            <FontAwesome5 name="user-alt" size={40} color={COLORS.lightGray} />
          </View>
        )}
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
