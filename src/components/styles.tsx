import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { responsiveFontSize as fs } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'linear-gradient(180deg, #8ecae6 0%, #fff 100%)',
        alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        // flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    questionText: {
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        fontSize: fs(2.5),
        color: '#1a2d46',
        marginLeft: 5
    },
    answerText: {
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        fontSize: fs(2.4),
        color: '#6e6e6e',
        marginBottom: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: 'green',
        marginLeft: 5,
    },
    arrowIcon: {
        color: 'green',
        marginRight: 10,
    },
    img: {
        width: 300,
        height: 180,
        aspectRatio: 1 * 1.4
    },
    separator: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 10
    }
});

