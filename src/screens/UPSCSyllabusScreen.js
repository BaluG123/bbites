// import React, {useState, useRef} from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   Animated,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   SafeAreaView,
// } from 'react-native';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import syllabus from '../../syllabus.json';

// // Separate components into their own sections for better organization
// const ProgressBar = ({progress}) => {
//   const width = useRef(new Animated.Value(0)).current;

//   React.useEffect(() => {
//     Animated.timing(width, {
//       toValue: progress,
//       duration: 800,
//       useNativeDriver: false,
//     }).start();
//   }, [progress]);

//   return (
//     <View style={styles.progressContainer}>
//       <Animated.View
//         style={[
//           styles.progressBar,
//           {
//             width: width.interpolate({
//               inputRange: [0, 100],
//               outputRange: ['0%', '100%'],
//             }),
//           },
//         ]}
//       />
//     </View>
//   );
// };

// const TabButton = ({title, isActive, onPress}) => (
//   <TouchableOpacity
//     style={[styles.tab, isActive && styles.activeTab]}
//     onPress={onPress}
//     activeOpacity={0.7}>
//     <Text style={[styles.tabText, isActive && styles.activeTabText]}>
//       {title}
//     </Text>
//   </TouchableOpacity>
// );

// const SyllabusCard = ({
//   title,
//   description,
//   subtopics,
//   preparation_tips,
//   onPress,
//   isExpanded,
// }) => {
//   const scale = useRef(new Animated.Value(1)).current;
//   const rotation = useRef(new Animated.Value(0)).current;

//   React.useEffect(() => {
//     Animated.parallel([
//       Animated.spring(scale, {
//         toValue: isExpanded ? 0.98 : 1,
//         friction: 8,
//         useNativeDriver: true,
//       }),
//       Animated.timing(rotation, {
//         toValue: isExpanded ? 1 : 0,
//         duration: 300,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, [isExpanded]);

//   const spin = rotation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '180deg'],
//   });

//   return (
//     <Animated.View
//       style={[
//         styles.card,
//         {
//           transform: [{scale}],
//         },
//       ]}>
//       <TouchableOpacity
//         onPress={onPress}
//         activeOpacity={0.7}
//         style={styles.cardTouchable}>
//         <View style={styles.cardHeader}>
//           <Text style={styles.cardTitle} numberOfLines={2}>
//             {title}
//           </Text>
//           <Animated.View style={{transform: [{rotate: spin}]}}>
//             <Text style={styles.expandIcon}>↓</Text>
//           </Animated.View>
//         </View>

//         {isExpanded && (
//           <View style={styles.expandedContent}>
//             <Text style={styles.cardDescription}>{description}</Text>

//             {subtopics?.length > 0 && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Subtopics:</Text>
//                 {subtopics.map((subtopic, index) => (
//                   <Text key={index} style={styles.subtopicItem}>
//                     • {subtopic}
//                   </Text>
//                 ))}
//               </View>
//             )}

//             {preparation_tips?.length > 0 && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Preparation Tips:</Text>
//                 {preparation_tips.map((tip, index) => (
//                   <Text key={index} style={styles.tipItem}>
//                     • {tip}
//                   </Text>
//                 ))}
//               </View>
//             )}
//           </View>
//         )}
//       </TouchableOpacity>
//     </Animated.View>
//   );
// };

// const ExamStageCard = ({stage, progress}) => (
//   <Animated.View
//     entering={Animated.spring({
//       duration: 400,
//       useNativeDriver: true,
//     })}
//     style={styles.examStageCard}>
//     <Text style={styles.stageName}>{stage.name}</Text>
//     <Text style={styles.stageDescription}>{stage.description}</Text>
//     <ProgressBar progress={progress} />
//   </Animated.View>
// );

// const UPSCSyllabusScreen = () => {
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [activeTab, setActiveTab] = useState('overview');
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const insets = useSafeAreaInsets();

//   const headerHeight = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [hp('25%'), hp('8%')], // Reduced from 25% to 20%
//     extrapolate: 'clamp',
//   });

//   const headerTitleOpacity = scrollY.interpolate({
//     inputRange: [0, 50, 100],
//     outputRange: [0, 0.5, 1],
//     extrapolate: 'clamp',
//   });

