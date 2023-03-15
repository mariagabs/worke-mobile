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
  desc: string;
}

const Gender: React.FC<Props> = ({ gender, selected, onPress }) => {
  const images: Array<Image> = [
    {
      name: "F",
      desc: "FEMININO",
      image: require("../../../assets/sexo-feminino.png"),
    },
    {
      name: "M",
      desc: "MASCULINO",
      image: require("../../../assets/sexo-masculino.png"),
    },
  ];

  const genderImage = images.find((img) => img.name === gender).image;
  const genderDesc = images.find((img) => img.name === gender).desc;

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
          {genderDesc}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Gender;
