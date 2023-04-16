import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import {
  cameraWithTensors,
  bundleResourceIO,
  fetch,
  decodeJpeg,
} from "@tensorflow/tfjs-react-native";
import { createNativeWrapper } from "react-native-gesture-handler";
import ModelSingleton from '../../modelSingleton';
// import * as MediaLibrary from 'expo-media-library';

const RESULT_MAPPING = ['Cima', 'Pulso', 'Diagonal', 'Joelho', 'Lateral', 'Parado'];
const URL = "https://teachablemachine.withgoogle.com/models/9jDgOM0XD/";

const TensorCamera = cameraWithTensors(Camera);
let modeloTensorFlow = null;
const { width, height } = Dimensions.get("window");
const Exercise: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [imageDetector, setImageDetector] = useState(null);
  const [presentedShape, setPresentedShape] = useState('');
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    (async () => {
      setShowCamera(true);

      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      let modelo = ModelSingleton.getInstance();
      modeloTensorFlow = modelo.getModelo();
      console.log('pegou modelo da Home');
    })();

    // setShowCamera(false);
  }, [imageDetector]);

  // setImageDetector(loadModel);

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  async function handleCameraStream(images) {
    console.log("inside");

    const loop = async () => {
      if (modeloTensorFlow != null) {
        const nextImageTensor = images.next().value;
        await detect(modeloTensorFlow, nextImageTensor);
      }      

      tf.dispose(images);
      requestAnimationFrame(loop);
      // await sleep(5000);
    };
    loop();
  }

  const detect = async (net, images) => {
    const nextImageTensor = images;

    const resized = tf.image.resizeBilinear(nextImageTensor, [224, 224]);

    const casted = tf.cast(resized, "float32");
    // console.log(JSON.stringify(casted));

    const expanded = tf.expandDims(casted, 0);
    
    const normalized = expanded.cast('float32').div(127.5).sub(1);
    // // console.log(JSON.stringify(expanded));
    // expanded.print();

    // const obj = await imageDetector.execute(expanded);
    console.log('predição');
    const obj = await net.predict(normalized);
    // console.log(obj.dataSync());
    // console.log(obj.dataSync());

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
      console.log('biggest = ' + RESULT_MAPPING[biggestIdex]+ ' : '+biggest)
      console.log('');
      // const highestPrediction = obj.indexOf(
      //   Math.max.apply(null, obj),  
      // );
    }
    
    // setPresentedShape(RESULT_MAPPING[highestPrediction]);
  }

  const textureDims =
    Platform.OS === "ios"
      ? { width: 1080, height: 1920 }
      : { width: 1600, height: 1200 };

  let camera: Camera;
  return (
    <View style={styles.container}>
      {showCamera && (
        <TensorCamera
          // Standard Camera props
          style={{ flex: 1, width: "100%" }}
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
      )}
      {/* <Camera
        ref={(r) => {
          camera = r;
        }}
        type={CameraType.front}
        style={{ flex: 1, width: "100%" }}
      ></Camera> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
export default Exercise;
