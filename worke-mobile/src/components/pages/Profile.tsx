import React from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../../styles";
import ProfilePhoto from "../atoms/ProfilePhoto";
import ProfileTabs from "../organisms/ProfileTabs";

interface Props {
  user: any;
}

const Profile: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ProfilePhoto user={user}></ProfilePhoto>
        <ProfileTabs />
      </View>
    </View>
  );
};

export default Profile;
