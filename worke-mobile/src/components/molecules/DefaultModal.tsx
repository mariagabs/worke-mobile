import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Button from "../atoms/Button";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Camera } from "expo-camera";

interface Props {
  title: string;
  text: string;
  buttonText: string;
  type: string;
  onPressClose: (visible: boolean) => void;
  navigation: any;
}

const DefaultModal: React.FC<Props> = ({
  title,
  text,
  buttonText,
  type,
  onPressClose,
  navigation,
}) => {
  const images = [
    { type: "yoga", image: require("../../../assets/letsyoga.png") },
    { type: "exercise", image: require("../../../assets/letsexercise.png") },
    { type: "success", image: require("../../../assets/signUpSuccess.png") },
    { type: "shareGroup", image: require("../../../assets/shareGroup.png") },
  ];

  const image = images.find((x) => x.type === type).image;

  const onPress = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    if (cameraPermission.status !== "granted") {
      alert("Permission for media access needed.");
    } else {
      onPressClose(false);
      navigation.navigate("Exercise");
    }
  };

  return (
    <View style={styles.modalBackground}>
      <View style={styles.modal}>
        <View
          style={
            type === "shareGroup"
              ? styles.headerModalTwoButtons
              : styles.headerModal
          }
        >
          {type === "shareGroup" ? (
            <FontAwesome5
              style={styles.shareButton}
              name="share-alt"
              size={24}
              color={COLORS.green}
            />
          ) : (
            ""
          )}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => onPressClose(false)}
            style={styles.closeModalButton}
          >
            <FontAwesome name="close" size={30} color={COLORS.lightGray} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalTitle}>
          <Text style={styles.modalTitleText}>{title}</Text>
          <Text style={styles.modalText}>{text}</Text>
        </View>
        <Image style={styles.imageModal} source={image}></Image>
        <View style={styles.buttonModal}>
          <Button buttonText={buttonText} onPress={onPress}></Button>
        </View>
      </View>
    </View>
  );
};

export default DefaultModal;
