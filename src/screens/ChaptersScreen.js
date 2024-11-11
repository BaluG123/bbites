// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
//   TextInput,
//   RefreshControl,
//   ScrollView,
// } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {useGetChaptersQuery} from '../services/api'; // Update the import path as needed

// // SubjectTag component remains the same
// const SubjectTag = ({subject}) => {
//   const subjectColors = {
//     history: {
//       bg: '#ffebee',
//       text: '#c62828',
//     },
//     geography: {
//       bg: '#e8f5e9',
//       text: '#2e7d32',
//     },
//     economics: {
//       bg: '#fff3e0',
//       text: '#e65100',
//     },
//     science: {
//       bg: '#e3f2fd',
//       text: '#1565c0',
//     },
//     polity: {
//       bg: '#f3e5f5',
//       text: '#7b1fa2',
//     },
//     default: {
//       bg: '#f5f5f5',
//       text: '#424242',
//     },
//   };

//   const colors = subjectColors[subject.toLowerCase()] || subjectColors.default;

//   return (
//     <View style={[styles.subjectTag, {backgroundColor: colors.bg}]}>
//       <Text style={[styles.subjectTagText, {color: colors.text}]}>
//         {subject}
//       </Text>
//     </View>
//   );
// };

// // ClassFilterButton component remains the same
// const ClassFilterButton = ({classNumber, isSelected, onPress}) => (
//   <TouchableOpacity
//     style={[styles.filterButton, isSelected && styles.filterButtonActive]}
//     onPress={onPress}>
//     <Text
//       style={[
//         styles.filterButtonText,
//         isSelected && styles.filterButtonTextActive,
//       ]}>
//       Class {classNumber}
//     </Text>
//   </TouchableOpacity>
// );

// // ChapterCard component remains the same
// const ChapterCard = ({item, onPress}) => (
//   <TouchableOpacity style={styles.chapterCard} onPress={onPress}>
//     <View style={styles.chapterHeader}>
//       <View style={styles.subjectContainer}>
//         <SubjectTag subject={item.subject} />
//       </View>
//       <View style={styles.classNumberContainer}>
//         <Text style={styles.classNumber}>Class {item.class_number}</Text>
//       </View>
//     </View>
//     <Text style={styles.chapterName} numberOfLines={2}>
//       {item.name}
//     </Text>
//     <View style={styles.chapterFooter}>
//       <Text style={styles.chapterStats}>
//         Questions: {item.question_counts.prelims || 0}
//       </Text>
//       <Text style={styles.chapterStats}>Topics: {item.total_topics || 0}</Text>
//     </View>
//   </TouchableOpacity>
// );

// const ChaptersScreen = ({navigation}) => {
//   const [filteredChapters, setFilteredChapters] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedClass, setSelectedClass] = useState(null);

//   // Using RTK Query hook
//   const {
//     data: chapters = [],
//     isLoading,
//     isFetching,
//     isError,
//     refetch,
//   } = useGetChaptersQuery();

//   // Filter chapters when search query, selected class, or chapters change
//   useEffect(() => {
//     filterChapters();
//   }, [searchQuery, selectedClass, chapters]);

//   const filterChapters = () => {
//     let filtered = [...chapters];

//     if (searchQuery) {
//       filtered = filtered.filter(
//         chapter =>
//           chapter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           chapter.subject.toLowerCase().includes(searchQuery.toLowerCase()),
//       );
//     }

//     if (selectedClass) {
//       filtered = filtered.filter(
//         chapter => chapter.class_number === selectedClass,
//       );
//     }

//     setFilteredChapters(filtered);
//   };

//   const getUniqueClasses = () => {
//     return [...new Set(chapters.map(chapter => chapter.class_number))].sort();
//   };

//   if (isLoading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#1a237e" />
//       </View>
//     );
//   }

//   if (isError) {
//     return (
//       <View style={styles.centered}>
//         <Text style={styles.error}>Failed to fetch chapters</Text>
//         <TouchableOpacity style={styles.retryButton} onPress={refetch}>
//           <Text style={styles.retryButtonText}>Retry</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>NCERT Chapters</Text>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search chapters..."
//           placeholderTextColor="#666"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>

//       <View style={styles.filtersContainer}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <TouchableOpacity
//             style={[
//               styles.filterButton,
//               !selectedClass && styles.filterButtonActive,
//             ]}
//             onPress={() => setSelectedClass(null)}>
//             <Text
//               style={[
//                 styles.filterButtonText,
//                 !selectedClass && styles.filterButtonTextActive,
//               ]}>
//               All Classes
//             </Text>
//           </TouchableOpacity>
//           {getUniqueClasses().map(classNum => (
//             <ClassFilterButton
//               key={classNum}
//               classNumber={classNum}
//               isSelected={selectedClass === classNum}
//               onPress={() =>
//                 setSelectedClass(selectedClass === classNum ? null : classNum)
//               }
//             />
//           ))}
//         </ScrollView>
//       </View>

