// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Alert,
// } from 'react-native';
// import RNFS from 'react-native-fs';

// const years = [
//   '2014',
//   '2015',
//   '2016',
//   '2017',
//   '2018',
//   '2019',
//   '2020',
//   '2021',
//   '2022',
//   '2023',
//   '2024',
// ];

// const PDFListScreen = ({navigation}) => {
//   const getPdfPath = (year, paperNumber) => {
//     return `file:///android_asset/pdf/${year}/paper${paperNumber}.pdf`;
//   };

//   const checkFileExists = async path => {
//     try {
//       const exists = await RNFS.exists(path);
//       if (!exists) {
//         Alert.alert('File not found', `The file at ${path} does not exist.`);
//       }
//       return exists;
//     } catch (error) {
//       console.error('Error checking file existence:', error);
//       return false;
//     }
//   };

//   const renderItem = ({item: year}) => (
//     <View style={styles.yearContainer}>
//       <Text style={styles.yearText}>{year}</Text>
//       <TouchableOpacity
//         style={styles.paperButton}
//         onPress={async () => {
//           const path = getPdfPath(year, 1);
//           if (await checkFileExists(path)) {
//             navigation.navigate('PDFViewerScreen', {
//               source: {uri: path},
//               title: `${year} - Paper 1`,
//             });
//           }
//         }}>
//         <Text style={styles.paperText}>Paper 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.paperButton}
//         onPress={async () => {
//           const path = getPdfPath(year, 2);
//           if (await checkFileExists(path)) {
//             navigation.navigate('PDFViewerScreen', {
//               source: {uri: path},
//               title: `${year} - Paper 2`,
//             });
//           }
//         }}>
//         <Text style={styles.paperText}>Paper 2</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <FlatList
//       data={years}
//       renderItem={renderItem}
//       keyExtractor={item => item}
//       contentContainerStyle={styles.container}
//     />
//   );

//   // const getPdfPath = (year, paperNumber) => {
//   //   const path = `asset:///pdf/${year}/paper${paperNumber}.pdf`;
//   //   console.log('PDF Path:', path);
//   //   return path;
//   // };

//   // const renderItem = ({item: year}) => (
//   //   <View style={styles.yearContainer}>
//   //     <Text style={styles.yearText}>{year}</Text>
//   //     <TouchableOpacity
//   //       style={styles.paperButton}
//   //       onPress={() =>
//   //         navigation.navigate('PDFViewerScreen', {
//   //           source: {uri: getPdfPath(year, 1)},
//   //           title: `${year} - Paper 1`,
//   //         })
//   //       }>
//   //       <Text style={styles.paperText}>Paper 1</Text>
//   //     </TouchableOpacity>
//   //     <TouchableOpacity
//   //       style={styles.paperButton}
//   //       onPress={() =>
//   //         navigation.navigate('PDFViewerScreen', {
//   //           source: {uri: getPdfPath(year, 2)},
//   //           title: `${year} - Paper 2`,
//   //         })
//   //       }>
//   //       <Text style={styles.paperText}>Paper 2</Text>
//   //     </TouchableOpacity>
//   //   </View>
//   // );

//   // return (
//   //   <FlatList
//   //     data={years}
//   //     renderItem={renderItem}
//   //     keyExtractor={item => item}
//   //     contentContainerStyle={styles.container}
//   //   />
//   // );
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

/*** */

// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

// const years = [
//   '2014',
//   '2015',
//   '2016',
//   '2017',
//   '2018',
//   '2019',
//   '2020',
//   '2021',
//   '2022',
//   '2023',
//   '2024',
// ];

// const PDFListScreen = ({navigation}) => {
//   const getPdfPath = (year, paperNumber) => {
//     const path = `file:///android_asset/pdf/${year}/paper${paperNumber}.pdf`;
//     console.log('PDF Path:', path); // Debugging statement
//     return path;
//   };

//   const renderItem = ({item: year}) => (
//     <View style={styles.yearContainer}>
//       <Text style={styles.yearText}>{year}</Text>
//       <TouchableOpacity
//         style={styles.paperButton}
//         onPress={() =>
//           navigation.navigate('PDFViewerScreen', {
//             source: {uri: getPdfPath(year, 1)},
//             title: `${year} - Paper 1`,
//           })
//         }>
//         <Text style={styles.paperText}>Paper 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.paperButton}
//         onPress={() =>
//           navigation.navigate('PDFViewerScreen', {
//             source: {uri: getPdfPath(year, 2)},
//             title: `${year} - Paper 2`,
//           })
//         }>
//         <Text style={styles.paperText}>Paper 2</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <FlatList
//       data={years}
//       renderItem={renderItem}
//       keyExtractor={item => item}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   yearContainer: {
//     marginBottom: 16,
//   },
//   yearText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   paperButton: {
//     backgroundColor: '#4caf50',
//     padding: 10,
//     marginVertical: 4,
//     borderRadius: 5,
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

const years = [
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
];

const PDFListScreen = ({navigation}) => {
  // const getPdfPath = (year, paperNumber) => {
  //   // Update this with the appropriate Google Drive URL format
  //   return `https://drive.google.com/uc?export=view&id=PAPER_FILE_ID_HERE`;
  // };

  const getPdfPath = (year, paperNumber) => {
    if (year === '2014' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1U-XekUI9I5Pbjse8ps7RDTmX9rBvJak0';
    } else {
      // Use your previous logic for other years/papers
      return `https://drive.google.com/uc?export=download&id=1U-XekUI9I5Pbjse8ps7RDTmX9rBvJak0`;
    }
  };

  const renderItem = ({item: year}) => (
    <View style={styles.yearContainer}>
      <Text style={styles.yearText}>{year}</Text>
      <TouchableOpacity
        style={styles.paperButton}
        onPress={() =>
          navigation.navigate('PDFViewerScreen', {
            source: {uri: getPdfPath(year, 1)},
            title: `${year} - Paper 1`,
          })
        }>
        <Text style={styles.paperText}>Paper 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paperButton}
        onPress={() =>
          navigation.navigate('PDFViewerScreen', {
            source: {uri: getPdfPath(year, 2)},
            title: `${year} - Paper 2`,
          })
        }>
        <Text style={styles.paperText}>Paper 2</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={years}
      keyExtractor={item => item}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  yearContainer: {
    marginBottom: 16,
  },
  yearText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paperButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    marginVertical: 4,
    borderRadius: 5,
  },
  paperText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PDFListScreen;
