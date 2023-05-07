import React from "react";
import { View, Text } from "react-native";
import HeaderTitleButton from "../organisms/HeaderTitleButton";
import styles from "../../styles";
import NotificationOption from "../atoms/NotificationOption";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CommonActions,
  StackActions,
  NavigationAction,
  useNavigation,
} from "@react-navigation/native";
import CodePush from "react-native-code-push";

interface Props {
  navigation: any;
}

const Settings: React.FC<Props> = ({ navigation }) => {
  const back = () => navigation.navigate("Menu");
  const login = () => navigation.navigate("Login");

  const logout = () => {
    AsyncStorage.removeItem("user");
    login();
  };
  return (
    <View style={styles.container}>
      <HeaderTitleButton
        onPress={back}
        title="CONFIGURAÇÕES"
      ></HeaderTitleButton>
      <View style={[styles.viewList, styles.marginTop100]}>
        <NotificationOption
          description="Notificações"
          navigation={navigation}
        ></NotificationOption>
        <NotificationOption
          description="Ajuda"
          navigation={navigation}
        ></NotificationOption>
        <NotificationOption
          description="Termos de uso"
          navigation={navigation}
        ></NotificationOption>
        <NotificationOption
          description="Política de privacidade"
          navigation={navigation}
        ></NotificationOption>
        <NotificationOption
          description="Sobre o aplicativo"
          navigation={navigation}
        ></NotificationOption>
        <TouchableOpacity onPress={logout} style={styles.logout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
