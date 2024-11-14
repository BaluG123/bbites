// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

// const pdfData = {
//   2014: {
//     paper1: require('../assets/pdf/2014/paper1.pdf'),
//     paper2: require('../assets/pdf/2014/paper2.pdf'),
//   },
//   2015: {
//     paper1: require('../assets/pdf/2015/paper1.pdf'),
//     paper2: require('../assets/pdf/2015/paper2.pdf'),
//   },
//   2016: {
//     paper1: require('../assets/pdf/2016/paper1.pdf'),
//     paper2: require('../assets/pdf/2016/paper2.pdf'),
//   },
//   2017: {
//     paper1: require('../assets/pdf/2017/paper1.pdf'),
//     paper2: require('../assets/pdf/2017/paper2.pdf'),
//   },
//   2018: {
//     paper1: require('../assets/pdf/2018/paper1.pdf'),
//     paper2: require('../assets/pdf/2018/paper2.pdf'),
//   },
//   2019: {
//     paper1: require('../assets/pdf/2019/paper1.pdf'),
//     paper2: require('../assets/pdf/2019/paper2.pdf'),
//   },
//   2020: {
//     paper1: require('../assets/pdf/2020/paper1.pdf'),
//     paper2: require('../assets/pdf/2020/paper2.pdf'),
//   },
//   2021: {
//     paper1: require('../assets/pdf/2021/paper1.pdf'),
//     paper2: require('../assets/pdf/2021/paper2.pdf'),
//   },
//   2022: {
//     paper1: require('../assets/pdf/2022/paper1.pdf'),
//     paper2: require('../assets/pdf/2022/paper2.pdf'),
//   },
//   2023: {
//     paper1: require('../assets/pdf/2023/paper1.pdf'),
//     paper2: require('../assets/pdf/2023/paper2.pdf'),
//   },
//   2024: {
//     paper1: require('../assets/pdf/2024/paper1.pdf'),
//     paper2: require('../assets/pdf/2024/paper2.pdf'),
//   },
// };

// const PDFListScreen = ({navigation}) => {
//   const renderItem = ({item: year}) => (
//     <View style={styles.yearContainer}>
//       <Text style={styles.yearText}>{year}</Text>
//       <TouchableOpacity
//         style={styles.paperButton}
//         onPress={() =>
//           navigation.navigate('PDFViewerScreen', {
//             uri: pdfData[year].paper1,
//             title: `${year} - Paper 1`,
//           })
//         }>
//         <Text style={styles.paperText}>Paper 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.paperButton}
//         onPress={() =>
//           navigation.navigate('PDFViewer', {
//             uri: pdfData[year].paper2,
//             title: `${year} - Paper 2`,
//           })
//         }>
//         <Text style={styles.paperText}>Paper 2</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <FlatList
//       data={Object.keys(pdfData)}
//       renderItem={renderItem}
//       keyExtractor={item => item}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {padding: 20},
//   yearContainer: {marginBottom: 20},
//   yearText: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
//   paperButton: {
//     padding: 10,
//     backgroundColor: '#4caf50',
//     borderRadius: 5,
//     marginTop: 5,
//   },
//   paperText: {color: 'white', textAlign: 'center'},
// });

// export default PDFListScreen;

// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

