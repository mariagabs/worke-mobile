import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

interface Props {
  onPress: (tab) => void;
}

const NavigationBar: React.FC<Props> = ({ onPress }) => {
  const [selected, setSelected] = useState("");

  const select = (type) => {
    setSelected(type);
  };

  return (
    <View>
      <View style={styles.boxShadow}></View>
      <View style={styles.navigationBar}>
        <View>
          <TouchableOpacity
            onPress={(tab) => {
              select("home");
              onPress("home");
            }}
            activeOpacity={1}
          >
            <Foundation
              name="home"
              size={30}
              color={
                selected === "home" || selected === ""
                  ? COLORS.blue
                  : COLORS.lighterGray
              }
            ></Foundation>
            {selected === "home" || selected === "" ? (
              <View style={styles.navigationSelected(COLORS.blue)}></View>
            ) : (
              ""
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={(tab) => {
              select("ranking");
              onPress("ranking");
            }}
            activeOpacity={1}
          >
            <FontAwesome5
              name="trophy"
              size={22}
              color={
                selected === "ranking" ? COLORS.purple : COLORS.lighterGray
              }
            ></FontAwesome5>
            {selected === "ranking" ? (
              <View style={styles.navigationSelected(COLORS.purple)}></View>
            ) : (
              ""
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={(tab) => {
              select("profile");
              onPress("profile");
            }}
            activeOpacity={1}
          >
            <FontAwesome5
              name="user-alt"
              size={22}
              color={selected === "profile" ? COLORS.green : COLORS.lighterGray}
            ></FontAwesome5>
            {selected === "profile" ? (
              <View style={styles.navigationSelected(COLORS.green)}></View>
            ) : (
              ""
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={(tab) => {
              select("settings");
              onPress("settings");
            }}
            activeOpacity={1}
          >
            <Ionicons
              name="settings-sharp"
              size={25}
              color={selected === "settings" ? COLORS.pink : COLORS.lighterGray}
            ></Ionicons>
            {selected === "settings" ? (
              <View style={styles.navigationSelected(COLORS.pink)}></View>
            ) : (
              ""
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NavigationBar;
