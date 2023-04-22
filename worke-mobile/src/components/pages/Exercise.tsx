import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import ModelSingleton from "../../modelSingleton";
import styles from "../../styles";
import ButtonExercise from "../atoms/ButtonExercise";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RESULT_MAPPING = [
  "Cima",
  "Pulso",
  "Diagonal",
  "Joelho",
  "Lateral",
  "Parado",
  "Pescoço",
  "Vazio",
];
const URL = "https://teachablemachine.withgoogle.com/models/9jDgOM0XD/";

const TensorCamera = cameraWithTensors(Camera);
let modeloTensorFlow = null;
let started = false;
let leavePage = false;

interface Props {
  navigation: any;
}

const Exercise: React.FC<Props> = ({ navigation }) => {
  // const [started, setStarted] = useState(false);
  const [timerStart, setTimerStart] = useState(3);
  const [showTimerStart, setShowTimerStart] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const startExercise = () => {
    setShowTimerStart(true);
    setShowButton(false);
    const timer = setInterval(() => {
      setTimerStart((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(timer);
        if (lastTimerCount == 1) started = true;
        return lastTimerCount - 1;
      });
    }, 1000);
  };

  if (timerStart === 0 && !started) {
    started = true;
  }

  const back = async () => {
    started = false;
    leavePage = true;
    const page = await AsyncStorage.getItem("currentExercisePage");
    const category = await AsyncStorage.getItem("isCategoryPage");
    navigation.navigate("MyExercises", {
      title: page,
      getCategoryExercise: category === "1",
    });
  };

  useEffect(() => {
    (async () => {
      let modelo = ModelSingleton.getInstance();
      modeloTensorFlow = modelo.getModelo();
      console.log("pegou modelo da Home");
    })();
  }, []);

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  async function handleCameraStream(images) {
    const loop = async () => {
      console.log("handle: ", started);
      if (leavePage) {
        leavePage = false;
        return;
      }
      if (started) {
        tf.engine().startScope();
        if (modeloTensorFlow != null) {
          const nextImageTensor = images.next().value;
          await detect(modeloTensorFlow, nextImageTensor);
        }

        tf.dispose(images);
        tf.engine().endScope();
      }
      requestAnimationFrame(loop);
      await sleep(100);
    };
    loop();
  }

  const detect = async (net, images) => {
    const nextImageTensor = images;

    const resized = tf.image.resizeBilinear(nextImageTensor, [224, 224]);

    const casted = tf.cast(resized, "float32");

    const expanded = tf.expandDims(casted, 0);

    const normalized = expanded.cast("float32").div(127.5).sub(1);
    console.log("predição");
    const obj = await net.predict(normalized);

    let biggest = 0;
    let biggestIdex = 0;
    if (obj) {
      for (let index = 0; index < obj.dataSync().length; index++) {
        const element = obj.dataSync()[index];
        if (element > biggest) {
          biggest = element;
          biggestIdex = index;
        }
      }
      console.log("biggest = " + RESULT_MAPPING[biggestIdex] + " : " + biggest);
      console.log("");
      tf.dispose(obj);
      tf.dispose(resized);
      tf.dispose(expanded);
      tf.dispose(normalized);
      tf.dispose(nextImageTensor);
      tf.dispose(casted);
    }
  };

  const textureDims =
    Platform.OS === "ios"
      ? { width: 1080, height: 1920 }
      : { width: 1600, height: 1200 };

  const camRef = useRef(null);
  return (
    <View style={styles.container}>
      {!started ? (
        <Image
          source={require("../../../assets/background-exercise-waiting.png")}
          style={styles.exerciseBackgroundWaiting}
        ></Image>
      ) : (
        ""
      )}
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={back}
        activeOpacity={1}
      >
        <Image source={require("../../../assets/arrow-back.png")} />
      </TouchableOpacity>

      <TensorCamera
        ref={camRef}
        // Standard Camera props
        style={{
          flex: 1,
          position: "absolute",
          elevation: 0,
          width: "122%",
          height: "100%",
        }}
        type={CameraType.front}
        useCustomShadersToResize={false}
        // Tensor related props
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={224}
        resizeWidth={224}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender={true}
        flashMode={FlashMode.off}
      />
      {!started ? (
        <View style={styles.textExerciseStart}>
          <Image
            source={require("../../../assets/background-exercise-waiting.png")}
            style={styles.exerciseBackgroundWaiting}
          ></Image>
          {showTimerStart ? (
            <Text style={styles.timerStart}>{timerStart}</Text>
          ) : (
            <Text style={styles.textStart}>PREPARE-SE</Text>
          )}
          {showButton ? (
            <ButtonExercise
              text="INICIAR"
              onPress={startExercise}
            ></ButtonExercise>
          ) : (
            ""
          )}
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default Exercise;
