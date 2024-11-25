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
//     if (year === '2014' && paperNumber === 1) {
//       return 'https://drive.google.com/uc?export=download&id=1U-XekUI9I5Pbjse8ps7RDTmX9rBvJak0';
//     } else {
//       // Use your previous logic for other years/papers
//       return `https://drive.google.com/uc?export=download&id=1U-XekUI9I5Pbjse8ps7RDTmX9rBvJak0`;
//     }
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
//       keyExtractor={item => item}
//       renderItem={renderItem}
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

import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PaperButton = ({year, paperNumber, onPress}) => (
  <TouchableOpacity style={styles.paperButton} onPress={onPress}>
    <Text style={styles.paperText}>{`Paper ${paperNumber}`}</Text>
  </TouchableOpacity>
);

const PDFListScreen = ({navigation}) => {
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

  // const getPdfPath = (year, paperNumber) => {
  //   if (year === '2014' && paperNumber === 1) {
  //     return 'https://drive.google.com/uc?export=download&id=1U-XekUI9I5Pbjse8ps7RDTmX9rBvJak0';
  //   } else {
  //     // Use your previous logic for other years/papers
  //     return 'https://drive.google.com/uc?export=download&id=1U-XekUI9I5Pbjse8ps7RDTmX9rBvJak0';
  //   }
  // };

  const getPdfPath = (year, paperNumber) => {
    if (year === '2014' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1U-XekUI9I5Pbjse8ps7RDTmX9rBvJak0';
    } else if (year === '2014' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1U2w7FogD96HD7M9UA3oMrZg2KNTVQBLt';
    } else if (year === '2015' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1dTrCu2X-krJnz5Zb6r-8JVgfwBem8vaw';
    } else if (year === '2015' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1gC4EmAKmDmDLSKWPSoUVFzPqfX77WIPi';
    } else if (year === '2016' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1jQx75GOifaTpvSJENP5iJUJfRFrZ0tg5';
    } else if (year === '2016' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1UXzMlKGGR1ercIXB4TZkM1yqhmMJmWTf';
    } else if (year === '2017' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1dL8rYzPmI20X0LIerTI54rxDP0LNJ59_';
    } else if (year === '2017' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1kH4JV-OB7F61FTIK6iCsa17vaYYRzwPB';
    } else if (year === '2018' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1Yl8n8O3uHo7FHuJnRd_5CXWO0KCQs47P';
    } else if (year === '2018' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1Yz2LdrJLCy8Nkf89rR1FC3eRCJ1-IHlO';
    } else if (year === '2019' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=141fMQ9benZ2h2ckN95ziqjZN-anSrPgx';
    } else if (year === '2019' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1JwnI4nVrdZVU8cvuPb-bo-IpkLs6CARz';
    } else if (year === '2020' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1S1eAWR_WeY7CP4K_Hca0LsGwQx9-b9d4';
    } else if (year === '2020' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1USZ0f2V0_FPQkUZNw0mMziw82sTUPOdm';
    } else if (year === '2021' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1DK9XQ7EA8Yj-Le9xnlCt2IwqtQk6ydwT';
    } else if (year === '2021' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1UyK1ntHhXJkrByRTHmii2sbnOSA3hlO1';
    } else if (year === '2022' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1OYl9LqGbZijczPLPrLeZo9R181QYt3HN';
    } else if (year === '2022' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1j9u2g60WxbXKxDUDM7ljHgYh9NFrsHmm';
    } else if (year === '2023' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1fWEePukANYyz_qrqgsGPsHuKFxnXX574';
    } else if (year === '2023' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1Ub_HFbF7Jk9quvYSeDiyHuSFE7oIPp07';
    } else if (year === '2024' && paperNumber === 1) {
      return 'https://drive.google.com/uc?export=download&id=1BmPSTr-n_8Zm8VWSqlOamjb77f0J6WYw';
    } else if (year === '2024' && paperNumber === 2) {
      return 'https://drive.google.com/uc?export=download&id=1p7HdPPeqsu5KORsfIxRU-EGod1J_3OxA';
    } else {
      // Default link or handle other cases
      return 'https://drive.google.com/uc?export=download&id=1U-XekUI9I5Pbjse8ps7RDTmX9rBvJak0';
    }
  };

  const renderYearSection = ({item: year}) => (
    <View style={styles.yearSection}>
      <Text style={styles.yearText}>{year}</Text>
      <View style={styles.paperButtonsContainer}>
        <PaperButton
          year={year}
          paperNumber={1}
          onPress={() =>
            navigation.navigate('PDFViewerScreen', {
              source: {uri: getPdfPath(year, 1)},
              title: `${year} - Paper 1`,
            })
          }
        />
        <PaperButton
          year={year}
          paperNumber={2}
          onPress={() =>
            navigation.navigate('PDFViewerScreen', {
              source: {uri: getPdfPath(year, 2)},
              title: `${year} - Paper 2`,
            })
          }
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={years}
        keyExtractor={item => item}
        renderItem={renderYearSection}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: wp('4%'),
  },
  yearSection: {
    backgroundColor: '#fff',
    padding: wp('4%'),
    borderRadius: wp('3%'),
    marginBottom: hp('2%'),
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
  yearText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: hp('1%'),
  },
  paperButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paperButton: {
    backgroundColor: '#1a237e',
    padding: wp('3%'),
    borderRadius: wp('2%'),
    flex: 1,
    marginHorizontal: wp('1%'),
  },
  paperText: {
    color: '#fff',
    fontSize: wp('3.5%'),
    textAlign: 'center',
  },
});

export default PDFListScreen;
