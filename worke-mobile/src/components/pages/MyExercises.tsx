import React from "react";
import { View, ScrollView } from "react-native";
import HeaderTitleButton from "../organisms/HeaderTitleButton";
import styles from "../../styles";
import ExercisesList from "../organisms/ExercisesList";
import ListButton from "../atoms/ListButton";

interface Props {
  navigation: any;
}

const MyExercises: React.FC<Props> = ({ navigation }) => {
  const home = () => navigation.navigate("Menu");

  return (
    <View>
      <HeaderTitleButton
        onPress={home}
        title="meus exercícios"
        search={true}
      ></HeaderTitleButton>
      <View style={styles.myExercisesList}>
        <ExercisesList></ExercisesList>
      </View>
      <View style={styles.buttonEditList}>
        <ListButton edit={true} text="editar lista"></ListButton>
      </View>
    </View>
  );
};

export default MyExercises;
