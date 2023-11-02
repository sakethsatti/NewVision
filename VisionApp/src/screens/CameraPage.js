import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import  {Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Button from '../components/Button';
import {LogBox} from "react-native";

export default function CameraUI ({setImage}) {
    LogBox.ignoreAllLogs()
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
          MediaLibrary.requestPermissionsAsync();
          const cameraStatus = await Camera.requestCameraPermissionsAsync();
          setHasCameraPermission(cameraStatus["granted"])
        })();
      }, [])

    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>
    }

    const takePicture = async () => {
        if (cameraRef) {
            try {
            const data = await cameraRef.current.takePictureAsync();
            console.log(data);
            setImage(data.uri);
            } catch (e) {
            console.log(e);
            }
        }
    }

    return (
        <View style = {styles.container}>
            <Camera
            style = {styles.camera}
            type = {type}
            flashMode = {flash}
            ref={cameraRef}
            >
            </Camera>
            <View style = {styles.imageButtons}>
                <Button title = {'Take a picture'} icon = "camera" onPress = {takePicture} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#ADD8E6',
      justifyContent: 'center',
      paddingBottom: 20
    },
    camera: {
      flex: 7,
      borderRadius: 30
    },
    imageButtons: {
        flex: 1,
        flexDirection: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 50
    }
});