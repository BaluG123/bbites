// import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
// import axios from 'axios';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ncert from './ncert';
// import { GAMBannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'; 
// import { AppOpenAd } from 'react-native-google-mobile-ads'; 
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { responsiveFontSize as fs } from "react-native-responsive-dimensions";

// const Jobs = ({navigation}) => {
//   const [jobs, setJobs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   const appOpenAd = AppOpenAd.createForAdRequest('ca-app-pub-2627956667785383/1929961128', {
//     requestNonPersonalizedAdsOnly: false,
//     keywords: ['fashion', 'clothing'],
//   });

//   useEffect(() => {
//     appOpenAd.load();
//     setTimeout(() => {
//     appOpenAd.show();
//     }, 20000);
//     // Fetch job data from your API
//     axios.get('https://CompetativeQuiz.pythonanywhere.com/quiz/jobapi')
//       .then(response => {
//         setJobs(response.data.results);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching job data:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   const handleRefresh = () => {
//     // Set the refreshing state to true to show the loading indicator
//     setRefreshing(true);
  
//     // Fetch updated job data from your API
//     axios.get('https://CompetativeQuiz.pythonanywhere.com/quiz/jobapi')
//       .then(response => {
//         setJobs(response.data.results);
//         setRefreshing(false); // Hide the loading indicator when data is fetched
//       })
//       .catch(error => {
//         console.error('Error fetching job data:', error);
//         setRefreshing(false); // Hide the loading indicator in case of an error
//       });
//   };
  

//   const openLink = (url) => {
//     Linking.openURL(url);
//   };

//   const handleShare = (job) => {
//     const message = `Job Title: ${job.title}\n${job.state}\nlevel:${job.level}\nvecancy :${job.total_posts}\nlast date to apply :${job.last_date_to_apply}\n\n Check out this app for more details: https://play.google.com/store/apps/details?id=com.brainbites&hl=en&gl=US`;
  
//     Share.share({
//       message,
//       title: 'Share Job',
//     })
//       .then(result => {
//         if (result.action === Share.sharedAction) {
//           console.log('Job shared successfully');
//         } else if (result.action === Share.dismissedAction) {
//           console.log('Sharing cancelled');
//         }
//       })
//       .catch(error => {
//         console.error('Error sharing job:', error);
//       });
//   };
  
  

//   return (
//     <ScrollView style={styles.container}
//     refreshControl={
//       <RefreshControl
//         refreshing={refreshing}
//         onRefresh={handleRefresh}
//         colors={['#1DA1F2']} // Customize the color of the refresh indicator
//       />
//     }
//     >
//       <GAMBannerAd
//         unitId='ca-app-pub-2627956667785383/9677074302'
//         sizes={[BannerAdSize.FULL_BANNER]}
//         requestOptions={{
//           requestNonPersonalizedAdsOnly: false,
//         }}
//       />
//         {isLoading ? (
//     <ActivityIndicator size="large" color="#1DA1F2" style={styles.activityIndicator} />
//   ) : (
//       jobs.map((job) => (
//         <TouchableOpacity
//           key={job.id}
//           // onPress={() => openLink(job.official_link)}
//           style={styles.jobItem}
//         >
//           <Text style={styles.title}>{job.title}</Text>
//           <Text style={styles.department}>{job.department_name}</Text>
//           <Text style={styles.level}>{job.level}</Text>
//           <Text style={styles.detail}>Education: {job.education_qualification}</Text>
//           <Text style={styles.detail}>Location: {job.job_location}</Text>
//           <Text style={styles.detail}>Age Range: {job.age_range}</Text>
//           <Text style={styles.detail}>Starting Date: {job.starting_date}</Text>
//           <Text style={styles.detail}>Last Date to Apply: {job.last_date_to_apply}</Text>
//           <TouchableOpacity onPress={() => openLink(job.notification_link)}>
//             <Text style={[styles.link, { color: 'blue' }]}>Notification Link</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => openLink(job.apply_online_link)}>
//             <Text style={[styles.link, { color: 'blue' }]}>Apply Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleShare(job)} style={styles.shareButton}>
//           <MaterialCommunityIcons name="share-variant" size={30} color="#1DA1F2" />
//           </TouchableOpacity>
//          </TouchableOpacity>
//       ))
//   )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//     color:'black'
//   },
//   jobItem: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: fs(2.8),
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color:'black'
//   },
//   department: {
//     fontSize: fs(2.5),
//     marginBottom: 8,
//     color:'black'
//   },
//   level: {
//     fontSize: fs(2.2),
//     marginBottom: 8,
//     color:'black'
//   },
//   detail: {
//     fontSize: fs(2),
//     marginBottom: 4,
//     color:'black'
//   },
//   link: {
//     fontSize: fs(2),
//     color: 'blue',
//   },
//   activityIndicator: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop:300
//   },
//   shareButton: {
//     position: 'absolute',
//     bottom: 16, // Adjust as needed
//     right: 16, // Adjust as needed
//     backgroundColor: 'white', // Button background color
//     borderRadius: 30, // Make it circular
//     padding: 10, // Adjust as needed
//   },
// });

// export default Jobs;

const Jobs = () =>{
  return (
  <View>
    <Text style={{color:'black'}}>
      updates are coming soon !
    </Text>
  </View>
  )
}


export default Jobs;