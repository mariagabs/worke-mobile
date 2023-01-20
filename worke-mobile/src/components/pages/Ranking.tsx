import React from "react";
import { View, Text, Dimensions } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RankingTab from "../organisms/RankingTab";
import AchievementsTab from "../organisms/AchievementsTab";

const Ranking: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  function MyTabs() {
    return (
      <View style={styles.rankingContainer}>
        <Tab.Navigator
          style={styles.topTab}
          screenOptions={{
            tabBarItemStyle: {
              width: (Dimensions.get("window").width - 126) / 2,
              height: 33,
              display: "flex",
              flexDirection: "row",
            },
            tabBarStyle: {
              backgroundColor: COLORS.almostWhite,
              maxWidth: Dimensions.get("window").width - 120,
              marginLeft: 60,
              borderRadius: 6,
            },
            tabBarLabelStyle: {
              fontFamily: "Nunito",
              fontSize: 16,
              textTransform: "capitalize",
              marginTop: -12,
            },
            tabBarIndicatorStyle: {
              backgroundColor: COLORS.lighterGray,
              height: 27,
              borderRadius: 6,
              marginLeft: 3,
              marginBottom: 3,
            },
            tabBarActiveTintColor: COLORS.gray,
            tabBarInactiveTintColor: COLORS.lightGray,
          }}
        >
          <Tab.Screen name="Ranking" component={RankingTab} />
          <Tab.Screen name="Conquistas" component={AchievementsTab} />
        </Tab.Navigator>
      </View>
    );
  }
  return <View>{MyTabs()}</View>;
};

export default Ranking;
