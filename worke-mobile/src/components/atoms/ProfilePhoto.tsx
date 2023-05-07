import React, { useState, useEffect } from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";
import styles from "../../styles";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../../../assets/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface Props {
  user: any;
}

const ProfilePhoto: React.FC<Props> = ({ user }) => {
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  useEffect(() => {
    const getImage = async () => {
      if (user.image !== null) setImage(user.image);
    };

    getImage();
  }, []);

  const saveImage = async (image) => {
    setImage(image);

    user.image = image;
    const configurationObject = {
      url: "http://54.237.75.229:8000/funcionario/" + user.id,
      method: "POST",
      data: user,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(configurationObject)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    await AsyncStorage.setItem("user", JSON.stringify(user));
  };

  const pickImage = async () => {
    if (status.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.5,
        base64: true,
      });
      // saveImage(result.assets[0].base64);
      saveImage(result.base64);
    } else {
      requestPermission();
    }
  };
  let imageUser = image !== null ? "data:image/png;base64," + image : null;
  return (
    <View style={styles.profilePhoto}>
      <Image
        style={styles.linesProfile}
        source={require("../../../assets/2-lines.png")}
      ></Image>
      <View>
        {imageUser !== null && imageUser !== "" ? (
          <Image style={styles.userPhoto} source={{ uri: imageUser }}></Image>
        ) : (
          <View style={styles.backgroundNoPhotoProfile}>
            <FontAwesome5 name="user-alt" size={63} color={COLORS.lightGray} />
          </View>
        )}

        <TouchableOpacity
          style={styles.cameraIcon}
          activeOpacity={1}
          onPress={pickImage}
        >
          <FontAwesome name="camera" size={14} color="white"></FontAwesome>
        </TouchableOpacity>
      </View>
      <Text style={styles.nameProfile}>{user.name}</Text>
    </View>
  );
};

export default ProfilePhoto;
