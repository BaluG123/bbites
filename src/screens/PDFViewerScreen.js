// // import React from 'react';
// // import {StyleSheet, View, Dimensions, Text} from 'react-native';
// // import Pdf from 'react-native-pdf';

// // const PDFViewerScreen = ({route}) => {
// //   const {source, title} = route.params;
// //   console.log(source);

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>{title}</Text>
// //       <Pdf source={source} style={styles.pdf} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {flex: 1, backgroundColor: '#fff'},
// //   title: {fontSize: 18, fontWeight: 'bold', textAlign: 'center', margin: 10},
// //   pdf: {
// //     flex: 1,
// //     width: Dimensions.get('window').width,
// //     height: Dimensions.get('window').height,
// //   },
// // });

// // export default PDFViewerScreen;

// import React from 'react';
// import {StyleSheet, View, Dimensions, Text, SafeAreaView} from 'react-native';
// import Pdf from 'react-native-pdf';

// // const PDFViewerScreen = ({route}) => {
// //   const {source, title} = route.params;

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <Text style={styles.title}>{title}</Text>
// //       <View style={styles.pdfContainer}>
// //         <Pdf
// //           source={source}
// //           style={styles.pdf}
// //           onLoadComplete={(numberOfPages, filePath) => {
// //             console.log(`PDF loaded: ${numberOfPages} pages`);
// //           }}
// //           onError={error => {
// //             console.log('PDF Error:', error);
// //           }}
// //           enablePaging={true}
// //           scale={1.0}
// //         />
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// const PDFViewerScreen = ({route}) => {
//   const {source, title} = route.params;

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <View style={styles.pdfContainer}>
//         <Pdf
//           trustAllCerts={false}
//           source={source}
//           style={styles.pdf}
//           onLoadComplete={(numberOfPages, filePath) => {
//             console.log(`PDF loaded: ${numberOfPages} pages`);
//           }}
//           onError={error => {
//             console.log('PDF Error:', error);
//           }}
//           enablePaging={true}
//           scale={1.0}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   pdfContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 10,
//   },
//   pdf: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

// export default PDFViewerScreen;

// PDFViewerScreen.js
import React from 'react';
import {StyleSheet, View, Dimensions, Text, SafeAreaView} from 'react-native';
import Pdf from 'react-native-pdf';

const PDFViewerScreen = ({route}) => {
  const {source, title} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pdfContainer}>
        <Pdf
          source={source}
          style={styles.pdf}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`PDF loaded: ${numberOfPages} pages`);
          }}
          onError={error => {
            console.log('PDF Error:', error);
            console.log('Source:', source); // Debug log
          }}
          enablePaging={true}
          scale={1.0}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pdfContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PDFViewerScreen;
