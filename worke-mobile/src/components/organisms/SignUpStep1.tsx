import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles";

const SignUpStep1: React.FC = () => {
  return (
    <View style={styles.view}>
      <Text style={(styles.title, styles.width200, styles.letterSpacing25)}>
        <Text style={styles.titleBold}>VAMOS</Text> COMEÇAR?
      </Text>
      <Image
        style={styles.signUpImage}
        source={require("../../../assets/yoga-purple-background.png")}
      ></Image>
      <Text style={styles.info}>
        Para iniciar precisamos de algumas informações sobre você!
      </Text>
    </View>
  );
};
export default SignUpStep1;
