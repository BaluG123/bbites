import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Ncert from "../screens/ncert";
import Generalknowledge from "../screens/generalknowledge";
import Currentaffairs from "../screens/currentaffairs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Jobs from "../screens/jobs";
const Tab = createBottomTabNavigator()


const Navigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let MaterialCommunityIcon;

                        if (route.name === 'Home') {
                            MaterialCommunityIcon = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'NCERT') {
                            MaterialCommunityIcon = focused ? 'book-open-page-variant' : 'book-open-page-variant-outline';
                        } else if (route.name === 'General Knowledge') {
                            MaterialCommunityIcon = focused ? 'alpha-g-circle' : 'alpha-g-circle-outline';
                        } else if (route.name === 'CA') {
                            MaterialCommunityIcon = focused ? 'newspaper-variant-multiple-outline' : 'newspaper-variant-multiple';
                        } else if (route.name === 'GK') {
                            MaterialCommunityIcon = focused ? 'file-document-multiple' : 'file-document-multiple-outline';
                        }
                        else if (route.name === 'jobs') {
                            MaterialCommunityIcon = focused ? 'briefcase-account' : 'briefcase-account-outline';
                        }
                        // You can return any component that you like here!
                        return <MaterialCommunityIcons name={MaterialCommunityIcon} size={30} color={'#1DA1F2'} />;
                    },
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#333',
                        width:120,
                        marginHorizontal:20
                    },
                    tabStyle: { height: 70 },
                    labelStyle: { fontSize: 20 },
                    headerStyle: {
                        backgroundColor: '#1DA1F2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                    },
                    headerTitleAlign: 'center'
                })}
            >
                {/* <Tab.Screen name="Home" component={Home} /> */}
                <Tab.Screen name="CA" component={Currentaffairs} />
                <Tab.Screen name="NCERT" component={Ncert} />
                <Tab.Screen name="GK" component={Generalknowledge} />
                <Tab.Screen name="jobs" component={Jobs} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;