import { COLORS } from "../assets/colors";

interface Image {
  name: string;
  desc: string;
  image: any;
}

export class LabelButtonImages {
  private static images: Array<Image> = [
    {
      name: "purple",
      desc: COLORS.purple,
      image: require("../assets/angle-right-purple.png"),
    },
    {
      name: "green",
      desc: COLORS.green,
      image: require("../assets/angle-right-green.png"),
    },
    {
      name: "pink",
      desc: COLORS.pink,
      image: require("../assets/angle-right-pink.png"),
    },
    {
      name: "blue",
      desc: COLORS.blue,
      image: require("../assets/angle-right-blue.png"),
    },
  ];

  static GetImage = (name: string) => {
    const found = LabelButtonImages.images.find((e) => e.name === name);
    return found ? found.image : null;
  };

  static GetImageDesc = (desc: string) => {
    const found = LabelButtonImages.images.find((e) => e.desc === desc);
    return found ? found.image : null;
  };
}
