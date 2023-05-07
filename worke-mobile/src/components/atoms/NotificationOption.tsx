import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles";

interface Props {
  description: string;
  onPress?: () => void;
  navigation: any;
}

const NotificationOption: React.FC<Props> = ({
  description,
  onPress,
  navigation,
}) => {
  return (
    <View style={styles.notification}>
      <View style={styles.notificationOption}>
        <Text style={styles.notificationDesc}>{description}</Text>
        <Image
          source={require("../../../assets/angle-right-black.png")}
        ></Image>
      </View>
      <View style={styles.dividerNotification}></View>
    </View>
  );
};

export default NotificationOption;
