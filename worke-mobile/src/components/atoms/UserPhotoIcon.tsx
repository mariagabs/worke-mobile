import React from "react";
import { View, Image } from "react-native";
import styles from "../../styles";
import Star from "./Star";

interface Props {
  userID?: number;
  color: string;
}

const UserPhotoIcon: React.FC<Props> = ({ userID, color }) => {
  return (
    <View>
      <Image
        style={styles.userPhotoIcon}
        source={require("../../../assets/karina.png")}
      ></Image>
      <View style={styles.photoStar}>
        <Star color={color} level="10"></Star>
      </View>
    </View>
  );
};

export default UserPhotoIcon;
