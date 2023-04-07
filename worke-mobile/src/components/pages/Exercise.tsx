import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { cameraWithTensors, bundleResourceIO } from "@tensorflow/tfjs-react-native";
import { getModel } from '../../model/utils.js'

const TensorCamera = cameraWithTensors(Camera);

const Exercise: React.FC = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    const getPermission = async () => {
      await requestPermission();
    };

    getPermission();

    console.log(permission);
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }

  function handleCameraStream(images, updatePreview, gl) {
    const loop = async () => {
      const nextImageTensor = images.next().value;


      const myModel = await getModel();
    
      const poses = await myModel.predict(images);
      //
      // do something with tensor here
      //

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
      <TensorCamera
        // Standard Camera props
        style={{ flex: 1, width: "100%" }}
        type={CameraType.front}
        // Tensor related props
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender={true}
        autoFocus={true}
        flashMode={FlashMode.off}
      />
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
