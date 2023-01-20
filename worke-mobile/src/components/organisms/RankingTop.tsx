import React from "react";
import { View } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import RankingTopIcon from "../organisms/RankingTopIcon";
interface Props {
  users: {
    level: string;
    image: string;
    rank: string;
    name: string;
    points: string;
    description: string;
  }[];
}
const RankingTop: React.FC<Props> = ({ users }) => {
  let colors = [COLORS.pink, COLORS.purple, COLORS.blue];
  //**atenção** CONDIÇÕES SE USERS > 0
  return (
    <View style={styles.ranking}>
      <View style={styles.rankingLow}>
        <RankingTopIcon key={0} userInfo={users[0]} color={colors[0]} />
      </View>
      <View style={styles.rankingTop}>
        <RankingTopIcon key={1} userInfo={users[1]} color={colors[1]} />
      </View>
      <View style={styles.rankingLow}>
        <RankingTopIcon key={2} userInfo={users[2]} color={colors[2]} />
      </View>
    </View>
  );
};

export default RankingTop;