//   const renderOverviewSection = () => (
//     <View style={styles.overviewContainer}>
//       <Text style={styles.overviewTitle}>Civil Services Examination</Text>
//       <Text style={styles.overviewDescription}>
//         {syllabus.introduction.description}
//       </Text>

//       <Text style={styles.sectionTitle}>Examination Stages</Text>
//       {syllabus.introduction.examStages.map((stage, index) => (
//         <ExamStageCard
//           key={stage.name}
//           stage={stage}
//           progress={100 - index * 20}
//         />
//       ))}

//       <Text style={styles.sectionTitle}>Available Services</Text>
//       <View style={styles.servicesGrid}>
//         {syllabus.introduction.careers.map((service, index) => (
//           <Animated.View
//             key={service}
//             entering={Animated.spring({
//               delay: index * 100,
//               duration: 400,
//               useNativeDriver: true,
//             })}
//             style={styles.serviceItem}>
//             <Text style={styles.serviceText}>{service}</Text>
//           </Animated.View>
//         ))}
//       </View>
//     </View>
//   );

//   const renderSyllabusSection = () => (
//     <View style={styles.syllabusContainer}>
//       {Object.entries(syllabus.preliminaryExam).map(([key, value]) => {
//         if (key === 'overview') return null;

//         return value.topics?.map(topic => (
//           <SyllabusCard
//             key={topic.id}
//             title={topic.name}
//             description={topic.description}
//             subtopics={topic.subtopics}
//             preparation_tips={topic.preparation_tips}
//             isExpanded={expandedSection === topic.id}
//             onPress={() =>
//               setExpandedSection(expandedSection === topic.id ? null : topic.id)
//             }
//           />
//         ));
//       })}
//     </View>
//   );

//   const renderResourcesSection = () => (
//     <View style={styles.resourcesContainer}>
//       {Object.entries(syllabus.preparation_resources).map(
//         ([category, items]) => (
//           <View key={category} style={styles.resourceCategory}>
//             <Text style={styles.resourceTitle}>{category.toUpperCase()}</Text>
//             {items.map((item, index) => (
//               <Animated.View
//                 key={item}
//                 entering={Animated.spring({
//                   toValue: 1,
//                   delay: index * 100,
//                   duration: 400,
//                   useNativeDriver: true,
//                 })}
//                 style={styles.resourceItem}>
//                 <Text style={styles.resourceText}>• {item}</Text>
//               </Animated.View>
//             ))}
//           </View>
//         ),
//       )}
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#fff" />
//       <Animated.View style={[styles.header, {height: headerHeight}]}>
//         <Animated.Text
//           style={[styles.headerTitle, {opacity: headerTitleOpacity}]}>
//           UPSC Guide
//         </Animated.Text>
//         <View style={styles.tabContainer}>
//           {['overview', 'syllabus', 'resources'].map(tab => (
//             <TabButton
//               key={tab}
//               title={tab.charAt(0).toUpperCase() + tab.slice(1)}
//               isActive={activeTab === tab}
//               onPress={() => setActiveTab(tab)}
//             />
//           ))}
//         </View>
//       </Animated.View>

