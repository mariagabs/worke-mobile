import React, { useState } from "react";
import { View } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import Home from "./Home";
import Ranking from "./Ranking";
import NavigationBar from "../atoms/NavigationBar";
import Profile from "./Profile";

interface Props {
  selectedTab: string;
}

const Menu: React.FC<Props> = ({ selectedTab }) => {
  const [activeTab, setActiveTab] = useState("home");

  const getSelectedTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <View style={styles.container}>
      {activeTab === "home" ? (
        <Home />
      ) : activeTab === "ranking" ? (
        <Ranking />
      ) : activeTab === "profile" ? (
        <Profile />
      ) : (
        ""
      )}

      <View style={styles.navigationArea}>
        <NavigationBar onPress={(tab) => getSelectedTab(tab)}></NavigationBar>
      </View>
    </View>
  );
};

export default Menu;
