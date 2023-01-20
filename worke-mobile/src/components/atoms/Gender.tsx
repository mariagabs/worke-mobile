import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../../styles";

interface Props {
  gender: string;
  selected: string;
  onPress: () => void;
}

interface Image {
  name: string;
  image: any;
}

const Gender: React.FC<Props> = ({ gender, selected, onPress }) => {
  const images: Array<Image> = [
    {
      name: "FEMININO",
      image: require("../../../assets/sexo-feminino.png"),
    },
    {
      name: "MASCULINO",
      image: require("../../../assets/sexo-masculino.png"),
    },
  ];

  const genderImage = images.find((img) => img.name === gender).image;

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={styles.gender(gender, !selected.trim())}
        activeOpacity={1}
      >
        <Image source={genderImage}></Image>
        <Text
          style={
            selected === gender ? styles.genderTextSelected : styles.genderText
          }
        >
          {gender}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Gender;
