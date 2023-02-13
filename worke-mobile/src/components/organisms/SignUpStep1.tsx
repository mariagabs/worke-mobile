import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import BackButton from "../atoms/BackButton";
import LabelButton from "../atoms/LabelButton";

interface Props {
  navigation: any;
}

const SignUpStep1: React.FC<Props> = ({ navigation }) => {
  const login = () => navigation.navigate("Login");
  const next = () => navigation.navigate("SignUpStep2");

  return (
    <View style={styles.view}>
      <BackButton onPress={login} signUpPage={false}></BackButton>
      <Text style={styles.title(200, 2.5)}>
        <Text style={styles.titleBold}>VAMOS</Text> COMEÇAR?
      </Text>
      <Image
        style={styles.signUpImage}
        source={require("../../../assets/yoga-purple-background.png")}
      ></Image>
      <Text style={styles.info}>
        Para iniciar precisamos de algumas informações sobre você!
      </Text>
      <View style={styles.labelSkipButton}>
        <LabelButton
          color={COLORS.purple}
          text="INICIAR"
          onPress={next}
          imageColor="purple"
          hideImage={false}
        ></LabelButton>
      </View>
    </View>
  );
};
export default SignUpStep1;
