import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "../../styles";
import ExerciseCard from "../atoms/ExerciseCard";
import { COLORS } from "../../../assets/colors";
import NoInfo from "../atoms/NoInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

interface Props {
  onPress: (visible) => void;
}

const Favorites: React.FC<Props> = ({ onPress }) => {
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  var favoritesList = [];
  const [favorites, setFavorites] = useState([]);
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);

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
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    if (isFocused) {
      getFavorites();
    }
  }, [isFocused]);

  const setChosenExercise = async (id) => {
    await AsyncStorage.setItem(
      "chosenExercise",
      JSON.stringify(favorites.find((x) => x.id === id)),
    );
    await AsyncStorage.setItem("fromFavorites", "1");
    await AsyncStorage.removeItem("chosenWorkout");    
  };

  const listFavorites = () => {
    for (let i = 0; i < favorites.length; i++) {
      favoritesList.push(
        <ExerciseCard
          key={favorites[i].id}
          color={colors[i]}
          exercise={favorites[i].nome}
          list={false}
          onPress={(id) => {
            setChosenExercise(favorites[i].id);
            onPress(true);
          }}
          idExercise={favorites[i].id}
        ></ExerciseCard>,
      );
    }

    return favoritesList;
  };

  if (loading) {
    return (
      <View>
        <Text style={styles.subtitleHome}>FAVORITOS</Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
      </View>
    );
  }
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
