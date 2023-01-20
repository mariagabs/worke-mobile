import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";

interface Props {
  name: string;
  color: string;
}

const HelloUser: React.FC<Props> = ({ name, color }) => {
  return (
    <View>
      <Text style={styles.titleHome}>
        Olá, <Text style={styles.nameColor(color)}>{name}</Text>!
      </Text>
    </View>
  );
};

export default HelloUser;
