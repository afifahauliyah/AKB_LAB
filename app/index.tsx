import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { 
  Ionicons, 
  FontAwesome, 
  MaterialIcons, 
  Entypo, 
  AntDesign, 
  Feather, 
  Octicons, 
  Foundation, 
  EvilIcons, 
  MaterialCommunityIcons 
} from '@expo/vector-icons';

const IconScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>
      <View style={styles.iconRow}>
        <Ionicons name="home" size={40} color="#4F8EF7" />
        <FontAwesome name="user" size={40} color="#FF8C00" />
        <MaterialIcons name="email" size={40} color="#32CD32" />
        <Entypo name="chat" size={40} color="#FF1493" />
        <AntDesign name="camera" size={40} color="#00CED1" />
        <Feather name="cloud" size={40} color="#8A2BE2" />
        <Octicons name="device-camera-video" size={40} color="#DC143C" />
        <Foundation name="heart" size={40} color="#2E8B57" />
        <EvilIcons name="location" size={40} color="#B22222" />
        <MaterialCommunityIcons name="wifi" size={40} color="#00008B" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
});

export default IconScreen;