// // const pdfData = {
// //   2014: {
// //     paper1: require('../assets/pdf/2014/paper1.pdf'),
// //     paper2: require('../assets/pdf/2014/paper2.pdf'),
// //   },
// //   2015: {
// //     paper1: require('../assets/pdf/2015/paper1.pdf'),
// //     paper2: require('../assets/pdf/2015/paper2.pdf'),
// //   },
// //   2016: {
// //     paper1: require('../assets/pdf/2016/paper1.pdf'),
// //     paper2: require('../assets/pdf/2016/paper2.pdf'),
// //   },
// //   2017: {
// //     paper1: require('../assets/pdf/2017/paper1.pdf'),
// //     paper2: require('../assets/pdf/2017/paper2.pdf'),
// //   },
// //   2018: {
// //     paper1: require('../assets/pdf/2018/paper1.pdf'),
// //     paper2: require('../assets/pdf/2018/paper2.pdf'),
// //   },
// //   2019: {
// //     paper1: require('../assets/pdf/2019/paper1.pdf'),
// //     paper2: require('../assets/pdf/2019/paper2.pdf'),
// //   },
// //   2020: {
// //     paper1: require('../assets/pdf/2020/paper1.pdf'),
// //     paper2: require('../assets/pdf/2020/paper2.pdf'),
// //   },
// //   2021: {
// //     paper1: require('../assets/pdf/2021/paper1.pdf'),
// //     paper2: require('../assets/pdf/2021/paper2.pdf'),
// //   },
// //   2022: {
// //     paper1: require('../assets/pdf/2022/paper1.pdf'),
// //     paper2: require('../assets/pdf/2022/paper2.pdf'),
// //   },
// //   2023: {
// //     paper1: require('../assets/pdf/2023/paper1.pdf'),
// //     paper2: require('../assets/pdf/2023/paper2.pdf'),
// //   },
// //   2024: {
// //     paper1: require('../assets/pdf/2024/paper1.pdf'),
// //     paper2: require('../assets/pdf/2024/paper2.pdf'),
// //   },
// // };

// // const PDFListScreen = ({navigation}) => {
// //   const renderItem = ({item: year}) => (
// //     <View style={styles.yearContainer}>
// //       <Text style={styles.yearText}>{year}</Text>
// //       <TouchableOpacity
// //         style={styles.paperButton}
// //         onPress={() =>
// //           navigation.navigate('PDFViewerScreen', {
// //             source: pdfData[year].paper1, // Changed from uri to source
// //             title: `${year} - Paper 1`,
// //           })
// //         }>
// //         <Text style={styles.paperText}>Paper 1</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity
// //         style={styles.paperButton}
// //         onPress={() =>
// //           navigation.navigate('PDFViewerScreen', {
// //             // Consistent screen name
// //             source: pdfData[year].paper2, // Changed from uri to source
// //             title: `${year} - Paper 2`,
// //           })
// //         }>
// //         <Text style={styles.paperText}>Paper 2</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );

// //   return (
// //     <FlatList
// //       data={Object.keys(pdfData).sort((a, b) => b - a)} // Sort years in descending order
// //       renderItem={renderItem}
// //       keyExtractor={item => item}
// //       contentContainerStyle={styles.container}
// //     />
// //   );
// // };

// const pdfData = {
//   2014: {
//     paper1: {uri: require('../assets/pdf/2014/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2014/paper2.pdf').uri, cache: true},
//   },
//   2015: {
//     paper1: {uri: require('../assets/pdf/2015/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2015/paper2.pdf').uri, cache: true},
//   },
//   2016: {
//     paper1: {uri: require('../assets/pdf/2016/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2016/paper2.pdf').uri, cache: true},
//   },
//   2017: {
//     paper1: {uri: require('../assets/pdf/2017/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2017/paper2.pdf').uri, cache: true},
//   },
//   2018: {
//     paper1: {uri: require('../assets/pdf/2018/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2018/paper2.pdf').uri, cache: true},
//   },
//   2019: {
//     paper1: {uri: require('../assets/pdf/2019/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2019/paper2.pdf').uri, cache: true},
//   },
//   2020: {
//     paper1: {uri: require('../assets/pdf/2020/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2020/paper2.pdf').uri, cache: true},
//   },
//   2021: {
//     paper1: {uri: require('../assets/pdf/2021/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2021/paper2.pdf').uri, cache: true},
//   },
//   2022: {
//     paper1: {uri: require('../assets/pdf/2022/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2022/paper2.pdf').uri, cache: true},
//   },
//   2023: {
//     paper1: {uri: require('../assets/pdf/2023/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2023/paper2.pdf').uri, cache: true},
//   },
//   2024: {
//     paper1: {uri: require('../assets/pdf/2024/paper1.pdf').uri, cache: true},
//     paper2: {uri: require('../assets/pdf/2024/paper2.pdf').uri, cache: true},
//   },
// };

