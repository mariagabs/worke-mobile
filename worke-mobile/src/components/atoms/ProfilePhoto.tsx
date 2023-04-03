import React, { useState, useEffect } from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import styles from "../../styles";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../../../assets/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { decode as atob, encode as btoa } from "base-64";

interface Props {
  user: any;
}

const ProfilePhoto: React.FC<Props> = ({ user }) => {
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  useEffect(() => {
    const getImage = async () => {
      let user = await AsyncStorage.getItem("user");
      let userJSON = JSON.parse(user);
      if (userJSON.image !== null) setImage(userJSON.image);
    };

    getImage();
  }, []);

  const saveImage = async (image) => {
    user.image = image;
    const configurationObject = {
      url: "http://192.168.15.9:8000/funcionario/" + user.id,
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
      if (!result.cancelled) {
        setImage(result.base64);
        saveImage(result.base64);
      }
    } else {
      requestPermission();
    }
  };

  let imageUser = image !== null ? "data:image/png;base64," + image : null;
  console.log(imageUser);
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
