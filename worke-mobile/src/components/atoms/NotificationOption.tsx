import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    <TouchableOpacity
      style={styles.notification}
      activeOpacity={1}
      onPress={onPress}
    >
      <View style={styles.notificationOption}>
        <Text style={styles.notificationDesc}>{description}</Text>
        <Image
          source={require("../../../assets/angle-right-black.png")}
        ></Image>
      </View>
      <View style={styles.dividerNotification}></View>
    </TouchableOpacity>
  );
};

export default NotificationOption;