// const PDFListScreen = ({navigation}) => {
//   const renderItem = ({item: year}) => (
//     <View style={styles.yearContainer}>
//       <Text style={styles.yearText}>{year}</Text>
//       <TouchableOpacity
//         style={styles.paperButton}
//         onPress={() =>
//           navigation.navigate('PDFViewerScreen', {
//             source: pdfData[year].paper1,
//             title: `${year} - Paper 1`,
//           })
//         }>
//         <Text style={styles.paperText}>Paper 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.paperButton}
//         onPress={() =>
//           navigation.navigate('PDFViewerScreen', {
//             source: pdfData[year].paper2,
//             title: `${year} - Paper 2`,
//           })
//         }>
//         <Text style={styles.paperText}>Paper 2</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <FlatList
//       data={Object.keys(pdfData).sort((a, b) => b - a)}
//       renderItem={renderItem}
//       keyExtractor={item => item}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   yearContainer: {
//     marginBottom: 20,
//   },
//   yearText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   paperButton: {
//     padding: 10,
//     backgroundColor: '#4caf50',
//     borderRadius: 5,
//     marginTop: 5,
//   },
//   paperText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default PDFListScreen;

// PDFListScreen.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

// PDF data structure with proper source formatting
const pdfData = {
  2014: {
    paper1: {uri: 'asset:/pdf/2014/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2014/paper2.pdf', cache: true},
  },
  2015: {
    paper1: {uri: 'asset:/pdf/2015/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2015/paper2.pdf', cache: true},
  },
  2016: {
    paper1: {uri: 'asset:/pdf/2016/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2016/paper2.pdf', cache: true},
  },
  2017: {
    paper1: {uri: 'asset:/pdf/2017/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2017/paper2.pdf', cache: true},
  },
  2018: {
    paper1: {uri: 'asset:/pdf/2018/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2018/paper2.pdf', cache: true},
  },
  2019: {
    paper1: {uri: 'asset:/pdf/2019/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2019/paper2.pdf', cache: true},
  },
  2020: {
    paper1: {uri: 'asset:/pdf/2020/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2020/paper2.pdf', cache: true},
  },
  2021: {
    paper1: {uri: 'assets:/pdf/2021/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2021/paper2.pdf', cache: true},
  },
  2022: {
    paper1: {uri: 'asset:/pdf/2022/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2022/paper2.pdf', cache: true},
  },
  2023: {
    paper1: {uri: 'asset:/pdf/2023/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2023/paper2.pdf', cache: true},
  },
  2024: {
    paper1: {uri: 'asset:/pdf/2024/paper1.pdf', cache: true},
    paper2: {uri: 'asset:/pdf/2024/paper2.pdf', cache: true},
  },
};

const PDFListScreen = ({navigation}) => {
  const renderItem = ({item: year}) => (
    <View style={styles.yearContainer}>
      <Text style={styles.yearText}>{year}</Text>
      <TouchableOpacity
        style={styles.paperButton}
        onPress={() =>
          navigation.navigate('PDFViewerScreen', {
            source: pdfData[year].paper1,
            title: `${year} - Paper 1`,
          })
        }>
        <Text style={styles.paperText}>Paper 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paperButton}
        onPress={() =>
          navigation.navigate('PDFViewerScreen', {
            source: pdfData[year].paper2,
            title: `${year} - Paper 2`,
          })
        }>
        <Text style={styles.paperText}>Paper 2</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={Object.keys(pdfData).sort((a, b) => b - a)}
      renderItem={renderItem}
      keyExtractor={item => item}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  yearContainer: {
    marginBottom: 20,
  },
  yearText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paperButton: {
    padding: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
    marginTop: 5,
  },
  paperText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PDFListScreen;
