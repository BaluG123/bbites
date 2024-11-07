import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  Platform,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {getChapters} from '../api/client';

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

const SubjectTag = ({subject}) => (
  <View style={[styles.subjectTag, styles[`${subject.toLowerCase()}Tag`]]}>
    <Text style={styles.subjectTagText}>{subject}</Text>
  </View>
);

const ChapterCard = ({item, onPress}) => (
  <TouchableOpacity style={styles.chapterCard} onPress={onPress}>
    <View style={styles.chapterHeader}>
      <SubjectTag subject={item.subject} />
      <Text style={styles.classNumber}>Class {item.class_number}</Text>
    </View>
    <Text style={styles.chapterName}>{item.name}</Text>
    <View style={styles.chapterFooter}>
      <Text style={styles.chapterStats}>
        Questions: {item.question_counts.prelims || 0}
      </Text>
      <Text style={styles.chapterStats}>Topics: {item.total_topics || 0}</Text>
    </View>
  </TouchableOpacity>
);

const ChaptersScreen = ({navigation}) => {
  const [chapters, setChapters] = useState([]);
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    fetchChapters();
  }, []);

  useEffect(() => {
    filterChapters();
  }, [searchQuery, selectedClass, selectedSubject, chapters]);

  const fetchChapters = async () => {
    try {
      setLoading(true);
      const response = await getChapters();
      setChapters(response.data);
    } catch (err) {
      setError('Failed to fetch chapters');
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchChapters();
    setRefreshing(false);
  };

  const filterChapters = () => {
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

    if (selectedSubject) {
      filtered = filtered.filter(
        chapter => chapter.subject === selectedSubject,
      );
    }

    setFilteredChapters(filtered);
  };

  const getUniqueSubjects = () => {
    return [...new Set(chapters.map(chapter => chapter.subject))];
  };

  const getUniqueClasses = () => {
    return [...new Set(chapters.map(chapter => chapter.class_number))].sort();
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#1a237e" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchChapters}>
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
          placeholderTextColor={'black'}
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
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#1a237e']}
          />
        }
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

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
    width: wp('80%'),
  },
  chapterName: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#000',
    marginBottom: hp('1%'),
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
    backfaceVisibility: 'visible',
  },
  historyTag: {
    backgroundColor: '#ffebee',
  },
  geographyTag: {
    backgroundColor: '#e8f5e9',
  },
  economicsTag: {
    backgroundColor: '#fff3e0',
  },
  scienceTag: {
    backgroundColor: '#e3f2fd',
  },
  subjectTagText: {
    fontSize: wp('3%'),
    fontWeight: '600',
  },
  classNumber: {
    fontSize: wp('3.5%'),
    color: '#666',
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
