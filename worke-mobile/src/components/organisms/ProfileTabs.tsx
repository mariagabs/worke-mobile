import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLORS } from "../../../assets/colors";
import {
  View,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Body from "./Body";
import PersonalInfo from "./PersonalInfo";
import GroupProfile from "./GroupProfile";
import styles from "../../styles";

const ProfileTabs: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            height: 40,
            maxWidth: "100%",
          },
          tabBarLabelStyle: {
            fontFamily: "Nunito-Bold",
            fontSize: 16,
            textTransform: "capitalize",
            marginTop: -10,
            width: "100%",
          },
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.black,
            height: 2,
            marginBottom: -2,
          },
          tabBarIndicatorContainerStyle: {
            borderBottomColor: COLORS.lighterGray,
            borderBottomWidth: 2,
          },
          tabBarActiveTintColor: COLORS.black,
          tabBarInactiveTintColor: COLORS.lighterGray,
        }}
      >
        <Tab.Screen name="Meu Corpo" component={Body} />
        <Tab.Screen name="Dados Pessoais" component={PersonalInfo} />
        <Tab.Screen name="Grupo" component={GroupProfile} />
      </Tab.Navigator>
    );
  }
  return <View style={styles.profileTabs}>{MyTabs()}</View>;
};

export default ProfileTabs;
