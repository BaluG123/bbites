// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
//   Animated,
//   Dimensions,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {getPrelimsByFilter, getMainsByFilter} from '../api/client';

// const {width} = Dimensions.get('window');

// const MainsPrelimsQuestions = ({route}) => {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState('prelims');
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showAnswers, setShowAnswers] = useState({});
//   const [showHints, setShowHints] = useState({});
//   const [showSolutions, setShowSolutions] = useState({});
//   const [expandedQuestion, setExpandedQuestion] = useState(null);

//   const {subject, classNumber} = route.params;

//   useEffect(() => {
//     fetchQuestions();
//   }, [activeTab]);

//   const fetchQuestions = async () => {
//     try {
//       setLoading(true);
//       const response = await (activeTab === 'prelims'
//         ? getPrelimsByFilter(subject, classNumber)
//         : getMainsByFilter(subject, classNumber));
//       setQuestions(response.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch questions');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionSelect = (questionId, option) => {
//     setSelectedAnswers(prev => ({...prev, [questionId]: option}));
//     setShowAnswers(prev => ({...prev, [questionId]: true}));
//   };

//   const toggleHint = questionId => {
//     setShowHints(prev => ({...prev, [questionId]: !prev[questionId]}));
//   };

//   const toggleSolution = questionId => {
//     setShowSolutions(prev => ({...prev, [questionId]: !prev[questionId]}));
//   };

//   const renderPrelimsQuestion = ({item}) => {
//     const isAnswered = showAnswers[item.id];
//     const selectedOption = selectedAnswers[item.id];
//     const showHint = showHints[item.id];
//     const showSolution = showSolutions[item.id];

//     const getOptionStyle = option => {
//       if (!isAnswered) return styles.optionContainer;
//       if (option === item.correct_option && selectedOption === option) {
//         return [styles.optionContainer, styles.correctOption];
//       }
//       if (option === item.correct_option) {
//         return [styles.optionContainer, styles.correctOptionNotSelected];
//       }
//       if (selectedOption === option) {
//         return [styles.optionContainer, styles.wrongOption];
//       }
//       return styles.optionContainer;
//     };

//     const getOptionIcon = option => {
//       if (!isAnswered) return null;
//       if (option === item.correct_option && selectedOption === option) {
//         return (
//           <Icon
//             name="check-circle"
//             size={24}
//             color="#4CAF50"
//             style={styles.optionIcon}
//           />
//         );
//       }
//       if (option === item.correct_option) {
//         return (
//           <Icon
//             name="check-circle-outline"
//             size={24}
//             color="#4CAF50"
//             style={styles.optionIcon}
//           />
//         );
//       }
//       if (selectedOption === option) {
//         return (
//           <Icon
//             name="close-circle"
//             size={24}
//             color="#F44336"
//             style={styles.optionIcon}
//           />
//         );
//       }
//       return null;
//     };

//     return (
//       <View style={styles.questionCard}>
//         <View style={styles.questionHeader}>
//           <Text style={styles.questionNumber}>Question {item.id}</Text>
//           <View style={styles.difficultyContainer}>
//             {[...Array(5)].map((_, index) => (
//               <Icon
//                 key={index}
//                 name="star"
//                 size={16}
//                 color={index < item.difficulty ? '#FFC107' : '#E0E0E0'}
//                 style={{marginHorizontal: 2}}
//               />
//             ))}
//           </View>
//         </View>

//         <Text style={styles.questionText}>{item.question}</Text>

//         <View style={styles.optionsContainer}>
//           {['a', 'b', 'c', 'd'].map(option => (
//             <TouchableOpacity
//               key={option}
//               style={getOptionStyle(option)}
//               onPress={() => !isAnswered && handleOptionSelect(item.id, option)}
//               disabled={isAnswered}>
//               <View style={styles.optionContent}>
//                 <View style={styles.optionBadge}>
//                   <Text style={styles.optionBadgeText}>
//                     {option.toUpperCase()}
//                   </Text>
//                 </View>
//                 <Text style={styles.optionText}>
//                   {item[`option_${option}`]}
//                 </Text>
//                 {getOptionIcon(option)}
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View style={styles.actionButtons}>
//           <TouchableOpacity
//             style={styles.actionButton}
//             onPress={() => toggleHint(item.id)}>
//             <Icon name="lightbulb-outline" size={20} color="#2196F3" />
//             <Text style={styles.actionButtonText}>Hint</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.actionButton}
//             onPress={() => toggleSolution(item.id)}>
//             <Icon name="book-open-variant" size={20} color="#2196F3" />
//             <Text style={styles.actionButtonText}>Solution</Text>
//           </TouchableOpacity>
//         </View>

