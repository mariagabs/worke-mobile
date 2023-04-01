import React, { useEffect, useRef } from "react";
import { Linking, View } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";

const Exercise: React.FC = () => {
  useEffect(() => {
    console.log("USEEFFECTTTTTTTTTTTTTTTTTTT");
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log(`Camera permission status: ${permission}`);
      if (permission === "denied") await Linking.openSettings();
    }
    getPermission();
  }, []);

  const camera = useRef(null);
  const devices = useCameraDevices();
  console.log("DEVICESSSSSSSSSSSSSSSSSSSSSS", devices);
  const device = devices.back;
  return (
    <Camera
      // ref={camera}
      style={{ flex: 1 }}
      device={device}
      isActive={true}
      photo={true}
    />
  );
};

export default Exercise;
