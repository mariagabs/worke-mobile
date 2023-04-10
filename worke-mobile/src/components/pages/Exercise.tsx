import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import * as tf from "@tensorflow/tfjs"
import '@tensorflow/tfjs-react-native';
import { cameraWithTensors, bundleResourceIO, fetch } from "@tensorflow/tfjs-react-native";
// import { getModel } from '../../../assets/model/model.json'

const TensorCamera = cameraWithTensors(Camera);

const Exercise: React.FC = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [imageDetector, setImageDetector] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    setShowCamera(true);

    return () => {
      setShowCamera(false);
    }
  }, []);

  useEffect(() => {
    const getPermission = async () => {
      await requestPermission();
    };

    getPermission();

    async function loadModel(){
      console.log('iniciou loadModel');
      const tfReady = await tf.ready();
      const modelJson = require('../../../assets/model/model.json');
      const modelWeights = require('../../../assets/model/group1-shard.bin');

      const thisModel = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
      console.log('thisModel');
      // console.log('tfjs');
      // console.log(tf.version);

      setImageDetector(thisModel);
      console.log('finalizou loadModel');
    }
    loadModel();

    console.log(permission);
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }

  function handleCameraStream(tensors) {
    
    const loop = async () => {
      const nextImageTensor = tensors.next().value;

      console.log(JSON.stringify(nextImageTensor));
      // const axs = 0;
      // const imageTensorReshaped = nextImageTensor.expandDims(axs);

      const expandedImageTensor = tf.reshape(nextImageTensor, [1,180,180,3]);
      console.log(JSON.stringify(expandedImageTensor));
      console.log('expandedImageTensor');
      console.log('starting prediction');

      const predictions = await imageDetector.predict(nextImageTensor);
      
      console.log(predictions.dataSync());
      // const newImage = nextImageTensor.reshape([1,180,180,3]);
      // let result = await imageDetector.predict(newImage);

      // console.log(JSON.stringify(result));
    
      // tf.dispose(tensors);
      
      // do something with tensor here
      

      // if autorender is false you need the following two lines.
      // updatePreview();
      // gl.endFrameEXP();

      requestAnimationFrame(loop);
    };
    loop();
  }

  let camera: Camera;
  return (
    <View style={styles.container}>
      {showCamera && (
        <TensorCamera
          // Standard Camera props
          style={{ flex: 1, width: "100%" }}
          type={CameraType.front}
          // Tensor related props
          resizeHeight={180}
          resizeWidth={180}
          resizeDepth={3}
          onReady={handleCameraStream}
          autorender={true}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Exercise;
