import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../../styles";

const NoInfo: React.FC = () => {
  return (
    <View style={styles.noInfo}>
      <Image
        style={styles.imageNoInfo}
        source={require("../../../assets/ops.png")}
      ></Image>
      <View style={styles.descNoInfo}>
        <Text style={styles.titleNoInfo}>OPS!</Text>
        <Text style={styles.textNoInfo}>
          Não encontramos nenhum exercício por aqui! Realize exercícios e
          descubra seus <Text style={styles.spanFavorites}>favoritos</Text>!
        </Text>
      </View>
    </View>
  );
};

export default NoInfo;
