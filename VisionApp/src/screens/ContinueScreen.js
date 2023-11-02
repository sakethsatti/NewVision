import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Button from '../components/Button';
import * as FileSystem from 'expo-file-system';
import {LogBox} from "react-native";


export default function Continue ({image, setCaption, setImage}) {
  LogBox.ignoreAllLogs()
    const submitImage = async () => {

        let response = await FileSystem.uploadAsync("https://2c66-98-109-116-177.ngrok-free.app/upload", image, {
          headers:{
            'Content-Type': 'multipart/form-data',
          },
          fieldName: 'file',
          httpMethod: "POST",
          uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        });
        
        setCaption(JSON.parse(response["body"])["caption"]);        
      }

    return (
        <View style = {styles.container}>
            <Image source = {{uri: image}} style={styles.camera}/>
            <View style = {styles.imageButtons}>
                <Button title = {"Re-take"} icon = "retweet" onPress={() => setImage(null)}/>
                <Button title = {"Continue"} icon = "check" onPress={submitImage}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',
      justifyContent: 'center',
      paddingBottom: 20
    },
    camera: {
      flex: 1,
      borderRadius: 20
    },
    imageButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 50
    }
  }); 