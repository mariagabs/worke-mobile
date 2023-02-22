import { COLORS } from "../assets/colors";

interface Image {
  name: string;
  desc: string;
  image: any;
  color: string;
}

export class LabelButtonImages {
  private static images: Array<Image> = [
    {
      name: "purple",
      desc: COLORS.purple,
      image: require("../assets/angle-right-purple.png"),
      color: "#3F2180",
    },
    {
      name: "green",
      desc: COLORS.green,
      image: require("../assets/angle-right-green.png"),
      color: "#A8CD5A",
    },
    {
      name: "pink",
      desc: COLORS.pink,
      image: require("../assets/angle-right-pink.png"),
      color: "#EA3A86",
    },
    {
      name: "blue",
      desc: COLORS.blue,
      image: require("../assets/angle-right-blue.png"),
      color: "#49B7D6",
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

  static GetImageColor = (color: string) => {
    const found = LabelButtonImages.images.find((e) => e.color === color);
    return found ? found.image : null;
  };
}
