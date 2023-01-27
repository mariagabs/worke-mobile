import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../../styles";

interface Props {
  image: string;
  name: string;
}

const ProfilePhoto: React.FC<Props> = ({ image, name }) => {
  let imageUser = "data:image/png;base64," + image;
  return (
    <View style={styles.profilePhoto}>
      <Image
        style={styles.linesProfile}
        source={require("../../../assets/2-lines.png")}
      ></Image>
      <View>
        <Image style={styles.userPhoto} source={{ uri: imageUser }}></Image>
        <View style={styles.cameraIcon}>
          <FontAwesome name="camera" size={14} color="white"></FontAwesome>
        </View>
      </View>
      <Text style={styles.nameProfile}>{name}</Text>
    </View>
  );
};

export default ProfilePhoto;
