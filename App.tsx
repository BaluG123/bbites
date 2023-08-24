import { View, Text } from "react-native";
import React from "react";
import Navigation from "./src/navigation/navigator";

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    )
  }
}

export default App;

// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from 'react-native-splash-screen';
// import Navigation from './src/navigation/navigator';
// import SplashScreenComponent from './src/screens/SplashScreenComponent';

// const Stack = createStackNavigator();

// const App = () => {
//     useEffect(() => {
//         SplashScreen.hide();
//     }, [1000]);

//     return (
//         <NavigationContainer>
//             <Stack.Navigator headerMode="none">
//                 <Stack.Screen name="Splash" component={SplashScreenComponent} />
//                 <Stack.Screen name="Home" component={Navigation} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default App;
