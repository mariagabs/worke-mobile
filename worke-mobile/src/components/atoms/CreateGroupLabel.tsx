import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles";

const CreateGroupLabel: React.FC = () => {

  return (
    <View style={styles.groupLabelContainer}>
        <Text style={styles.groupLabel}>CRIE SEU PRÓRPIO GRUPO</Text>
        <Image
            source={require("../../../assets/angle-right-black.png")}
          ></Image>
    </View>
  );
};

export default CreateGroupLabel;
