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
  "Pra baixo",
];

const TensorCamera = cameraWithTensors(Camera);
let modeloTensorFlow = null;
let started = false;

// tudo isso aqui eu tinha criado como useState,
// mas ficou sem atualizar certo e eu meti o louco
// e criei tudo aqui (y)
let changed = false;
let wrongExercise = false;
let beingExecuted = "";
let exerciseTimer = null;
let showContinue = false,
  showAlmostDone = false,
  showFixExercise = false;
let goodAccuracyCount = 0,
  badAccuracyCount = 0;
let executedExercise = {
  name: "",
  accuracy: 0,
};

interface Props {
  navigation: any;
}

const Exercise: React.FC<Props> = ({ navigation }) => {
  const [timerStart, setTimerStart] = useState(3);
  const [showTimerStart, setShowTimerStart] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [timer, setTimer] = useState(15);
  const [exercise, setExercise] = useState([]);
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

  const startExerciseTimer = () => {
    console.log("startExerciseTimer");
    exerciseTimer = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount === 0 && stopTimer();
        if (lastTimerCount === 10) showContinue = true;
        if (lastTimerCount === 14) showContinue = false;
        if (lastTimerCount <= 5) showAlmostDone = true;
        return lastTimerCount - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(exerciseTimer);
    showAlmostDone = false;
    showContinue = false;
  };

  if (timerStart === 0 && !started) {
    started = true;
  }

  const back = async () => {
    started = false;
    const page = await AsyncStorage.getItem("currentExercisePage");
    const category = await AsyncStorage.getItem("isCategoryPage");
    navigation.navigate("MyExercises", {
      title: page,
      getCategoryExercise: category === "1",
    });
  };

  useEffect(() => {
    (async () => {
      setExercise(JSON.parse(await AsyncStorage.getItem("chosenExercise")));
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
      if (started) {
        tf.engine().startScope();
        if (modeloTensorFlow != null) {
          const nextImageTensor = images.next().value;
          await detect(modeloTensorFlow, nextImageTensor);
        }
        tf.dispose(images);
        tf.engine().endScope();

        requestAnimationFrame(loop);

        // valida se o exercício que retornou do detect
        // é o mesmo que retornou anteriormente
        if (beingExecuted !== executedExercise.name) {
          changed = true;
          goodAccuracyCount = 0;
          badAccuracyCount = 10;
        }

        // valida se o exercício sendo executado é o
        // mesmo exercício que foi escolhido
        else if (executedExercise.name !== exercise.nome) {
          wrongExercise = true;
          goodAccuracyCount = 0;
          badAccuracyCount = 10;
        }
        // dentro desse else mesmo?
        // (atualiza só se corresponder ao exercício escolhido)
        else {
          beingExecuted = executedExercise.name;
        }

        // se manter o mesmo exercício com acurácia > 0.9
        // por 2 segundos, executa o cronômetro
        if (goodAccuracyCount === 20) {
          startExerciseTimer();
          goodAccuracyCount = 0;
          validateExercise(true);
        }
        // se estiver executando com acurácia < 0.9
        // por 2 segundos seguidos, pausa o cronômetro (se já estiver rodando)
        // e mostra aviso na tela
        else if (badAccuracyCount === 20) {
          if (exerciseTimer !== null) stopTimer();
          badAccuracyCount = 0;
          validateExercise(false);
        } else {
          // soma quantas vezes retornou o exercício certo
          // com acurácia > 0.9 ou < 0.9
          if (executedExercise.accuracy > 0.9) {
            badAccuracyCount = 0;
            goodAccuracyCount = goodAccuracyCount + 1;
          } else if (executedExercise.accuracy < 0.9) {
            goodAccuracyCount = 0;
            badAccuracyCount = badAccuracyCount + 1;
          }
        }

        await sleep(100);
      }
    };
    loop();
  }

  const detect = async (net, images) => {
    const nextImageTensor = images;

    const resized = tf.image.resizeBilinear(nextImageTensor, [224, 224]);

    const casted = tf.cast(resized, "float32");

    const expanded = tf.expandDims(casted, 0);

    const normalized = expanded.cast("float32").div(127.5).sub(1);
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
      console.log(RESULT_MAPPING[biggestIdex] + " : " + biggest);
      executedExercise.name = RESULT_MAPPING[biggestIdex];
      executedExercise.accuracy = biggest;
      console.log("");
      tf.dispose(obj);
      tf.dispose(resized);
      tf.dispose(expanded);
      tf.dispose(normalized);
      tf.dispose(nextImageTensor);
      tf.dispose(casted);
    }
  };

  const validateExercise = (good) => {
    const chosenExercise = exercise.nome;

    if (!good) {
      showFixExercise = true;
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
      {started ? (
        <View style={styles.timerExercise}>
          <Text style={styles.textTimerExercise}>{timer}</Text>
        </View>
      ) : (
        ""
      )}
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
      {started && showFixExercise ? (
        <View style={styles.labelExercise}>
          <Image source={require("../../../assets/arrumar.png")}></Image>
        </View>
      ) : (
        ""
      )}
      {started && showAlmostDone && !showFixExercise ? (
        <View style={styles.labelExercise}>
          <Image source={require("../../../assets/faltaPouco.png")}></Image>
        </View>
      ) : (
        ""
      )}
      {started && showContinue && !showFixExercise ? (
        <View style={styles.labelExercise}>
          <Image source={require("../../../assets/continue.png")}></Image>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default Exercise;
