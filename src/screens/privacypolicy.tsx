import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PrivacyPolicy() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Privacy Policy</Text>
            <Text style={styles.paragraph}>
                We take your privacy seriously and are committed to protecting your personal information. This privacy policy explains how we collect, use, and share information about you when you use our app.
            </Text>
            <Text style={styles.subheading}>Information we collect:</Text>
            <Text style={styles.paragraph}>
                When you use our app, we may collect certain information about you, such as your name, email address, and location. We also collect information about your use of the app, such as which questions you answer and how long you spend on each question.
            </Text>
            <Text style={styles.subheading}>How we use your information:</Text>
            <Text style={styles.paragraph}>
                We use the information we collect to improve our app and provide a better user experience. We may also use your information to send you updates and promotions related to the app.
            </Text>
            <Text style={styles.subheading}>Sharing your information:</Text>
            <Text style={styles.paragraph}>
                We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights.
            </Text>
            <Text style={styles.subheading}>Data retention:</Text>
            <Text style={styles.paragraph}>
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations.
            </Text>
            <Text style={styles.subheading}>Security:</Text>
            <Text style={styles.paragraph}>
                We take appropriate measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </Text>
            <Text style={styles.subheading}>Updates to this policy:</Text>
            <Text style={styles.paragraph}>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our app.
            </Text>
            <Text style={styles.subheading}>Contact us:</Text>
            <Text style={styles.paragraph}>
                If you have any questions or concerns about our privacy policy, please contact us at [insert contact email address].
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
    },
});
