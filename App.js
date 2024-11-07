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
import Currentaffairs from './src/screens/currentaffairsold';
import PreviousYearPapers from './src/screens/PreviousYearPapers';
import DailyQuiz from './src/screens/DailyQuiz';
import AnswerWriting from './src/screens/AnswerWriting';
import OptionalSubjects from './src/screens/OptionalSubjects';
import StudyPlans from './src/screens/StudyPlans';
import NewsAnalysis from './src/screens/NewsAnalysis';
import MockTests from './src/screens/MockTests';

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
          <Stack.Screen name="CurrentAffairs" component={Currentaffairs} />
          <Stack.Screen
            name="PreviousYearPapers"
            component={PreviousYearPapers}
          />
          <Stack.Screen name="DailyQuiz" component={DailyQuiz} />
          <Stack.Screen name="AnswerWriting" component={AnswerWriting} />
          <Stack.Screen name="OptionalSubjects" component={OptionalSubjects} />
          <Stack.Screen name="StudyPlans" component={StudyPlans} />
          <Stack.Screen name="NewsAnalysis" component={NewsAnalysis} />
          <Stack.Screen name="MockTests" component={MockTests} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
