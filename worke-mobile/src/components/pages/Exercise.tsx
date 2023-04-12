import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Button, Image, Platform } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native';
import { cameraWithTensors, bundleResourceIO, fetch, decodeJpeg } from "@tensorflow/tfjs-react-native";
// import * as MediaLibrary from 'expo-media-library';

const TensorCamera = cameraWithTensors(Camera);

const Exercise: React.FC = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [imageDetector, setImageDetector] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [type, setType] = useState(CameraType.front);

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
      const tfReady = await tf.ready();
      const modelJson = require('../../../assets/model/model.json');
      const modelWeight = require('../../../assets/model/group1-shard.bin');
      // const modelWeight1 = require('../../../assets/model/group1-shard1of4.bin');
      // const modelWeight2 = require('../../../assets/model/group1-shard2of4.bin');
      // const modelWeight3 = require('../../../assets/model/group1-shard3of4.bin');
      // const modelWeight4 = require('../../../assets/model/group1-shard4of4.bin');

      console.log('iniciou loadModel');
      const thisModel = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));

      console.log('thisModel');
      console.log(thisModel.summary());

      setImageDetector(thisModel);
      console.log('finalizou loadModel');
    }
    loadModel();
  }, []);

  function handleCameraStream(tensors) {
    const loop = async () => {

      const nextImageTensor = tensors.next().value;
      console.log(JSON.stringify(nextImageTensor));
      nextImageTensor.print();

      const expandedImageTensor = tf.reshape(nextImageTensor, [1,200,200,3]);
      console.log(JSON.stringify(expandedImageTensor));
      expandedImageTensor.print();
  
      const predictions = await imageDetector.predict(expandedImageTensor);
      console.log(imageDetector);
  
      console.log(predictions.dataSync());

      requestAnimationFrame(loop);
    };
    loop();
  };

  const textureDims =
    Platform.OS === 'ios'
      ? { width: 1080, height: 1920 }
      : { width: 1600, height: 1200 };
      
  let camera: Camera;
  return (
    <View style={styles.container}>
      {showCamera && (
        <TensorCamera
          // Standard Camera props
          style={{ flex: 1, width: "100%" }}
          type={type}
          // Tensor related props
          cameraTextureHeight={textureDims.height}
          cameraTextureWidth={textureDims.width}
          resizeHeight={200}
          resizeWidth={200}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
});
export default Exercise;