//         {showHint && (
//           <View style={styles.hintContainer}>
//             <Icon name="lightbulb-on" size={20} color="#FFC107" />
//             <Text style={styles.hintText}>{item.hint}</Text>
//           </View>
//         )}

//         {showSolution && (
//           <View style={styles.solutionContainer}>
//             <Icon name="book-open-page-variant" size={20} color="#4CAF50" />
//             <Text style={styles.solutionText}>{item.solution}</Text>
//           </View>
//         )}
//       </View>
//     );
//   };

//   const renderMainsQuestion = ({item}) => (
//     <TouchableOpacity
//       style={styles.questionCard}
//       onPress={() =>
//         setExpandedQuestion(expandedQuestion === item.id ? null : item.id)
//       }>
//       <View style={styles.questionHeader}>
//         <Text style={styles.questionText}>{item.question}</Text>
//         <View style={styles.marksBadge}>
//           <Text style={styles.marksText}>{item.marks} Marks</Text>
//         </View>
//       </View>

//       {expandedQuestion === item.id && (
//         <View style={styles.expandedContent}>
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Answer Structure</Text>
//             <Text style={styles.sectionContent}>{item.answer_structure}</Text>
//           </View>

//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Key Points</Text>
//             <Text style={styles.sectionContent}>{item.key_points}</Text>
//           </View>

//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Sample Answer</Text>
//             <Text style={styles.sectionContent}>{item.sample_answer}</Text>
//           </View>
//         </View>
//       )}
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#2196F3" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabContainer}>
//         {['prelims', 'mains'].map(tab => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tab, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText,
//               ]}>
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <FlatList
//         data={questions}
//         keyExtractor={item => item.id.toString()}
//         renderItem={
//           activeTab === 'prelims' ? renderPrelimsQuestion : renderMainsQuestion
//         }
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F6FA',
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     padding: 12,
//     backgroundColor: '#fff',
//     elevation: 3,
//   },
//   tab: {
//     flex: 1,
//     padding: 12,
//     alignItems: 'center',
//     borderRadius: 25,
//     marginHorizontal: 4,
//   },
//   activeTab: {
//     backgroundColor: '#2196F3',
//   },
//   tabText: {
//     fontSize: 16,
//     color: '#666',
//     fontWeight: '600',
//   },
//   activeTabText: {
//     color: '#fff',
//   },
//   listContainer: {
//     padding: 12,
//   },
//   questionCard: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 16,
//     marginBottom: 16,
//     elevation: 3,
//   },
//   questionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   questionNumber: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#2196F3',
//   },
//   difficultyContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   questionText: {
//     fontSize: 16,
//     color: '#2C3E50',
//     fontWeight: '500',
//     marginBottom: 20,
//     lineHeight: 24,
//   },
//   optionsContainer: {
//     marginBottom: 16,
//   },
//   optionContainer: {
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 12,
//     marginBottom: 12,
//     padding: 12,
//   },
//   optionContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   optionBadge: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#E3F2FD',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   optionBadgeText: {
//     color: '#2196F3',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   optionText: {
//     flex: 1,
//     fontSize: 14,
//     color: '#34495E',
//   },
//   optionIcon: {
//     marginLeft: 8,
//   },
//   correctOption: {
//     backgroundColor: '#E8F5E9',
//     borderColor: '#4CAF50',
//   },
//   wrongOption: {
//     backgroundColor: '#FFEBEE',
//     borderColor: '#F44336',
//   },
//   correctOptionNotSelected: {
//     borderColor: '#4CAF50',
//     borderStyle: 'dashed',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
//     paddingTop: 16,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 8,
//   },
//   actionButtonText: {
//     marginLeft: 8,
//     color: '#2196F3',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   hintContainer: {
//     backgroundColor: '#FFF8E1',
//     padding: 16,
//     borderRadius: 8,
//     marginTop: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   hintText: {
//     marginLeft: 12,
//     color: '#F57C00',
//     fontSize: 14,
//     flex: 1,
//   },
//   solutionContainer: {
//     backgroundColor: '#E8F5E9',
//     padding: 16,
//     borderRadius: 8,
//     marginTop: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   solutionText: {
//     marginLeft: 12,
//     color: '#2E7D32',
//     fontSize: 14,
//     flex: 1,
//   },
//   section: {
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2196F3',
//     marginBottom: 8,
//   },
//   sectionContent: {
//     fontSize: 14,
//     color: '#34495E',
//     lineHeight: 20,
//   },
// });

