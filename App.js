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
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import PDFListScreen from './src/screens/PDFListScreen';
import PDFViewerScreen from './src/screens/PDFViewerScreen';

const Stack = createNativeStackNavigator();

enableScreens(false);

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#1a237e',
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
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Chapters"
              component={ChaptersScreen}
              options={{title: 'Chapters Overview'}}
            />
            <Stack.Screen name="Subjects" component={SubjectsScreen} />
            <Stack.Screen
              name="MainsPrelimsQuestions"
              component={MainsPrelimsQuestions}
              options={{title: 'Mains & Prelims Questions'}}
            />
            <Stack.Screen
              name="UPSCSyllabusScreen"
              component={UPSCSyllabusScreen}
              options={{title: 'UPSC Syllabus'}}
            />
            <Stack.Screen
              name="CurrentAffairs"
              component={Currentaffairs}
              options={{title: 'Current Affairs'}}
            />
            <Stack.Screen
              name="PreviousYearPapers"
              component={PreviousYearPapers}
              options={{title: 'Previous Year Papers'}}
            />
            <Stack.Screen
              name="DailyQuiz"
              component={DailyQuiz}
              options={{title: 'Daily Quiz'}}
            />
            <Stack.Screen
              name="AnswerWriting"
              component={AnswerWriting}
              options={{title: 'Answer Writing Practice'}}
            />
            <Stack.Screen
              name="OptionalSubjects"
              component={OptionalSubjects}
              options={{title: 'Optional Subjects'}}
            />
            <Stack.Screen
              name="StudyPlans"
              component={StudyPlans}
              options={{title: 'Study Plans'}}
            />
            <Stack.Screen
              name="NewsAnalysis"
              component={NewsAnalysis}
              options={{title: 'News Analysis'}}
            />
            <Stack.Screen
              name="MockTests"
              component={MockTests}
              options={{title: 'Mock Tests'}}
            />
            <Stack.Screen
              name="PDFListScreen"
              component={PDFListScreen}
              options={{title: 'PDF List'}}
            />
            <Stack.Screen
              name="PDFViewerScreen"
              component={PDFViewerScreen}
              options={{title: 'PDF Detail'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
