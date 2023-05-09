import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "../../styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";
import BodyCard from "../atoms/BodyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Body: React.FC = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    const getData = async () => {
      let user = JSON.parse(await AsyncStorage.getItem("user"));
      setHeight(user.height);
      setWeight(user.weight);
    };

    getData();
  }, []);

  const data = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
    ],
    datasets: [
      {
        data: [62, 67, 63, 65, 68, 66, 70],
        strokeWidth: 5,
        color: (opacity = 1) => `rgba(168, 205, 90, ${opacity})`,
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(168, 205, 90, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(176, 176, 176, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    fillShadowGradientFromOpacity: 0,
    fillShadowGradientToOpacity: 0,
    decimalPlaces: 0,
    style: {
      borderRadius: 7,
    },
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.bodyChart}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>peso</Text>
            <FontAwesome5 name="plus" size={22} color={COLORS.green} />
          </View>
          <LineChart
            data={data}
            width={Dimensions.get("window").width - 70}
            height={240}
            chartConfig={chartConfig}
            yAxisSuffix=" kg"
            withShadow={false}
            verticalLabelRotation={-38}
            xLabelsOffset={10}
            segments={2}
            style={{
              borderRadius: 7,
            }}
          />
        </View> */}
      <View style={styles.bodyCards}>
        <BodyCard weight={weight} height=""></BodyCard>
        <BodyCard height={height} weight=""></BodyCard>
      </View>
    </View>
  );
};

export default Body;
