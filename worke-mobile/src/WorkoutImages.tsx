interface Image {
  name: string;
  image: any;
}

export class WorkoutImages {
  private static images: Array<Image> = [
    {
      name: "4",
      image: require("../assets/lowback_workout.png"),
    },
    {
      name: "3",
      image: require("../assets/lower_workout.png"),
    },
    {
      name: "1",
      image: require("../assets/neck_workout.png"),
    },
    {
      name: "5",
      image: require("../assets/relax_workout.png"),
    },
    {
      name: "2",
      image: require("../assets/wrist_workout.png"),
    },
  ];

  static GetImage = (name: string) => {
    const found = WorkoutImages.images.find((e) => e.name === name.toString());
    return found ? found.image : null;
  };
}
