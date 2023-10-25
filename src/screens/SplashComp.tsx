import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const SplashComp = ({ navigation }) => {
  useEffect(() => {
    // Wait for 3 seconds and then navigate to your main screen
    setTimeout(() => {
      navigation.replace('Navigation'); // Replace 'Main' with the name of your main screen
    }, 3000); // 3000 milliseconds (3 seconds)
  });

  return (
    <View style={styles.container}>
      <Image source={require('../components/logo.png')} style={styles.icon} />
      <Text style={styles.appName}>GovJob Guru</Text>
      <Text style={styles.welcomeText}>Welcome to App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100, // Set the width and height based on your icon's dimensions
    height: 100,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color:'black'
  },
  welcomeText: {
    fontSize: 18,
    marginTop: 8,
    color:'black'
  },
});

export default SplashComp;
