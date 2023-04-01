import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import Home from "./Home";
import Ranking from "./Ranking";
import NavigationBar from "../atoms/NavigationBar";
import Profile from "./Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  selectedTab: string;
  navigation: any;
}

const Menu: React.FC<Props> = ({ selectedTab, navigation }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [user, setUser] = useState(null);

  const getSelectedTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const getUser = async () => {
      let user = await AsyncStorage.getItem("user");
      let userJSON = JSON.parse(user);
      setUser(userJSON);
    };

    getUser();
  }, []);
  return (
    <View style={styles.container}>
      {activeTab === "home" ? (
        <Home navigation={navigation} />
      ) : activeTab === "ranking" ? (
        <Ranking />
      ) : activeTab === "profile" ? (
        <Profile user={user} />
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