// export default MainsPrelimsQuestions;

import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  useGetPrelimsByFilterQuery,
  useGetMainsByFilterQuery,
} from '../services/api';

const MainsPrelimsQuestions = ({route}) => {
  const [activeTab, setActiveTab] = useState('prelims');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [showHints, setShowHints] = useState({});
  const [showSolutions, setShowSolutions] = useState({});
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const {subject, classNumber} = route.params;

  // RTK Query hooks
  const {
    data: prelimsData,
    isLoading: prelimsLoading,
    error: prelimsError,
  } = useGetPrelimsByFilterQuery(
    {subject, classNumber},
    {skip: activeTab !== 'prelims'},
  );

  const {
    data: mainsData,
    isLoading: mainsLoading,
    error: mainsError,
  } = useGetMainsByFilterQuery(
    {subject, classNumber},
    {skip: activeTab !== 'mains'},
  );

  const questions = activeTab === 'prelims' ? prelimsData : mainsData;
  const loading = activeTab === 'prelims' ? prelimsLoading : mainsLoading;
  const error = activeTab === 'prelims' ? prelimsError : mainsError;

  const handleOptionSelect = (questionId, option) => {
    setSelectedAnswers(prev => ({...prev, [questionId]: option}));
    setShowAnswers(prev => ({...prev, [questionId]: true}));
  };

  const toggleHint = questionId => {
    setShowHints(prev => ({...prev, [questionId]: !prev[questionId]}));
  };

  const toggleSolution = questionId => {
    setShowSolutions(prev => ({...prev, [questionId]: !prev[questionId]}));
  };

  const renderPrelimsQuestion = ({item}) => {
    const isAnswered = showAnswers[item.id];
    const selectedOption = selectedAnswers[item.id];
    const showHint = showHints[item.id];
    const showSolution = showSolutions[item.id];

    const getOptionStyle = option => {
      if (!isAnswered) return styles.optionContainer;
      if (option === item.correct_option && selectedOption === option) {
        return [styles.optionContainer, styles.correctOption];
      }
      if (option === item.correct_option) {
        return [styles.optionContainer, styles.correctOptionNotSelected];
      }
      if (selectedOption === option) {
        return [styles.optionContainer, styles.wrongOption];
      }
      return styles.optionContainer;
    };

    const getOptionIcon = option => {
      if (!isAnswered) return null;
      if (option === item.correct_option && selectedOption === option) {
        return (
          <Icon
            name="check-circle"
            size={24}
            color="#4CAF50"
            style={styles.optionIcon}
          />
        );
      }
      if (option === item.correct_option) {
        return (
          <Icon
            name="check-circle-outline"
            size={24}
            color="#4CAF50"
            style={styles.optionIcon}
          />
        );
      }
      if (selectedOption === option) {
        return (
          <Icon
            name="close-circle"
            size={24}
            color="#F44336"
            style={styles.optionIcon}
          />
        );
      }
      return null;
    };

    return (
      <View style={styles.questionCard}>
        <View style={styles.questionHeader}>
          <Text style={styles.questionNumber}>Question {item.id}</Text>
          <View style={styles.difficultyContainer}>
            {[...Array(5)].map((_, index) => (
              <Icon
                key={index}
                name="star"
                size={16}
                color={index < item.difficulty ? '#FFC107' : '#E0E0E0'}
                style={{marginHorizontal: 2}}
              />
            ))}
          </View>
        </View>

        <Text style={styles.questionText}>{item.question}</Text>

        <View style={styles.optionsContainer}>
          {['a', 'b', 'c', 'd'].map(option => (
            <TouchableOpacity
              key={option}
              style={getOptionStyle(option)}
              onPress={() => !isAnswered && handleOptionSelect(item.id, option)}
              disabled={isAnswered}>
              <View style={styles.optionContent}>
                <View style={styles.optionBadge}>
                  <Text style={styles.optionBadgeText}>
                    {option.toUpperCase()}
                  </Text>
                </View>
                <Text style={styles.optionText}>
                  {item[`option_${option}`]}
                </Text>
                {getOptionIcon(option)}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => toggleHint(item.id)}>
            <Icon name="lightbulb-outline" size={20} color="#2196F3" />
            <Text style={styles.actionButtonText}>Hint</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => toggleSolution(item.id)}>
            <Icon name="book-open-variant" size={20} color="#2196F3" />
            <Text style={styles.actionButtonText}>Solution</Text>
          </TouchableOpacity>
        </View>

        {showHint && (
          <View style={styles.hintContainer}>
            <Icon name="lightbulb-on" size={20} color="#FFC107" />
            <Text style={styles.hintText}>{item.hint}</Text>
          </View>
        )}

        {showSolution && (
          <View style={styles.solutionContainer}>
            <Icon name="book-open-page-variant" size={20} color="#4CAF50" />
            <Text style={styles.solutionText}>{item.solution}</Text>
          </View>
        )}
      </View>
    );
  };

  const renderMainsQuestion = ({item}) => (
    <TouchableOpacity
      style={styles.questionCard}
      onPress={() =>
        setExpandedQuestion(expandedQuestion === item.id ? null : item.id)
      }>
      <View style={styles.questionHeader}>
        <Text style={styles.questionText}>{item.question}</Text>
        <View style={styles.marksBadge}>
          <Text style={styles.marksText}>{item.marks} Marks</Text>
        </View>
      </View>

      {expandedQuestion === item.id && (
        <View style={styles.expandedContent}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Answer Structure</Text>
            <Text style={styles.sectionContent}>{item.answer_structure}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Points</Text>
            <Text style={styles.sectionContent}>{item.key_points}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sample Answer</Text>
            <Text style={styles.sectionContent}>{item.sample_answer}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Failed to fetch questions</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {['prelims', 'mains'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={questions}
        keyExtractor={item => item.id.toString()}
        renderItem={
          activeTab === 'prelims' ? renderPrelimsQuestion : renderMainsQuestion
        }
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default MainsPrelimsQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    elevation: 3,
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#2196F3',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  listContainer: {
    padding: 12,
  },
  questionCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2196F3',
  },
  difficultyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 16,
    color: '#2C3E50',
    fontWeight: '500',
    marginBottom: 20,
    lineHeight: 24,
  },
  optionsContainer: {
    marginBottom: 16,
  },
  optionContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionBadgeText: {
    color: '#2196F3',
    fontSize: 14,
    fontWeight: '600',
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    color: '#34495E',
  },
  optionIcon: {
    marginLeft: 8,
  },
  correctOption: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
  },
  wrongOption: {
    backgroundColor: '#FFEBEE',
    borderColor: '#F44336',
  },
  correctOptionNotSelected: {
    borderColor: '#4CAF50',
    borderStyle: 'dashed',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  actionButtonText: {
    marginLeft: 8,
    color: '#2196F3',
    fontSize: 14,
    fontWeight: '500',
  },
  hintContainer: {
    backgroundColor: '#FFF8E1',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hintText: {
    marginLeft: 12,
    color: '#F57C00',
    fontSize: 14,
    flex: 1,
  },
  solutionContainer: {
    backgroundColor: '#E8F5E9',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  solutionText: {
    marginLeft: 12,
    color: '#2E7D32',
    fontSize: 14,
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 14,
    color: '#34495E',
    lineHeight: 20,
  },
});
