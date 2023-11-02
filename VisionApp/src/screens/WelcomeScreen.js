import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Welcome = ({ setWelcome }) => {
  const goToMainApp = () => {
    setWelcome(false);
  }
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to NewVision</Text>
      <Image source={require("../../assets/NewVisionLogo.jpg") } style = {styles.image}/>   
      <Button title="Get Started" onPress={goToMainApp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    justifyContent: "center"
  },
  title: {
    fontSize: 30
  },
  image: {
    height: 400,
    width: 400,
  }
});

export default Welcome;