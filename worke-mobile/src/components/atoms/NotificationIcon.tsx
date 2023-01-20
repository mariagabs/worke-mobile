import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles";

interface Props {
  userID?: number;
}

const NotificationIcon: React.FC<Props> = ({ userID }) => {
  return (
    <View>
      <Ionicons name="notifications" size={32}></Ionicons>
      <View style={styles.notificationIndicator}></View>
    </View>
  );
};

export default NotificationIcon;
