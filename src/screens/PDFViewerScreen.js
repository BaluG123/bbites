// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   View,
//   Dimensions,
//   Text,
//   SafeAreaView,
//   ActivityIndicator,
// } from 'react-native';
// import Pdf from 'react-native-pdf';
// import RNFS from 'react-native-fs';

// const PDFViewerScreen = ({route}) => {
//   const {source, title} = route.params;
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [localPath, setLocalPath] = useState(null);

//   useEffect(() => {
//     const downloadFile = async () => {
//       try {
//         const downloadDest = `${RNFS.DocumentDirectoryPath}/temp.pdf`;
//         const {promise} = RNFS.downloadFile({
//           fromUrl: source.uri,
//           toFile: downloadDest,
//         });
//         await promise;
//         setLocalPath(downloadDest);
//         setLoading(false);
//       } catch (err) {
//         console.error('Download error:', err);
//         setError(err.toString());
//         setLoading(false);
//       }
//     };

//     downloadFile();
//   }, [source.uri]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <View style={styles.pdfContainer}>
//         {loading && (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#4caf50" />
//             <Text style={styles.loadingText}>Loading PDF...</Text>
//           </View>
//         )}
//         {error && (
//           <View style={styles.errorContainer}>
//             <Text style={styles.errorText}>Error loading PDF: {error}</Text>
//           </View>
//         )}
//         {localPath && (
//           <Pdf
//             source={{uri: `file://${localPath}`}}
//             style={styles.pdf}
//             onLoadComplete={(numberOfPages, filePath) => {
//               console.log(`PDF loaded: ${numberOfPages} pages`);
//             }}
//             onError={error => {
//               console.log('PDF Error:', error);
//               setError(error.toString());
//             }}
//             onLoadProgress={percentage => {
//               console.log(`Loading: ${percentage * 100}%`);
//             }}
//             enablePaging={true}
//             trustAllCerts={true}
//           />
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   pdfContainer: {
//     flex: 1,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//   },
//   pdf: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//   },
// });

// export default PDFViewerScreen;

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';

const PDFViewerScreen = ({route}) => {
  const {source, title} = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [localPath, setLocalPath] = useState(null);

  useEffect(() => {
    const downloadFile = async () => {
      try {
        const downloadDest = `${RNFS.DocumentDirectoryPath}/temp.pdf`;
        const {promise} = RNFS.downloadFile({
          fromUrl: source.uri,
          toFile: downloadDest,
        });
        await promise;
        setLocalPath(downloadDest);
        setLoading(false);
      } catch (err) {
        console.error('Download error:', err);
        setError(err.toString());
        setLoading(false);
      }
    };

    downloadFile();
  }, [source.uri]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.pdfContainer}>
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4caf50" />
            <Text style={styles.loadingText}>Loading PDF...</Text>
          </View>
        )}
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Error loading PDF: {error}</Text>
          </View>
        )}
        {localPath && (
          <Pdf
            source={{uri: `file://${localPath}`}}
            style={styles.pdf}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`PDF loaded: ${numberOfPages} pages`);
            }}
            onError={error => {
              console.log('PDF Error:', error);
              setError(error.toString());
            }}
            onLoadProgress={percentage => {
              console.log(`Loading: ${percentage * 100}%`);
            }}
            enablePaging={true}
            trustAllCerts={true}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'gray',
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'green',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pdfContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});

export default PDFViewerScreen;
