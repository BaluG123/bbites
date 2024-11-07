import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {getChapters} from '../api/client';

const ChaptersScreen = ({navigation}) => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchChapters();
  }, []);

  const fetchChapters = async () => {
    try {
      const response = await getChapters();
      setChapters(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch chapters');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#f4511e" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={chapters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MainsPrelimsQuestions', {
                  subject: item.subject,
                  classNumber: item.class_number,
                })
              }>
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.title}>{item.subject}</Text>
                <Text style={styles.title}>{item.class_number}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default ChaptersScreen;
