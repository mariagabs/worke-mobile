import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
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
// import * as MediaLibrary from 'expo-media-library';

const TensorCamera = cameraWithTensors(Camera);

const Exercise: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [imageDetector, setImageDetector] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [type, setType] = useState(CameraType.front);
  // const camRef = useRef(null);

  useEffect(() => {
    setShowCamera(true);

    return () => {
      setShowCamera(false);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");

      // async function loadModel() {
      const tfReady = await tf.ready();
      const modelJson = require("../../../assets/model/model.json");
      const modelWeight = require("../../../assets/model/group1-shard.bin");
      // const modelJson = require('../../../assets/model/modellib.json');
      // const modelWeight = require('../../../assets/model/group-shardlib.bin');

      console.log("iniciou loadModel");
      // const thisModel = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));

      const thisModel = await tf.loadGraphModel(
        bundleResourceIO(modelJson, modelWeight),
      );

      await sleep(5000);

      console.log("modelo is on");

      await setImageDetector(thisModel);

      console.log("finalizou loadModel: ", imageDetector);
      // }
      // loadModel();
    })();
  }, [imageDetector]);

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  async function handleCameraStream(images) {
    const loop = async () => {
      const nextImageTensor = images.next().value;
      // console.log(JSON.stringify(nextImageTensor));
      nextImageTensor.print();

      // const resized = tf.image.resizeBilinear(nextImageTensor, [640, 480]);
      // // resized.isDisposedInternal = true;

      // const casted = resized.cast('int32');

      // const expanded = casted.expandDims(0);

      // // faz a previsão.
      // const obj = await imageDetector.executeAsync(expanded);

      const resized = tf.image.resizeBilinear(nextImageTensor, [224, 224]);
      console.log(JSON.stringify(resized));

      const casted = tf.cast(resized, "float32");
      // console.log(JSON.stringify(casted));

      const expanded = tf.expandDims(casted, 0);
      // console.log(JSON.stringify(expanded));
      expanded.print();

      // const expandedImageTensor = tf.reshape(nextImageTensor, [1,224,224,3]);
      // console.log(JSON.stringify(expandedImageTensor));
      // expandedImageTensor.print();

      // const inputs = tf.ones([1, 224, 224, 3]);

      // inputs.print();
      await sleep(5000);
      console.log("imageDetector", imageDetector);
      const obj = imageDetector.execute(expanded);
      console.log(obj.data());

      // console.log(predictions.dataSync());
      tf.dispose(images);
      requestAnimationFrame(loop);
      await sleep(5000);
    };

    loop();
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
          zoom={0}
          resizeDepth={3}
          onReady={handleCameraStream}
          autorender={false}
          autoFocus={true}
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
