// import { View, Text } from "react-native";
// import React from "react";
// import Navigation from "./src/navigation/navigator";

// class App extends React.Component {
//   constructor(props: any) {
//     super(props)
//   }
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Navigation />
//       </View>
//     )
//   }
// }

// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import ChaptersScreen from './src/screens/ChaptersScreen';
import SubjectsScreen from './src/screens/SubjectsScreen';
import MainsPrelimsQuestions from './src/screens/MainsPrelimsQuestions';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import UPSCSyllabusScreen from './src/screens/UPSCSyllabusScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chapters" component={ChaptersScreen} />
          <Stack.Screen name="Subjects" component={SubjectsScreen} />
          <Stack.Screen
            name="MainsPrelimsQuestions"
            component={MainsPrelimsQuestions}
          />
          <Stack.Screen
            name="UPSCSyllabusScreen"
            component={UPSCSyllabusScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
