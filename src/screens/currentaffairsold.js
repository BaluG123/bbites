// import React, {useState, useEffect} from 'react';
// import {FlatList, Text, View, ActivityIndicator} from 'react-native';
// import {styles} from '../components/styles';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import axios from 'axios';

// const Currentaffairs = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setLoading] = useState(true);
//   const [hasMoreQuestions, setHasMoreQuestions] = useState(true);
//   const [error, setError] = useState(null);
//   const [loadingHeader, setLoadingHeader] = useState(true);

//   useEffect(() => {
//     axios
//       .get(
//         `https://CompetativeQuiz.pythonanywhere.com/quiz/Currentapi/?page=${page}&page_size=10`,
//       )
//       .then(response => {
//         const newData = response.data.results.filter(question => {
//           return !data.some(
//             existingQuestion => existingQuestion.id === question.id,
//           );
//         });
//         setData([...data, ...newData]);
//         setLoading(false);
//         setLoadingHeader(false);
//         setHasMoreQuestions(newData.length < response.data.count);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//         setLoadingHeader(false);
//       });
//   }, [page]);

//   const renderFooter = () => {
//     if (!isLoading) return null;
//     return (
//       <View style={{paddingVertical: 20}}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   };

//   const Header = () => {
//     if (loadingHeader) {
//       return (
//         <View style={{paddingVertical: 20}}>
//           <ActivityIndicator size="large" />
//         </View>
//       );
//     }
//     // return (
//     //     <View style={{ paddingVertical: 0 }}>
//     //         <Text>knowledge is power</Text>
//     //     </View>
//     // );
//   };

//   const renderEndMessage = () => {
//     if (!hasMoreQuestions) {
//       return (
//         <View style={{padding: 16}}>
//           <Text style={{color: 'black'}}>
//             No more questions available. More questions are coming soon!
//           </Text>
//         </View>
//       );
//     }
//     return null;
//   };

//   const handleLoadMore = () => {
//     if (!isLoading && hasMoreQuestions) {
//       setPage(page + 1);
//       setLoading(true);
//     }
//   };

//   return (
//     <View>
//       <Text
//         style={{
//           color: 'black',
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginTop: 350,
//           marginLeft: 50,
//         }}>
//         App is in progress , thank you for your patience ,Will comeback soon
//       </Text>
//     </View>
//     // <FlatList
//     //     data={data}
//     //     renderItem={({ item, index }) =>
//     //         <View style={styles.container}>
//     //             <Text style={styles.questionText}>{`${index + 1}. ${item.question}`}</Text>
//     //             <Text style={styles.answerText}><MaterialIcons name="arrow-right-alt" size={30} style={styles.arrowIcon} />{item.answer}</Text>
//     //         </View>
//     //     }
//     //     keyExtractor={(item) => item.id.toString()}
//     //     onEndReached={handleLoadMore}
//     //     onEndReachedThreshold={0.5}
//     //     ListHeaderComponent={<Header />}
//     //     ListFooterComponent={renderFooter}
//     //     ListFooterComponent={renderEndMessage}
//     // />
//   );
// };

// export default Currentaffairs;

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Currentaffairs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>This feature is under development.</Text>
      <Text style={styles.subMessage}>
        We're working hard to bring this to you soon!
      </Text>
    </View>
  );
};

export default Currentaffairs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  message: {
    color: '#1a237e',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subMessage: {
    color: '#1a237e',
    fontSize: 16,
    textAlign: 'center',
  },
});
