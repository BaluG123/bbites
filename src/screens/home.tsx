import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={styles.title}>Welcome to our Quiz App</Text>
                <Text style={styles.subtitle}>
                    Your go-to destination for a variety of topics including NCERT, current affairs, and general knowledge! Whether you're a student looking to test your knowledge, or simply someone who enjoys learning and staying informed, our app has something for everyone.
                    Challenge Yourself and Enhance Your Knowledge</Text>
                <Text style={styles.subtitle}>With a vast range of topics and questions to choose from, our app is the perfect way to challenge yourself and keep your mind sharp. From NCERT subjects to current affairs and general knowledge, our quizzes cover it all.</Text>
                <Text style={styles.subtitle}>So why wait? Get started today and see how much you really know! As the famous quote goes, "Knowledge is power" - and we're here to help you unlock your full potential.</Text>
                {/* <Text style={styles.quote}>"Knowledge is Power"</Text> */}
                {/* <Button title='get started' onPress={() => navigation.navigate('Current Affairs')} /> */}
                {/* <Text style={styles.quote}>"Education is not the filling of a pail, but the lighting of a fire." - William Butler Yeats</Text> */}
                <TouchableOpacity
                    style={{ backgroundColor: '#1DA1F2', borderRadius: 10, padding: 10, marginTop: 10 }}
                    onPress={() => navigation.navigate('Current Affairs')}>
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Let's get Started</Text>
                </TouchableOpacity>
                <View style={styles.imgbox}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://images.pexels.com/photos/7949588/pexels-photo-7949588.jpeg?auto=compress&cs=tinysrgb&w=600'
                        }}
                    />
                </View>

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    title: {
        fontStyle: 'italic',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 10,
        color: 'black'
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
        color: 'black'
    },
    quote: {
        fontStyle: 'italic',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10,
        color: '#1DA1F2'
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: 80,
        borderWidth: 1,
        borderColor: '#1DA1F2',
        marginTop: 5,
    },
    imgbox: {
        flex: 1,

    }
});

export default Home;