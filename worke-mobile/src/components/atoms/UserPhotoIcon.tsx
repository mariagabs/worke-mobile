import React from "react";
import { View, Image } from "react-native";
import styles from "../../styles";
import Star from "./Star";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";

interface Props {
  image: string;
  color: string;
  level: string;
}

const UserPhotoIcon: React.FC<Props> = ({ image, color, level }) => {
  let imageUser = "data:image/png;base64," + image;
  return (
    <View>
      {image !== null && image !== "" ? (
        <Image style={styles.userPhotoIcon} source={{ uri: imageUser }}></Image>
      ) : (
        <View style={styles.backgroundNoPhoto}>
          <FontAwesome5 name="user-alt" size={24} color={COLORS.lightGray} />
        </View>
      )}
      <View style={styles.photoStar}>
        <Star color={color} level={level}></Star>
      </View>
    </View>
  );
};

export default UserPhotoIcon;
