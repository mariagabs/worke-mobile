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
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation: any;
  user: any;
}

const Profile: React.FC<Props> = ({ user, navigation }) => {
  const config = () => {
    navigation.navigate("Settings");
  };
  return (
    <View style={styles.container}>
      <Ionicons
        name="settings-sharp"
        size={26}
        color={COLORS.black}
        style={styles.configIcon}
        onPress={config}
      ></Ionicons>

      <View style={styles.profile}>
        <ProfilePhoto user={user}></ProfilePhoto>
        <ProfileTabs user={user} />
      </View>
    </View>
  );
};

export default Profile;
