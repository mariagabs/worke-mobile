import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../styles";

interface Props {
  navigation: any;
}

const CreateGroupLabel: React.FC<Props> = ({ navigation }) => {
  const createGroup = () => navigation.navigate("CreateGroup");

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.groupLabelContainer}
      onPress={createGroup}
    >
      <Text style={styles.groupLabel}>CRIE SEU PRÓPRIO GRUPO</Text>
      <Image source={require("../../../assets/angle-right-black.png")}></Image>
    </TouchableOpacity>
  );
};

export default CreateGroupLabel;
