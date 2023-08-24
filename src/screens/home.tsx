// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image } from 'react-native';

// function Home({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <ScrollView>

//                 <Text style={styles.title}>Welcome to our Quiz App</Text>
//                 <Text style={styles.subtitle}>
//                     Your go-to destination for a variety of topics including NCERT, current affairs, and general knowledge! Whether you're a student looking to test your knowledge, or simply someone who enjoys learning and staying informed, our app has something for everyone.
//                     Challenge Yourself and Enhance Your Knowledge</Text>
//                 <Text style={styles.subtitle}>With a vast range of topics and questions to choose from, our app is the perfect way to challenge yourself and keep your mind sharp. From NCERT subjects to current affairs and general knowledge, our quizzes cover it all.</Text>
//                 <Text style={styles.subtitle}>So why wait? Get started today and see how much you really know! As the famous quote goes, "Knowledge is power" - and we're here to help you unlock your full potential.</Text>
//                 {/* <Text style={styles.quote}>"Knowledge is Power"</Text> */}
//                 {/* <Button title='get started' onPress={() => navigation.navigate('Current Affairs')} /> */}
//                 {/* <Text style={styles.quote}>"Education is not the filling of a pail, but the lighting of a fire." - William Butler Yeats</Text> */}
//                 <TouchableOpacity
//                     style={{ backgroundColor: '#1DA1F2', borderRadius: 10, padding: 10, marginTop: 10 }}
//                     onPress={() => navigation.navigate('CA')}>
//                     <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Let's get Started</Text>
//                 </TouchableOpacity>
//                 <View style={styles.imgbox}>
//                     <Image
//                         style={styles.image}
//                         source={{
//                             uri: 'https://images.pexels.com/photos/7949588/pexels-photo-7949588.jpeg?auto=compress&cs=tinysrgb&w=600'
//                         }}
//                     />
//                 </View>

//             </ScrollView>
//         </View>

//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 2,
//         backgroundColor: '#fff',
//         paddingHorizontal: 20,
//     },
//     title: {
//         fontStyle: 'italic',
//         fontSize: 22,
//         textAlign: 'center',
//         marginTop: 10,
//         color: 'black'
//     },
//     subtitle: {
//         fontSize: 16,
//         marginTop: 10,
//         color: 'black'
//     },
//     quote: {
//         fontStyle: 'italic',
//         fontSize: 24,
//         textAlign: 'center',
//         marginTop: 10,
//         color: '#1DA1F2'
//     },
//     image: {
//         width: 200,
//         height: 200,
//         marginLeft: 80,
//         borderWidth: 1,
//         borderColor: '#1DA1F2',
//         marginTop: 5,
//     },
//     imgbox: {
//         flex: 1,

//     }
// });

// export default Home;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

function Home({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={{
                    uri: 'https://images.unsplash.com/photo-1560807707-8cc77767d783',
                }}
                style={styles.backgroundImage}
            >
                <Text style={styles.title}>Welcome to our Quiz App</Text>
                <Text style={styles.subtitle}>
                    Your go-to destination for a variety of topics including NCERT, current affairs, and general knowledge! Whether you're a student looking to test your knowledge, or simply someone who enjoys learning and staying informed, our app has something for everyone.
                    Challenge Yourself and Enhance Your Knowledge
                </Text>
                <Text style={styles.subtitle}>
                    With a vast range of topics and questions to choose from, our app is the perfect way to challenge yourself and keep your mind sharp. From NCERT subjects to current affairs and general knowledge, our quizzes cover it all.
                </Text>
                <Text style={styles.subtitle}>
                    So why wait? Get started today and see how much you really know! As the famous quote goes, "Knowledge is power" - and we're here to help you unlock your full potential.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('CA')}
                >
                    <Text style={styles.buttonText}>Let's Get Started</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#1DA1F2',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default Home;
