import React, { useState } from "react";
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
  const list = () => setListEdit(false);
  const [listEdit, setListEdit] = useState(false);

  return (
    <View>
      <HeaderTitleButton
        onPress={listEdit ? list : home}
        title="meus exercícios"
        search={true}
      ></HeaderTitleButton>
      <View style={styles.view}>
        <View style={styles.myExercisesList}>
          <ExercisesList edit={listEdit}></ExercisesList>
        </View>
        <View style={styles.buttonEditList}>
          <ListButton
            edit={listEdit}
            text={listEdit ? "salvar" : "editar lista"}
            onPress={(type) => setListEdit(type)}
          ></ListButton>
        </View>
      </View>
    </View>
  );
};

export default MyExercises;
