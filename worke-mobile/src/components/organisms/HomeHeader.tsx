import React from "react";
import { View } from "react-native";
import UserPhotoIcon from "../atoms/UserPhotoIcon";
import NotificationIcon from "../atoms/NotificationIcon";
import HelloUser from "../atoms/HelloUser";
import LevelProgress from "../atoms/LevelProgress";
import styles from "../../styles";
import Divider from "../atoms/Divider";

interface Props {
  userID?: number;
  color: string;
  name: string;
}

const HomeHeader: React.FC<Props> = ({ userID, color, name }) => {
  return (
    <View style={styles.fullWidth}>
      <View style={styles.homeNotification}>
        <View style={styles.homePhotoName}>
          <UserPhotoIcon color={color} userID={userID}></UserPhotoIcon>
          <View style={styles.userNameGreeting}>
            <HelloUser color={color} name={name}></HelloUser>
          </View>
        </View>
        <NotificationIcon></NotificationIcon>
      </View>
      <LevelProgress color={color}></LevelProgress>
      <Divider></Divider>
    </View>
  );
};

export default HomeHeader;
