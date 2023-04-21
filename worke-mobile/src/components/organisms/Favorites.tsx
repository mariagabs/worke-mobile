import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import ExerciseCard from "../atoms/ExerciseCard";
import { COLORS } from "../../../assets/colors";
import NoInfo from "../atoms/NoInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface Props {
  onPress: (visible) => void;
}

const Favorites: React.FC<Props> = ({ onPress }) => {
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  var favoritesList = [];
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const user = await AsyncStorage.getItem("user");
      const id = JSON.parse(user).id;
      const configurationObject = {
        url: "http://54.237.75.229:8000/exercicioUsuario/" + id,
        method: "GET",
      };

      axios(configurationObject)
        .then((response) => {
          if (response.status === 200) {
            setFavorites(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getFavorites();
  }, []);

  const setChosenExercise = async (id) => {
    await AsyncStorage.setItem(
      "chosenExercise",
      JSON.stringify(favorites.find((x) => x.id === id)),
    );
  };

  const listFavorites = () => {
    for (let i = 0; i < favorites.length; i++) {
      favoritesList.push(
        <ExerciseCard
          key={favorites[i].id}
          color={colors[i]}
          description={favorites[i].categoria}
          exercise={favorites[i].exercicio}
          list={false}
          onPress={(id) => {
            setChosenExercise(id);
            onPress(true);
          }}
          idExercise={favorites[i].id}
        ></ExerciseCard>,
      );
    }

    return favoritesList;
  };

  return (
    <View>
      <Text style={styles.subtitleHome}>FAVORITOS</Text>
      {favorites.length > 0 ? (
        <View style={styles.favorites}>{listFavorites()}</View>
      ) : (
        <NoInfo />
      )}
    </View>
  );
};

export default Favorites;
