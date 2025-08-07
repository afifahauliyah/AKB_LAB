import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      {/* Header dengan ikon home di samping */}
      <View style={styles.header}>
        <Ionicons name="home-outline" size={32} color="#333" />
      </View>

      {/* Navigasi stack dari expo-router */}
      <Stack />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F8F8F8",
    paddingTop: 40,
    paddingHorizontal: 16,
    flexDirection: "row", // horizontal layout
    alignItems: "center",
  },
});
