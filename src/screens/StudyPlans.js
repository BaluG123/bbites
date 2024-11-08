// import {View, Text} from 'react-native';
// import React from 'react';

// const StudyPlans = () => {
//   return (
//     <View>
//       <Text>StudyPlans</Text>
//     </View>
//   );
// };

// export default StudyPlans;

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const StudyPlans = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>This feature is under development.</Text>
      <Text style={styles.subMessage}>
        We're working hard to bring this to you soon!
      </Text>
    </View>
  );
};

export default StudyPlans;

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
