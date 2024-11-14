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

// const PDFViewerScreen = ({route}) => {
//   const {source, title} = route.params;
//   console.log(source, '@#@SOURCE');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       {loading && <ActivityIndicator size="large" />}
//       {error && <Text style={styles.errorText}>Error: {error}</Text>}
//       {source && (
//         <Pdf
//           source={source}
//           onLoadComplete={(numberOfPages, filePath) => {
//             console.log(`PDF loaded: ${numberOfPages} pages`);
//             setLoading(false);
//           }}
//           onError={error => {
//             console.log('PDF Error:', error);
//             setError(error.toString());
//             setLoading(false);
//           }}
//           style={styles.pdf}
//         />
//       )}
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
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   pdf: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 20,
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
      <Text style={styles.title}>{title}</Text>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
