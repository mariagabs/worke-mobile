import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Button from "../atoms/Button";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Camera } from "expo-camera";
import { WorkoutExerciseImages } from "../../WorkoutExerciseImages";

interface Props {
  title: string;
  text: string;
  buttonText: string;
  type: string;
  onPressClose: (visible: boolean) => void;
  navigation?: any;
  exerciseId?: string;
  onPressContinue?: () => void;
}

const DefaultModal: React.FC<Props> = ({
  title,
  text,
  buttonText,
  type,
  onPressClose,
  navigation,
  exerciseId,
  onPressContinue,
}) => {
  const images = [
    { type: "yoga", image: require("../../../assets/letsyoga.png") },
    { type: "exercise", image: require("../../../assets/letsexercise.png") },
    { type: "success", image: require("../../../assets/signUpSuccess.png") },
    { type: "shareGroup", image: require("../../../assets/shareGroup.png") },
    { type: "empty", image: "" },
  ];
  const image = images.find((x) => x.type === type).image;
  const [startExercise, setStartExercise] = useState(false);
  let backgroundImage = "";
  let style = "";

  if (exerciseId !== undefined) {
    backgroundImage = WorkoutExerciseImages.GetImage(exerciseId);
    style = WorkoutExerciseImages.GetStyle(exerciseId);
  }

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
    <View
      style={
        type !== "empty" ? styles.modalBackground : styles.modalNoBackground
      }
    >
      <View
        style={[
          styles.modal,
          !startExercise ? styles.backgroundWhiteNoHeight : style,
        ]}
      >
        <View style={styles.headerModal}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => onPressClose(false)}
          >
            <FontAwesome
              name="close"
              size={30}
              color={!startExercise ? COLORS.lightGray : COLORS.black}
            />
          </TouchableOpacity>
        </View>
        {!startExercise ? (
          <View style={styles.centerView}>
            <View style={styles.modalTitle}>
              <Text style={styles.modalTitleText}>{title}</Text>
              <Text
                style={
                  type === "empty" ? styles.modalTextSmall : styles.modalText
                }
              >
                {text}
              </Text>
            </View>
            <Image style={styles.imageModal} source={image}></Image>
          </View>
        ) : (
          <View style={[styles.centerView]}>
            <Image
              source={backgroundImage}
              style={[styles.fullWidth, { resizeMode: "stretch" }]}
            ></Image>
          </View>
        )}
        <View
          style={[
            styles.buttonModal,
            type !== "empty" ? styles.positionAbsolute : "",
          ]}
        >
          {type === "empty" ? (
            <Button buttonText={buttonText} onPress={onPressContinue}></Button>
          ) : startExercise ? (
            <Button buttonText="INICIAR" onPress={onPress}></Button>
          ) : !startExercise ? (
            <Button
              buttonText={buttonText}
              onPress={() => {
                setStartExercise(true);
              }}
            ></Button>
          ) : (
            ""
          )}
        </View>
      </View>
    </View>
  );
};

export default DefaultModal;
