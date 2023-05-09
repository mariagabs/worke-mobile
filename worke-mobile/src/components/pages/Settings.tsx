import React from "react";
import { View, Text } from "react-native";
import HeaderTitleButton from "../organisms/HeaderTitleButton";
import styles from "../../styles";
import NotificationOption from "../atoms/NotificationOption";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const terms = (type) =>
    navigation.navigate("Terms", {
      type: type,
    });
  return (
    <View style={styles.container}>
      <HeaderTitleButton
        onPress={back}
        title="CONFIGURAÇÕES"
      ></HeaderTitleButton>
      <View style={[styles.viewList, styles.marginTop100]}>
        <NotificationOption
          description="Termos de uso"
          navigation={navigation}
          onPress={() => {
            terms("use");
          }}
        ></NotificationOption>
        <NotificationOption
          description="Política de privacidade"
          navigation={navigation}
          onPress={() => {
            terms("privacy");
          }}
        ></NotificationOption>

        <TouchableOpacity onPress={logout} style={styles.logout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
