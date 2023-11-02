import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import CameraUI from './src/screens/CameraPage';
import Continue from './src/screens/ContinueScreen';
import ReadOut from './src/screens/DisplayCaption';
import Welcome from './src/screens/WelcomeScreen';
import { LogBox } from 'react-native';

export default function App () {
  LogBox.ignoreAllLogs()
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState(null);
  const [welcome, setWelcome] = useState(true);
  
  if (welcome) {
    return (
      <Welcome setWelcome = {setWelcome}/>
    )
  } else {
    if (!caption && !image) {
      return (
        <CameraUI setImage={setImage}/>
      )
    } else if (!caption && image) {
      return (
        <Continue image = {image} setImage={setImage} setCaption={setCaption} />
      )
    } else {
      return (
        <ReadOut caption = {caption} setImage = {setImage} setCaption = {setCaption} />
      )
    }
  }
};