//       <Animated.ScrollView
//         style={styles.scrollView}
//         contentContainerStyle={styles.scrollViewContent}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollY}}}],
//           {useNativeDriver: false},
//         )}
//         scrollEventThrottle={16}
//         showsVerticalScrollIndicator={false}>
//         {activeTab === 'overview' && renderOverviewSection()}
//         {activeTab === 'syllabus' && renderSyllabusSection()}
//         {activeTab === 'resources' && renderResourcesSection()}
//       </Animated.ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Add padding only for Android
//   },
//   header: {
//     backgroundColor: '#fff',
//     paddingHorizontal: wp('5%'),
//     justifyContent: 'flex-end',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   headerTitle: {
//     fontSize: wp('5%'),
//     fontWeight: 'bold',
//     position: 'absolute',
//     bottom: hp('6%'),
//     left: wp('5%'),
//     color: 'black',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     paddingBottom: hp('1%'),
//     justifyContent: 'space-around',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   tab: {
//     paddingHorizontal: wp('5%'),
//     paddingVertical: hp('1%'),
//     borderRadius: wp('5%'),
//     minWidth: wp('25%'),
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#007AFF',
//   },
//   tabText: {
//     color: 'black',
//     fontSize: wp('3.5%'),
//   },
//   activeTabText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   overviewContainer: {
//     padding: wp('5%'),
//   },
//   overviewTitle: {
//     fontSize: wp('6%'),
//     fontWeight: 'bold',
//     marginBottom: hp('1%'),
//     color: 'black',
//   },
//   overviewDescription: {
//     fontSize: wp('4%'),
//     color: '#666',
//     lineHeight: hp('3%'),
//     marginBottom: hp('2%'),
//   },
//   sectionTitle: {
//     fontSize: wp('5%'),
//     fontWeight: 'bold',
//     marginTop: hp('2%'),
//     marginBottom: hp('1.5%'),
//     color: 'black',
//   },
//   examStageCard: {
//     backgroundColor: '#fff',
//     padding: wp('4%'),
//     borderRadius: wp('3%'),
//     marginBottom: hp('1%'),
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   stageName: {
//     fontSize: wp('4.5%'),
//     fontWeight: '600',
//     marginBottom: hp('0.5%'),
//     color: 'black',
//   },
//   stageDescription: {
//     fontSize: wp('3.5%'),
//     color: '#666',
//     marginBottom: hp('1%'),
//   },
//   progressContainer: {
//     height: hp('0.5%'),
//     backgroundColor: '#eee',
//     borderRadius: wp('0.5%'),
//     overflow: 'hidden',
//   },
//   progressBar: {
//     height: '100%',
//     backgroundColor: '#007AFF',
//   },
//   servicesGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginTop: hp('1%'),
//   },
//   serviceItem: {
//     width: wp('44%'),
//     marginBottom: hp('1%'),
//   },
//   serviceText: {
//     backgroundColor: '#fff',
//     padding: wp('3%'),
//     borderRadius: wp('2%'),
//     fontSize: wp('3.5%'),
//     color: '#444',
//     textAlign: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: wp('4%'),
//     marginHorizontal: wp('5%'),
//     marginBottom: hp('1%'),
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardTouchable: {
//     padding: wp('4%'),
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   cardTitle: {
//     fontSize: wp('4.5%'),
//     fontWeight: '600',
//     flex: 1,
//     color: 'black',
//     marginRight: wp('2%'),
//   },
//   expandIcon: {
//     fontSize: wp('5%'),
//     color: '#007AFF',
//   },
//   expandedContent: {
//     marginTop: hp('1%'),
//   },
//   section: {
//     marginTop: hp('1.5%'),
//   },
//   subtopicItem: {
//     fontSize: wp('3.5%'),
//     color: '#000',
//     marginBottom: hp('0.6%'),
//     paddingLeft: wp('2.5%'),
//     lineHeight: hp('2.5%'),
//   },
//   tipItem: {
//     fontSize: wp('3.5%'),
//     color: '#000',
//     marginBottom: hp('0'),
//     fontSize: wp('4%'),
//     fontStyle: 'italic',
//   },
//   cardDescription: {
//     fontSize: 14,
//     color: '#000',
//     marginBottom: 15,
//     lineHeight: 20,
//   },
//   resourcesContainer: {
//     padding: 20,
//   },
//   resourceCategory: {
//     marginBottom: 20,
//   },
//   resourceTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#007AFF',
//     marginBottom: 10,
//   },
//   resourceItem: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   resourceText: {
//     fontSize: 14,
//     color: '#000',
//   },
//   scrollViewContent: {
//     paddingTop: hp('1%'), // Add small padding to the content
//   },
// overviewContainer: {
//   padding: wp('5%'),
//   paddingTop: hp('1%'), // Reduced top padding
// },
// });

// export default UPSCSyllabusScreen;

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
        <Text style={styles.headerTitle}>UPSC Guide</Text>
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
  },
  tabContainer: {
    flexDirection: 'row',
    paddingBottom: hp('1%'),
    justifyContent: 'space-around',
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
});
export default UPSCSyllabusScreen;
