import styles from "./styles";

interface Image {
  name: string;
  image: any;
  backgroundColor: any;
}

export class WorkoutExerciseImages {
  private static images: Array<Image> = [
    {
      name: "18",
      image: require("../assets/18.png"),
      backgroundColor: styles.backgroundLightBlue,
    },
    {
      name: "19",
      image: require("../assets/19.png"),
      backgroundColor: styles.backgroundLightGreen,
    },
    {
      name: "20",
      image: require("../assets/20.png"),
      backgroundColor: styles.backgroundLightPurple,
    },
    {
      name: "21",
      image: require("../assets/21.png"),
      backgroundColor: styles.backgroundLightPink,
    },
    {
      name: "22",
      image: require("../assets/22.png"),
      backgroundColor: styles.backgroundLightPurple,
    },
    {
      name: "23",
      image: require("../assets/23.png"),
      backgroundColor: styles.backgroundLightBlue,
    },
    {
      name: "24",
      image: require("../assets/24.png"),
      backgroundColor: styles.backgroundLightGreen,
    },
  ];

  static GetImage = (name: string) => {
    const found = WorkoutExerciseImages.images.find(
      (e) => e.name === name.toString(),
    );
    return found ? found.image : null;
  };

  static GetStyle = (name: string) => {
    const found = WorkoutExerciseImages.images.find(
      (e) => e.name === name.toString(),
    );
    return found ? found.backgroundColor : null;
  };
}