//       <FlatList
//         data={filteredChapters}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({item}) => (
//           <ChapterCard
//             item={item}
//             onPress={() =>
//               navigation.navigate('MainsPrelimsQuestions', {
//                 subject: item.subject,
//                 classNumber: item.class_number,
//               })
//             }
//           />
//         )}
//         refreshControl={
//           <RefreshControl
//             refreshing={isFetching}
//             onRefresh={refetch}
//             colors={['#1a237e']}
//           />
//         }
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#fff',
//     padding: wp('4%'),
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   headerTitle: {
//     fontSize: wp('6%'),
//     fontWeight: 'bold',
//     color: '#1a237e',
//     marginBottom: hp('1%'),
//   },
//   searchInput: {
//     backgroundColor: '#f5f5f5',
//     borderRadius: wp('2%'),
//     padding: wp('3%'),
//     fontSize: wp('4%'),
//     marginTop: hp('1%'),
//     color: '#000',
//   },
//   filtersContainer: {
//     padding: wp('2%'),
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   filterButton: {
//     paddingHorizontal: wp('4%'),
//     paddingVertical: hp('1%'),
//     borderRadius: wp('4%'),
//     marginRight: wp('2%'),
//     backgroundColor: '#f5f5f5',
//   },
//   filterButtonActive: {
//     backgroundColor: '#1a237e',
//   },
//   filterButtonText: {
//     color: '#666',
//     fontSize: wp('3.5%'),
//   },
//   filterButtonTextActive: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   chapterCard: {
//     backgroundColor: '#fff',
//     borderRadius: wp('3%'),
//     padding: wp('4%'),
//     marginBottom: hp('1.5%'),
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   chapterHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: hp('1%'),
//     width: '100%',
//   },
//   subjectContainer: {
//     flex: 3,
//     marginRight: wp('2%'),
//   },
//   classNumberContainer: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   chapterName: {
//     fontSize: wp('4.5%'),
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: hp('1%'),
//     lineHeight: wp('6%'),
//   },
//   chapterFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: hp('1%'),
//   },
//   chapterStats: {
//     fontSize: wp('3.5%'),
//     color: '#666',
//   },
//   subjectTag: {
//     paddingHorizontal: wp('2%'),
//     paddingVertical: hp('0.5%'),
//     borderRadius: wp('2%'),
//     alignSelf: 'flex-start',
//   },
//   subjectTagText: {
//     fontSize: wp('3%'),
//     fontWeight: '600',
//   },
//   classNumber: {
//     fontSize: wp('3.5%'),
//     color: '#424242',
//     fontWeight: '500',
//   },
//   listContainer: {
//     padding: wp('4%'),
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   error: {
//     color: '#d32f2f',
//     fontSize: wp('4%'),
//     marginBottom: hp('2%'),
//   },
//   retryButton: {
//     backgroundColor: '#1a237e',
//     paddingHorizontal: wp('6%'),
//     paddingVertical: hp('1%'),
//     borderRadius: wp('2%'),
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontSize: wp('4%'),
//     fontWeight: '600',
//   },
// });

// export default ChaptersScreen;

import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useGetChaptersQuery} from '../services/api';

const SubjectTag = ({subject}) => {
  const subjectColors = {
    history: {bg: '#ffebee', text: '#c62828'},
    geography: {bg: '#e8f5e9', text: '#2e7d32'},
    economics: {bg: '#fff3e0', text: '#e65100'},
    science: {bg: '#e3f2fd', text: '#1565c0'},
    polity: {bg: '#f3e5f5', text: '#7b1fa2'},
    default: {bg: '#f5f5f5', text: '#424242'},
  };

  const colors = subjectColors[subject.toLowerCase()] || subjectColors.default;

  return (
    <View style={[styles.subjectTag, {backgroundColor: colors.bg}]}>
      <Text style={[styles.subjectTagText, {color: colors.text}]}>
        {subject}
      </Text>
    </View>
  );
};

const ClassFilterButton = ({classNumber, isSelected, onPress}) => (
  <TouchableOpacity
    style={[styles.filterButton, isSelected && styles.filterButtonActive]}
    onPress={onPress}>
    <Text
      style={[
        styles.filterButtonText,
        isSelected && styles.filterButtonTextActive,
      ]}>
      Class {classNumber}
    </Text>
  </TouchableOpacity>
);

const ChapterCard = ({item, onPress}) => (
  <TouchableOpacity style={styles.chapterCard} onPress={onPress}>
    <View style={styles.chapterHeader}>
      <View style={styles.subjectContainer}>
        <SubjectTag subject={item.subject} />
      </View>
      <View style={styles.classNumberContainer}>
        <Text style={styles.classNumber}>Class {item.class_number}</Text>
      </View>
    </View>
    <Text style={styles.chapterName} numberOfLines={2}>
      {item.name}
    </Text>
    <View style={styles.chapterFooter}>
      <Text style={styles.chapterStats}>
        Questions: {item.question_counts.prelims || 0}
      </Text>
      <Text style={styles.chapterStats}>Topics: {item.total_topics || 0}</Text>
    </View>
  </TouchableOpacity>
);

const ChaptersScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);

  // Using RTK Query hook
  const {
    data: chapters = [],
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetChaptersQuery();

  // Memoize filtered chapters
  const filteredChapters = useMemo(() => {
    let filtered = [...chapters];

    if (searchQuery) {
      filtered = filtered.filter(
        chapter =>
          chapter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          chapter.subject.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedClass) {
      filtered = filtered.filter(
        chapter => chapter.class_number === selectedClass,
      );
    }

    return filtered;
  }, [searchQuery, selectedClass, chapters]);

  const getUniqueClasses = () => {
    return [...new Set(chapters.map(chapter => chapter.class_number))].sort();
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#1a237e" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>Failed to fetch chapters</Text>
        <TouchableOpacity style={styles.retryButton} onPress={refetch}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NCERT Chapters</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search chapters..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              !selectedClass && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedClass(null)}>
            <Text
              style={[
                styles.filterButtonText,
                !selectedClass && styles.filterButtonTextActive,
              ]}>
              All Classes
            </Text>
          </TouchableOpacity>
          {getUniqueClasses().map(classNum => (
            <ClassFilterButton
              key={classNum}
              classNumber={classNum}
              isSelected={selectedClass === classNum}
              onPress={() =>
                setSelectedClass(selectedClass === classNum ? null : classNum)
              }
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredChapters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ChapterCard
            item={item}
            onPress={() =>
              navigation.navigate('MainsPrelimsQuestions', {
                subject: item.subject,
                classNumber: item.class_number,
              })
            }
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={refetch}
            colors={['#1a237e']}
          />
        }
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#fff',
//     padding: wp('4%'),
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   headerTitle: {
//     fontSize: wp('6%'),
//     fontWeight: 'bold',
//     color: '#1a237e',
//     marginBottom: hp('1%'),
//   },
//   searchInput: {
//     backgroundColor: '#f5f5f5',
//     borderRadius: wp('2%'),
//     padding: wp('3%'),
//     fontSize: wp('4%'),
//     marginTop: hp('1%'),
//     color: '#000',
//   },
//   filtersContainer: {
//     padding: wp('2%'),
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   filterButton: {
//     paddingHorizontal: wp('4%'),
//     paddingVertical: hp('1%'),
//     borderRadius: wp('4%'),
//     marginRight: wp('2%'),
//     backgroundColor: '#f5f5f5',
//   },
//   filterButtonActive: {
//     backgroundColor: '#1a237e',
//   },
//   filterButtonText: {
//     color: '#666',
//     fontSize: wp('4%'),
//   },
//   filterButtonTextActive: {
//     color: '#fff',
//   },
//   listContainer: {
//     paddingBottom: hp('2%'),
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   error: {
//     color: 'red',
//     fontSize: wp('4%'),
//     marginBottom: hp('2%'),
//   },
//   retryButton: {
//     backgroundColor: '#1a237e',
//     paddingVertical: hp('1%'),
//     paddingHorizontal: wp('4%'),
//     borderRadius: wp('2%'),
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontSize: wp('4%'),
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: wp('4%'),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: hp('1%'),
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: wp('2%'),
    padding: wp('3%'),
    fontSize: wp('4%'),
    marginTop: hp('1%'),
    color: '#000',
  },
  filtersContainer: {
    padding: wp('2%'),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  filterButton: {
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('4%'),
    marginRight: wp('2%'),
    backgroundColor: '#f5f5f5',
  },
  filterButtonActive: {
    backgroundColor: '#1a237e',
  },
  filterButtonText: {
    color: '#666',
    fontSize: wp('3.5%'),
  },
  filterButtonTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  chapterCard: {
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    padding: wp('4%'),
    marginBottom: hp('1.5%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  chapterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1%'),
    width: '100%',
  },
  subjectContainer: {
    flex: 3,
    marginRight: wp('2%'),
  },
  classNumberContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  chapterName: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#000',
    marginBottom: hp('1%'),
    lineHeight: wp('6%'),
  },
  chapterFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
  chapterStats: {
    fontSize: wp('3.5%'),
    color: '#666',
  },
  subjectTag: {
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.5%'),
    borderRadius: wp('2%'),
    alignSelf: 'flex-start',
  },
  subjectTagText: {
    fontSize: wp('3%'),
    fontWeight: '600',
  },
  classNumber: {
    fontSize: wp('3.5%'),
    color: '#424242',
    fontWeight: '500',
  },
  listContainer: {
    padding: wp('4%'),
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: '#d32f2f',
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
  },
  retryButton: {
    backgroundColor: '#1a237e',
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('2%'),
  },
  retryButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: '600',
  },
});

export default ChaptersScreen;
