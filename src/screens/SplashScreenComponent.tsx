import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenComponent = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
            navigation.navigate('Home');
        }, 1000); // Adjust the time (in milliseconds) for how long you want the splash screen to appear
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('https://images.unsplash.com/photo-1560807707-8cc77767d783')} // Replace with the actual path
                style={{ flex: 1 }}
            />
        </View>
    );
};

export default SplashScreenComponent;
