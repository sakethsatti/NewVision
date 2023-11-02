import * as React from 'react';
import {  View, StyleSheet, Text} from 'react-native';
import * as Speech from 'expo-speech';
import Button from '../components/Button';
import { LogBox } from 'react-native';

export default function ReadOut({ caption, setImage, setCaption  }) {
  LogBox.ignoreAllLogs()
  const speak = () => {
    Speech.speak(caption, {
      iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
      rate: 0.5,
    });
  };

  const newImage = () => {
    setImage(null);
    setCaption(null);
  }

  return (
    <View style={styles.container}>
        <View style = {{flex:4.5}}>
            <Text style = {styles.caption}>{caption}</Text>
        </View>
        <View style = {styles.button}>
            <Button style = {styles.buttonSettings} icon="sound" title= {"Play"} onPress={speak}  />
        </View>
        <View style = {styles.button}>
            <Button style = {styles.buttonSettings} icon = "retweet" title= {"New Image"} onPress={newImage} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,  
      justifyContent: 'space-between',
      backgroundColor: "#064E40"
    },
    caption: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: "#808080",
        marginTop: 20,
        marginHorizontal: 20
    },
    button: {
        margin:30,
        flex: 1,
        backgroundColor: '#ADD8E6',
        alightItems: 'center'
    },
    buttonSettings: {
        height: 700,
        width: 850,
        alightItems: 'center'
    },
    
  });