// CustomHeader.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the Material Community Icons


const CustomHeader = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
      <MaterialCommunityIcons
          name="menu" // Replace with the icon name you want
          size={30} // Adjust the size as needed
          color="#007AFF" // Adjust the color as needed
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#007AFF', // Change to your preferred header background color
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default CustomHeader;
