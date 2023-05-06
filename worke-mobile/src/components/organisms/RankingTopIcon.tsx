import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles";
import Star from "../atoms/Star";
import RankingIndicator from "../atoms/RankingIndicator";
import { COLORS } from "../../../assets/colors";

interface Props {
  color: string;
  horizontal?: boolean;
  user: any;
}

const RankingTopIcon: React.FC<Props> = ({ color, horizontal, user }) => {
  let image = "data:image/png;base64," + user.image;
  return (
    <View
      style={[
        styles.rankingPhotos,
        horizontal ? styles.rankingPhotosRow : styles.rankingPhotosColumn,
      ]}
    >
      <View>
        <Image style={styles.topRankPhoto} source={{ uri: image }}></Image>
        <View style={styles.starTopRank}>
          <Star color={color} level={user.level}></Star>
        </View>
        <View style={styles.rank}>
          <RankingIndicator color={color} rank={"1"} />
        </View>
      </View>
      <View style={[styles.rankTopInfo]}>
        <Text style={styles.nameRankTop}>{user.name}</Text>
        <Text
          style={[
            styles.pointsRankTop,
            color === COLORS.pink
              ? styles.textPink
              : color === COLORS.purple
              ? styles.textPurple
              : color === COLORS.blue
              ? styles.textBlue
              : styles.textGreen,
          ]}
        >
          {user.points} pontos
        </Text>
        <Text style={styles.descRankTop}>{"Iniciante"}</Text>
      </View>
    </View>
  );
};

export default RankingTopIcon;
