import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { styles } from '../components/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { GAMBannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'; 
// import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

const Ncert = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(true);
    const [hasMoreQuestions, setHasMoreQuestions] = useState(true);
    const [error, setError] = useState(null);
    const [loadingHeader, setLoadingHeader] = useState(true);

    // const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    //     requestNonPersonalizedAdsOnly: true,
    //     keywords: ['fashion', 'clothing'],
    //   });

    useEffect(() => {
        // interstitial.load();
        // setTimeout(() => {
        //   interstitial.show()
        // }, 20000);
        axios.get(`https://CompetativeQuiz.pythonanywhere.com/quiz/ncertapi/?page=${page}&page_size=10`)
            .then((response) => {
                const newData = response.data.results.filter((question) => {
                    return !data.some((existingQuestion) => existingQuestion.id === question.id);
                });
                setData([...data, ...newData]);
                setLoading(false);
                setLoadingHeader(false);
                setHasMoreQuestions(newData.length < response.data.count);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [page]);

    const renderFooter = () => {
        if (!isLoading) return null;
        return (
            <View style={{ paddingVertical: 20 }}>
                <ActivityIndicator size="large" />
            </View>
        );
    };

    const Header = () => {
        if (loadingHeader) {
            return (
                <View style={{ paddingVertical: 20 ,marginTop:300}}>
                    <ActivityIndicator size="large" color={'#1DA1F2'} />
                </View>
            );
        }
        // return (
        //     <View style={{ paddingVertical: 0 }}>
        //         <Text>knowledge is power</Text>
        //     </View>
        // );
    };

    const renderEndMessage = () => {
        if (!hasMoreQuestions) {
            return (
                <View style={{ padding: 16 }}>
                    <Text style={{color:'black'}}>No more questions available. More questions are coming soon!</Text>
                </View>
            );
        }
        return null;
    };

    const handleLoadMore = () => {
        if (!isLoading && hasMoreQuestions) {
            setPage(page + 1);
            setLoading(true);
        }
    };

    return (
        <>
    <GAMBannerAd
        unitId='ca-app-pub-2627956667785383/3716037667'
        sizes={[BannerAdSize.FULL_BANNER]}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
        }}
      />
        <FlatList
            data={data}
            renderItem={({ item, index }) =>
                <View style={styles.container}>
                    <Text style={styles.questionText}>{`${index + 1}. ${item.question}`}</Text>
                    <Text style={styles.answerText}><MaterialIcons name="arrow-right-alt" size={30} style={styles.arrowIcon} />{item.answer}</Text>
                </View>
            }
            keyExtractor={(item) => item.id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListHeaderComponent={<Header />}
            ListFooterComponent={renderFooter}
            ListFooterComponent={renderEndMessage}
        />
        </>
    );
};

export default Ncert;
