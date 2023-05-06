import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { COLORS } from "../../../assets/colors";

interface Props {
  name: string;
  color: string;
}

const HelloUser: React.FC<Props> = ({ name, color }) => {
  return (
    <View>
      <Text style={styles.titleHome}>
        Olá,{" "}
        <Text
          style={
            color === COLORS.pink
              ? styles.textPink
              : color === COLORS.purple
              ? styles.textPurple
              : color === COLORS.blue
              ? styles.textBlue
              : styles.textGreen
          }
        >
          {name}
        </Text>
        !
      </Text>
    </View>
  );
};

export default HelloUser;
