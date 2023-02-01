import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { COLORS } from "../../../assets/colors";
import styles from "../../styles";
import HomeHeader from "../organisms/HomeHeader";
import MyExercises from "../atoms/MyExercises";
import Favorites from "../organisms/Favorites";

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  let favorites = [
    { exercise: "alongamento", description: "tronco" },
    { exercise: "alongamento", description: "pescoço" },
    { exercise: "alongamento", description: "quadríceps" },
    { exercise: "yoga", description: "árvore" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <View style={styles.homeHeader}>
          <HomeHeader color={COLORS.blue} name="Karina"></HomeHeader>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 30,
            marginTop: 10,
            width: Dimensions.get("window").width,
            alignSelf: "center",
          }}
        >
          <MyExercises
            navigation={navigation}
            userLevel="iniciante"
          ></MyExercises>
          <Favorites list={favorites}></Favorites>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
