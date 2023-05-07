import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Ncert from "../screens/ncert";
import Generalknowledge from "../screens/generalknowledge";
import Currentaffairs from "../screens/currentaffairs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator()


const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let MaterialCommunityIcon;

                        if (route.name === 'Home') {
                            MaterialCommunityIcon = focused
                                ? 'alpha-h-circle'
                                : 'alpha-h-circle-outline';
                        } else if (route.name === 'NCERT') {
                            MaterialCommunityIcon = focused ? 'alpha-n-circle' : 'alpha-n-circle-outline';
                        } else if (route.name === 'General Knowledge') {
                            MaterialCommunityIcon = focused ? 'alpha-g-circle' : 'alpha-g-circle-outline';
                        } else if (route.name === 'Current Affairs') {
                            MaterialCommunityIcon = focused ? 'alpha-c-circle' : 'alpha-c-circle-outline';
                        } else if (route.name === 'GK') {
                            MaterialCommunityIcon = focused ? 'alpha-g-circle' : 'alpha-g-circle-outline';
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
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Current Affairs" component={Currentaffairs} />
                <Tab.Screen name="NCERT" component={Ncert} />
                <Tab.Screen name="GK" component={Generalknowledge} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;