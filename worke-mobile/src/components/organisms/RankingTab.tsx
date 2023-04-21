import React from "react";
import { View } from "react-native";
import styles from "../../styles";
import RankingTop from "../organisms/RankingTop";
import RankingList from "./RankingList";
import { COLORS } from "../../../assets/colors";
interface Props {
  user: any;
}
const RankingTab: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        {/* <RankingTop users={usersTop}></RankingTop>
        <RankingList users={users}></RankingList> */}
      </View>
    </View>
  );
};

export default RankingTab;
