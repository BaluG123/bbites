import { View, Text } from "react-native";
import React,{useEffect} from "react";
import Navigation from "./src/navigation/navigator";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import DrawerNavigator from "./src/navigation/Drawernavigation";
import SplashComp from "./src/screens/SplashComp";
const Stack = createStackNavigator();
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  
  useEffect(() => {
    // Hide the splash screen after 3 seconds
    setTimeout(() => {
        SplashScreen.hide();
    }, 1000); // 3000 milliseconds (3 seconds)
    
}, []);
   
    return (
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false, // Hide header for all screens
              }}
            >
                <Stack.Screen name="Splash" component={SplashComp} />
                <Stack.Screen name="Navigation" component={Navigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;


