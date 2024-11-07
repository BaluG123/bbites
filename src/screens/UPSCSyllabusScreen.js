import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import syllabus from '../../syllabus.json';

const ProgressBar = ({progress}) => (
  <View style={styles.progressContainer}>
    <View style={[styles.progressBar, {width: `${progress}%`}]} />
  </View>
);

const TabButton = ({title, isActive, onPress}) => (
  <TouchableOpacity
    style={[styles.tab, isActive && styles.activeTab]}
    onPress={onPress}
    activeOpacity={0.7}>
    <Text style={[styles.tabText, isActive && styles.activeTabText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const SyllabusCard = ({
  title,
  description,
  subtopics,
  preparation_tips,
  onPress,
  isExpanded,
}) => (
  <View style={styles.card}>
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.cardTouchable}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.expandIcon}>{isExpanded ? '↑' : '↓'}</Text>
      </View>

      {isExpanded && (
        <View style={styles.expandedContent}>
          <Text style={styles.cardDescription}>{description}</Text>

          {subtopics?.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Subtopics:</Text>
              {subtopics.map((subtopic, index) => (
                <Text key={index} style={styles.subtopicItem}>
                  • {subtopic}
                </Text>
              ))}
            </View>
          )}

          {preparation_tips?.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Preparation Tips:</Text>
              {preparation_tips.map((tip, index) => (
                <Text key={index} style={styles.tipItem}>
                  • {tip}
                </Text>
              ))}
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  </View>
);

const ExamStageCard = ({stage, progress}) => (
  <View style={styles.examStageCard}>
    <Text style={styles.stageName}>{stage.name}</Text>
    <Text style={styles.stageDescription}>{stage.description}</Text>
    <ProgressBar progress={progress} />
  </View>
);

const UPSCSyllabusScreen = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const insets = useSafeAreaInsets();

  const renderOverviewSection = () => (
    <View style={styles.overviewContainer}>
      <Text style={styles.overviewTitle}>Civil Services Examination</Text>
      <Text style={styles.overviewDescription}>
        {syllabus.introduction.description}
      </Text>

      <Text style={styles.sectionTitle}>Examination Stages</Text>
      {syllabus.introduction.examStages.map((stage, index) => (
        <ExamStageCard
          key={stage.name}
          stage={stage}
          progress={100 - index * 20}
        />
      ))}

      <Text style={styles.sectionTitle}>Available Services</Text>
      <View style={styles.servicesGrid}>
        {syllabus.introduction.careers.map(service => (
          <View key={service} style={styles.serviceItem}>
            <Text style={styles.serviceText}>{service}</Text>
          </View>
        ))}
      </View>
      {/* <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Eligibility</Text>
        <View>
          <Text>
            Nationality: {syllabus.introduction.eligibility.nationality}
          </Text>
          <Text>Age:</Text>
          <View>
            <Text>
              General: {syllabus.introduction.eligibility.age.general}
            </Text>
            <Text>OBC: {syllabus.introduction.eligibility.age.obc}</Text>
            <Text>SC/ST: {syllabus.introduction.eligibility.age.sc_st}</Text>
          </View>
          <Text>Attempts:</Text>
          <View>
            <Text>
              General: {syllabus.introduction.eligibility.attempts.general}
            </Text>
            <Text>OBC: {syllabus.introduction.eligibility.attempts.obc}</Text>
            <Text>
              SC/ST: {syllabus.introduction.eligibility.attempts.sc_st}
            </Text>
          </View>
          <Text>Education: {syllabus.introduction.eligibility.education}</Text>
        </View>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Important Dates</Text>
        <View>
          <Text>
            Notification: {syllabus.introduction.importantDates.notification}
          </Text>
          <Text>
            Preliminary Exam: {syllabus.introduction.importantDates.preliminary}
          </Text>
          <Text>Mains Exam: {syllabus.introduction.importantDates.mains}</Text>
          <Text>
            Interview: {syllabus.introduction.importantDates.interview}
          </Text>
        </View>
      </View> */}

      <View>
        <Text style={styles.sectionTitle}>Eligibility</Text>
        <View style={styles.eligibilityContainer}>
          <Text style={styles.eligibilityText}>
            Nationality: {syllabus.introduction.eligibility.nationality}
          </Text>
          <Text style={styles.sectionTitle}>Age</Text>
          <View>
            <Text style={styles.eligibilityText}>
              General: {syllabus.introduction.eligibility.age.general}
            </Text>
            <Text style={styles.eligibilityText}>
              OBC: {syllabus.introduction.eligibility.age.obc}
            </Text>
            <Text style={styles.eligibilityText}>
              SC/ST: {syllabus.introduction.eligibility.age.sc_st}
            </Text>
          </View>
          <Text style={styles.sectionTitle}>Attempts</Text>
          <View>
            <Text style={styles.eligibilityText}>
              General: {syllabus.introduction.eligibility.attempts.general}
            </Text>
            <Text style={styles.eligibilityText}>
              OBC: {syllabus.introduction.eligibility.attempts.obc}
            </Text>
            <Text style={styles.eligibilityText}>
              SC/ST: {syllabus.introduction.eligibility.attempts.sc_st}
            </Text>
          </View>
          <Text style={styles.eligibilityText}>
            Education: {syllabus.introduction.eligibility.education}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Important Dates</Text>
        <View style={styles.importantDatesContainer}>
          <Text style={styles.importantDatesText}>
            Notification: {syllabus.introduction.importantDates.notification}
          </Text>
          <Text style={styles.importantDatesText}>
            Preliminary Exam: {syllabus.introduction.importantDates.preliminary}
          </Text>
          <Text style={styles.importantDatesText}>
            Mains Exam: {syllabus.introduction.importantDates.mains}
          </Text>
          <Text style={styles.importantDatesText}>
            Interview: {syllabus.introduction.importantDates.interview}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderSyllabusSection = () => (
    <View style={styles.syllabusContainer}>
      {Object.entries(syllabus.preliminaryExam).map(([key, value]) => {
        if (key === 'overview') return null;

        return value.topics?.map(topic => (
          <SyllabusCard
            key={topic.id}
            title={topic.name}
            description={topic.description}
            subtopics={topic.subtopics}
            preparation_tips={topic.preparation_tips}
            isExpanded={expandedSection === topic.id}
            onPress={() =>
              setExpandedSection(expandedSection === topic.id ? null : topic.id)
            }
          />
        ));
      })}
    </View>
  );

  const renderResourcesSection = () => (
    <View style={styles.resourcesContainer}>
      {Object.entries(syllabus.preparation_resources).map(
        ([category, items]) => (
          <View key={category} style={styles.resourceCategory}>
            <Text style={styles.resourceTitle}>{category.toUpperCase()}</Text>
            {items.map(item => (
              <View key={item} style={styles.resourceItem}>
                <Text style={styles.resourceText}>• {item}</Text>
              </View>
            ))}
          </View>
        ),
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        {/* <Text style={styles.headerTitle}>UPSC Guide</Text> */}
        <View style={styles.tabContainer}>
          {['overview', 'syllabus', 'resources'].map(tab => (
            <TabButton
              key={tab}
              title={tab.charAt(0).toUpperCase() + tab.slice(1)}
              isActive={activeTab === tab}
              onPress={() => setActiveTab(tab)}
            />
          ))}
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        {activeTab === 'overview' && renderOverviewSection()}
        {activeTab === 'syllabus' && renderSyllabusSection()}
        {activeTab === 'resources' && renderResourcesSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Add padding only for Android
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
    justifyContent: 'flex-end',
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
    fontSize: wp('5%'),
    fontWeight: 'bold',
    position: 'absolute',
    bottom: hp('6%'),
    left: wp('5%'),
    color: 'black',
    paddingVertical: hp('1%'),
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingBottom: hp('1%'),
    justifyContent: 'space-around',
    paddingVertical: hp('1%'),
  },
  scrollView: {
    flex: 1,
  },
  tab: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('5%'),
    minWidth: wp('25%'),
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    color: 'black',
    fontSize: wp('3.5%'),
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  overviewContainer: {
    padding: wp('5%'),
  },
  overviewTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: 'black',
  },
  overviewDescription: {
    fontSize: wp('4%'),
    color: '#666',
    lineHeight: hp('3%'),
    marginBottom: hp('2%'),
  },
  sectionTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
    marginBottom: hp('1.5%'),
    color: 'black',
  },
  examStageCard: {
    backgroundColor: '#fff',
    padding: wp('4%'),
    borderRadius: wp('3%'),
    marginBottom: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stageName: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    marginBottom: hp('0.5%'),
    color: 'black',
  },
  stageDescription: {
    fontSize: wp('3.5%'),
    color: '#666',
    marginBottom: hp('1%'),
  },
  progressContainer: {
    height: hp('0.5%'),
    backgroundColor: '#eee',
    borderRadius: wp('0.5%'),
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007AFF',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
  serviceItem: {
    width: wp('44%'),
    marginBottom: hp('1%'),
  },
  serviceText: {
    backgroundColor: '#fff',
    padding: wp('3%'),
    borderRadius: wp('2%'),
    fontSize: wp('3.5%'),
    color: '#444',
    textAlign: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: wp('4%'),
    marginHorizontal: wp('5%'),
    marginBottom: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTouchable: {
    padding: wp('4%'),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    flex: 1,
    color: 'black',
    marginRight: wp('2%'),
  },
  expandIcon: {
    fontSize: wp('5%'),
    color: '#007AFF',
  },
  expandedContent: {
    marginTop: hp('1%'),
  },
  section: {
    marginTop: hp('1.5%'),
  },
  subtopicItem: {
    fontSize: wp('3.5%'),
    color: '#000',
    marginBottom: hp('0.6%'),
    paddingLeft: wp('2.5%'),
    lineHeight: hp('2.5%'),
  },
  tipItem: {
    fontSize: wp('3.5%'),
    color: '#000',
    marginBottom: hp('0'),
    fontSize: wp('4%'),
    fontStyle: 'italic',
  },
  cardDescription: {
    fontSize: 14,
    color: '#000',
    marginBottom: 15,
    lineHeight: 20,
  },
  resourcesContainer: {
    padding: 20,
  },
  resourceCategory: {
    marginBottom: 20,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 10,
  },
  resourceItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  resourceText: {
    fontSize: 14,
    color: '#000',
  },
  scrollViewContent: {
    paddingTop: hp('1%'), // Add small padding to the content
  },
  overviewContainer: {
    padding: wp('5%'),
    paddingTop: hp('1%'), // Reduced top padding
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: 'black',
  },
  eligibilityContainer: {
    marginBottom: hp('2%'),
  },
  importantDatesContainer: {
    marginBottom: hp('2%'),
  },
  eligibilityText: {
    backgroundColor: '#fff',
    padding: wp('3%'),
    borderRadius: wp('2%'),
    fontSize: wp('3.5%'),
    color: '#444',
    textAlign: 'left',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: hp('1%'),
  },
  importantDatesText: {
    backgroundColor: '#fff',
    padding: wp('3%'),
    borderRadius: wp('2%'),
    fontSize: wp('3.5%'),
    color: '#444',
    textAlign: 'left',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: hp('1%'),
  },
});
export default UPSCSyllabusScreen;
