import React, { useEffect, useState } from "react";
import { View } from "react-native";
import UserPhotoIcon from "../atoms/UserPhotoIcon";
import NotificationIcon from "../atoms/NotificationIcon";
import HelloUser from "../atoms/HelloUser";
import LevelProgress from "../atoms/LevelProgress";
import styles from "../../styles";
import Divider from "../atoms/Divider";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  color: string;
}

const HomeHeader: React.FC<Props> = ({ color }) => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [progress, setProgress] = useState("");
  let id = "";

  useEffect(() => {
    const getUser = async () => {
      if (user === null) {
        let userStorage = await AsyncStorage.getItem("user");
        let userJSON = JSON.parse(userStorage);
        setUser(userJSON);
        setImage(userJSON.image);
        setLevel(userJSON.level);
        setName(userJSON.first_name);
        setProgress(userJSON.progress.toString());
        id = userJSON.id.toString();
      }
    };

    getUser();
  }, []);

  return (
    <View style={styles.fullWidth}>
      <View style={styles.homeNotification}>
        <View style={styles.homePhotoName}>
          <UserPhotoIcon
            color={color}
            image={image}
            level={level}
          ></UserPhotoIcon>
          <View style={styles.userNameGreeting}>
            <HelloUser color={color} name={name}></HelloUser>
          </View>
        </View>
        <NotificationIcon></NotificationIcon>
      </View>
      <LevelProgress
        color={color}
        level={level}
        progress={progress}
      ></LevelProgress>
      <Divider></Divider>
    </View>
  );
};

export default HomeHeader;
