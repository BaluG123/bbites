import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SectionButton = ({title, subtitle, onPress}) => (
  <TouchableOpacity style={styles.sectionButton} onPress={onPress}>
    <Text style={styles.buttonTitle}>{title}</Text>
    {subtitle && <Text style={styles.buttonSubtitle}>{subtitle}</Text>}
  </TouchableOpacity>
);

const HomeScreen = ({navigation}) => {
  const sections = [
    {
      title: 'NCERT Chapters',
      subtitle: 'Comprehensive chapter-wise study material',
      route: 'Chapters',
    },
    {
      title: 'UPSC Syllabus',
      subtitle: 'Complete syllabus breakdown and analysis',
      route: 'UPSCSyllabusScreen',
    },
    {
      title: 'Current Affairs',
      subtitle: 'Daily updates, monthly compilations & analysis',
      route: 'CurrentAffairs',
    },
    {
      title: 'Previous Year Papers',
      subtitle: 'Question papers with detailed solutions',
      route: 'PDFListScreen',
    },
    {
      title: 'Daily Quiz',
      subtitle: 'Practice questions across all subjects',
      route: 'DailyQuiz',
    },
    {
      title: 'Answer Writing',
      subtitle: 'Practice essays and answer writing',
      route: 'AnswerWriting',
    },
    {
      title: 'Optional Subjects',
      subtitle: 'Subject-wise study materials and guidance',
      route: 'OptionalSubjects',
    },
    {
      title: 'Study Plans',
      subtitle: 'Customized study schedules and strategies',
      route: 'StudyPlans',
    },
    {
      title: 'News Analysis',
      subtitle: 'UPSC-focused daily news analysis',
      route: 'NewsAnalysis',
    },
    {
      title: 'Mock Tests',
      subtitle: 'Full-length practice tests with analysis',
      route: 'MockTests',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>UPSC Preparation</Text>
        <Text style={styles.headerSubtitle}>Your Complete Study Companion</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.sectionsContainer}>
          {sections.map((section, index) => (
            <SectionButton
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              onPress={() => navigation.navigate(section.route)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: wp('5%'),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: hp('0.5%'),
  },
  headerSubtitle: {
    fontSize: wp('3.5%'),
    color: '#666',
  },
  scrollView: {
    flex: 1,
  },
  sectionsContainer: {
    padding: wp('4%'),
  },
  sectionButton: {
    backgroundColor: '#fff',
    padding: wp('4%'),
    borderRadius: wp('3%'),
    marginBottom: hp('1.5%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#1a237e',
  },
  buttonTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: hp('0.5%'),
  },
  buttonSubtitle: {
    fontSize: wp('3.5%'),
    color: '#666',
  },
});

export default HomeScreen;
