import { StatusBar } from 'expo-status-bar';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Button, Image } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import * as jpeg from 'jpeg-js'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native';
import { cameraWithTensors, bundleResourceIO, fetch, decodeJpeg } from "@tensorflow/tfjs-react-native";
// import * as MediaLibrary from 'expo-media-library';

const Exercise: React.FC = () => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();
  const [imageDetector, setImageDetector] = useState(null);
  const [type, setType] = useState(CameraType.front);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
    async function loadModel(){
      const tfReady = await tf.ready();
      console.log('tf.version');
      console.log(tf.version);
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

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 0.1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    console.log(newPhoto.uri);

    const file = await manipulateAsync(newPhoto.uri, [
        {resize: {width: 180, height: 180}},
      ],
      {base64: true, compress: 0.5, format: SaveFormat.JPEG}
    );

    // console.log(file.base64);
    const imgBuffer = tf.util.encodeString(file.base64, 'base64').buffer;
    const raw = new Uint8Array(imgBuffer);
    const imageTensor = decodeJpeg(raw);
    // console.log(imageTensor);
    // imageTensor.print(); 

    let expandedImageTensor = tf.expandDims(imageTensor, 0);
    // console.log(JSON.stringify(expandedImageTensor));
    const newExpandedImageTensor = tf.cast(expandedImageTensor, 'float32')
    console.log(newExpandedImageTensor);
    newExpandedImageTensor.print(); 
    console.log('expandedImageTensor');
    console.log('starting prediction');

    const predictions = await imageDetector.predict(expandedImageTensor).data();
    console.log(imageDetector);
    // const res = await imageDetector.executeAsync(imageTensor);
    
    console.log(predictions.dataSync());
  };
  
  if (photo) {
    
    setPhoto(undefined);
    // let savePhoto = () => {
    //   MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
    //   });
    // };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        {/* <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined} */}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef} type={type} ratio="16:9">
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});
export default Exercise;
